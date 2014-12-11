var TemplateHelper = {

    Init : function() {
        var objectInstance = this;

        this.EventManager.registerEvent('displayMovement');

        this.Component.Init(objectInstance);

        jQuery(window).bind('resize scroll', function(){
            objectInstance.EventManager.triggerEvent('displayMovement');
        });

        jQuery(window).bind('resize', function(){
          objectInstance.EventManager.triggerEvent('displayResize');
        });
    }

};

TemplateHelper.ThirdParty = {

  libraries : {
    owlCarousel : {
      path     : "assets/scripts/owl-carousel/owl.carousel.js",
      alias    : "owlCarousel",
      loaded   : 0
    },
    knob        : {
      path     : "assets/scripts/jquery-knob.js",
      alias    : "knob",
      loaded   : 0
    },
    googleMapExternal : {
      type     : "googleMaps",
      alias    : "googleMapExternal",
      loaded   : 0
    },
    googleMap : {
      path     : "assets/scripts/jquery.gmap.min.js",
      alias    : "googleMap",
      loaded   : 0
    },
    chosen : {
      path   : "assets/scripts/chosen/chosen.jquery.min.js",
      alias  : "chosen",
      loaded : 0
    }
  },

  markAsLoaded : function(alias) {
    this.libraries[alias].loaded = 1;
  },

  loadLibrary : function(alias, object, method) {
    var objectInstance = this;

    jQuery.getScript(this.libraries[alias].path).done(function(){
      objectInstance.markAsLoaded(alias);
      object[method].call(object, {});
    });

  }

};

TemplateHelper.EventManager = {

    eventList : {},

    init : function() {

    },

    registerEvent : function(event_identifier) {
        if(typeof this.eventList[event_identifier] == "undefined")
            this.eventList[event_identifier] = [];
    },

    unRegisterEvent : function(event_identifier) {
        if(typeof this.eventList[event_identifier] != "undefined")
            delete this.eventList[event_identifier];
    },

    triggerEvent  : function(event_identifier, data) {
        data = typeof data != "undefined" ? data : {};

        if(typeof this.eventList[event_identifier] != "undefined") {
            var currentEventInformation = this.eventList[event_identifier];

            for(var currentListenerIndex in currentEventInformation) {
                var currentListener       = currentEventInformation[currentListenerIndex],
                    currentListenerMethod = currentListener['method'];

                currentListener.object[currentListenerMethod].call(currentListener.object, data);
            }
        }

    },

    listenEvent : function(event_identifier, object, method) {
        if(typeof this.eventList[event_identifier] == "undefined")
            this.registerEvent(event_identifier);

        this.eventList[event_identifier][this.eventList[event_identifier].length] = {
            'object' : object,
            'method' : method
        };
    }
};

TemplateHelper.Component = {

    activeComponents : {

    },

    templateHelperInstance : {},

    Init : function(templateHelperInstance) {
        this.templateHelperInstance = templateHelperInstance;

        var objectInstance = this;

        jQuery.each(this.templateHelperInstance.Components, function(name, component){

            jQuery(component.containerIdentifier).each(function(){

                objectInstance.Factory(jQuery(this), name);

            });

        });
    },

    Factory : function(componentContainerObject, componentName) {
        if(typeof this.activeComponents[componentName] == "undefined")
            this.activeComponents[componentName] = [];

        var objectInstance    = this,
            componentInstance = {}; // Hard Factory Reset

        componentInstance = jQuery.extend(1, {}, this.templateHelperInstance.Components[componentName]);

        if(typeof componentInstance.dependencies !== "undefined") {
          var pendingDependencies = componentInstance.dependencies.length;
          jQuery.each(componentInstance.dependencies, function(key, dependency){
            var currentDependency = objectInstance.templateHelperInstance.ThirdParty.libraries[dependency];

            if(currentDependency.loaded == 0) {
              if(typeof currentDependency.type === "undefined") {
                jQuery.getScript(currentDependency.path).done(function(){
                  objectInstance.templateHelperInstance.ThirdParty.markAsLoaded(dependency);

                  pendingDependencies--;

                  if(pendingDependencies == 0)
                    objectInstance._factoryInitComponent(componentContainerObject, componentName, componentInstance);
                });
              } else {
                if(currentDependency.type === "googleMaps") {
                  jQuery.getScript('http://www.google.com/jsapi', function() {
                    google.load('maps', '3', { other_params: 'sensor=false', callback: function(){
                      objectInstance.templateHelperInstance.ThirdParty.markAsLoaded(dependency);
                      objectInstance._factoryInitComponent(componentContainerObject, componentName, componentInstance);
                    }});
                  });
                }
              }

            } else {
              pendingDependencies--;

              if(pendingDependencies == 0)
                objectInstance._factoryInitComponent(componentContainerObject, componentName, componentInstance);
            }
          });
        } else {
          this._factoryInitComponent(componentContainerObject, componentName, componentInstance);
        }
    },

    _factoryInitComponent : function(componentContainerObject, componentName, componentInstance) {
      componentInstance.Init(componentContainerObject, this.templateHelperInstance);

      this.activeComponents[componentName][this.activeComponents[componentName].length] = componentInstance;
    }

};

TemplateHelper.Components = {

    Slider : {

      templateHelperInstance : {},
      alias                  : "component_slider",
      containerObject        : {},
      containerIdentifier    : ".component-slider",

      Init : function(componentContainerObject, templateHelperInstance) {
          this.containerObject        = componentContainerObject;
          this.templateHelperInstance = templateHelperInstance;
          this.containerObject.data(this.alias, this);

          this._init();
      },

      _init : function() {
        var objectInstance = this;

        this.handleDisplay();

        // If we're using a LESS Development version, we will handle the display again shortly.
        if(jQuery('link[rel="stylesheet/less"]').length > 0)
          setTimeout(function(){ objectInstance.handleDisplay(); }, 100);

        this.templateHelperInstance.EventManager.listenEvent('displayResize', this, 'handleDisplay');
      },

      handleDisplay : function() {
        var height = jQuery(window).height();

        if(this.containerObject.next().hasClass("component-navigation"))
          height -= this.containerObject.next().height();

        this.containerObject.find(".carousel-inner > .item").css("height", height);
      }

    },

    Menu : {

        templateHelperInstance : {},
        alias                  : "component_menu",
        containerObject        : {},
        containerIdentifier    : ".component-navigation",

        Init : function(componentContainerObject, templateHelperInstance) {
            var objectInstance = this;

            this.containerObject        = componentContainerObject;
            this.templateHelperInstance = templateHelperInstance;
            this.containerObject.data(this.alias, this);
            this.containerObject.attr('data-initial-height', this.containerObject.height());

            this.containerObject.find('li a').click(function(event){
              var targetDestinationObject = jQuery(jQuery(this).attr('href'));

              if(targetDestinationObject.length > 0) {
                event.preventDefault();
                var scrollTo = targetDestinationObject.offset().top;

                if(objectInstance.containerObject.height() < scrollTo)
                  scrollTo -= objectInstance.containerObject.height() + 10;

                jQuery('html, body').animate({
                  scrollTop: scrollTo
                }, 1000);
              }
            });

            this.handleDisplay();

            this.templateHelperInstance.EventManager.listenEvent('displayMovement', this, 'handleDisplay');
        },

        handleDisplay : function() {
            var topPosition     = this.containerObject.offset().top,
                containerHeight = this.containerObject.height();

            if(this.containerObject.hasClass('fixed')) {
                topPosition = parseInt(this.containerObject.attr('data-initial-top-position'));

                if(topPosition < 0) {

                    this.containerObject.removeClass('fixed');
                    topPosition = this.containerObject.offset().top;
                    this.containerObject.attr('data-initial-top-position', topPosition);
                    this.containerObject.addClass('fixed');
                }
            }

            if(jQuery(document).scrollTop() > topPosition + containerHeight) {
                if(this.containerObject.hasClass('fixed'))
                    return;

                this.containerObject.attr('data-initial-top-position', topPosition);
                this.containerObject.addClass('fixed');

                if(this.containerObject.prev().hasClass('component-primary-line-separator')) {
                    this.containerObject.prev().addClass('fixed');
                    this.containerObject.addClass('with-top-separator');
                }

                jQuery('body').css('padding-top', (parseFloat(jQuery('body').css('padding-top')) + containerHeight));
            } else {
                if(this.containerObject.prev().hasClass('component-primary-line-separator')) {
                    this.containerObject.prev().removeClass('fixed');
                    this.containerObject.removeClass('with-top-separator');
                }

                this.containerObject.removeClass('fixed');
                jQuery('body').css('padding-top', 0);
            }
        }

    },

    SeparatorMilestone : {

      templateHelperInstance                 : {},
      alias                                  : "component-milestone-counters-1",
      containerObject                        : {},
      containerIdentifier                    : ".milestone",
      containerServedClass                   : "served",
      displayedNumberIdentifier              : "p.number > span",

      Init : function(componentContainerObject, templateHelperInstance) {
        this.containerObject        = componentContainerObject;
        this.templateHelperInstance = templateHelperInstance;
        this.containerObject.data(this.alias, this);

        this.handleDisplay();

        this.templateHelperInstance.EventManager.listenEvent('displayMovement', this, 'handleDisplay');
      },

      handleDisplay : function() {
        if(this.containerObject.hasClass(this.containerServedClass))
          return;

        var currentScrollTop = jQuery(window).scrollTop() + window.innerHeight;

        if(currentScrollTop >= this.containerObject.offset().top
            && currentScrollTop <= ( this.containerObject.offset().top + window.innerHeight)) {
          var objectInstance = this;

          this.containerObject.addClass(this.containerServedClass);

          this.containerObject.find(this.displayedNumberIdentifier).each(function() {
            var currentContainer = jQuery(this),
                from             = parseInt(jQuery(this).text(), 10);

            jQuery({until: 0}).animate({until: from}, {
              duration: 2000,
              step: function() {
                currentContainer.text(Math.ceil(this.until));
              }
            });
          });
        }
      }

    },

    SeparatorProgress : {

    templateHelperInstance                 : {},
    alias                                  : "component_separator_progress",
    containerObject                        : {},
    containerIdentifier                    : ".component-separator-progress",
    dependencies                           : [
      TemplateHelper.ThirdParty.libraries.knob.alias
    ],

    Init : function(componentContainerObject, templateHelperInstance) {
      this.containerObject        = componentContainerObject;
      this.templateHelperInstance = templateHelperInstance;
      this.containerObject.data(this.alias, this);

      this.containerObject.find('.progress-bar-round[data-progress]').each(function(){
        jQuery(this).append('<input type="text" data-skin="tron" value="' + jQuery(this).attr('data-progress') + '"/>');
        jQuery(this).find('input[value="' + jQuery(this).attr('data-progress') + '"]').knob({
          readOnly  : true,
          fgColor   : "#FFFFFF",
          bgColor   : "transparent",
          lineCap   : "rounded",
          thickness : 0.1,
          width     : 100,
          height    : 100
        });
      });
    }

  },

    ProgressBar : {
      templateHelperInstance                 : {},
      alias                                  : "separator-progress",
      containerObject                        : {},
      containerIdentifier                    : ".progress-bar",
      containerServedClass                   : "served",
      from                                   : 0,

      Init : function(componentContainerObject, templateHelperInstance) {
        this.containerObject        = componentContainerObject;
        this.templateHelperInstance = templateHelperInstance;
        this.containerObject.data(this.alias, this);

        this.from = parseInt(this.containerObject.attr("aria-valuenow"), 10);
        this.containerObject.attr("aria-valuenow", 0);
        this.containerObject.css('width', 0);

        this.handleDisplay();

        this.templateHelperInstance.EventManager.listenEvent('displayMovement', this, 'handleDisplay');
      },

      handleDisplay : function() {
        if(this.containerObject.hasClass(this.containerServedClass))
          return;


        var currentScrollTop = jQuery(window).scrollTop() + window.innerHeight;

        if(currentScrollTop >= this.containerObject.offset().top
            && currentScrollTop <= ( this.containerObject.offset().top + window.innerHeight)) {
          this.containerObject.addClass(this.containerServedClass);

          var currentContainer = this.containerObject,
              from             = this.from;

          jQuery({until: 0}).animate({until: from}, {
            duration: 1000,
            step: function() {
              currentContainer.attr("aria-valuenow", Math.ceil(this.until));
              currentContainer.css('width', Math.ceil(this.until) + '%');
            }
          });
        }
      }
    },

    SeparatorQuotation : {
      templateHelperInstance      : {},
      alias                       : "component_separator_quotation",
      containerObject             : {},
      containerIdentifier         : ".component-separator-quotation",
      quotationListObject         : {},
      quotationListIdentifier     : " ul > li",
      quotationDisplayEffect      : "slideInLeft",
      quotationHideEffect         : "slideOutRight",

      Init : function(componentContainerObject, templateHelperInstance) {
        this.containerObject        = componentContainerObject;
        this.templateHelperInstance = templateHelperInstance;
        this.containerObject.data(this.alias, this);

        this.quotationListObject = this.containerObject.find(this.quotationListIdentifier);
        this.quotationListObject.not(":first").hide();
        this.quotationListObject.eq(0).addClass("current");

        var objectInstance = this;

        setInterval(function(){
          objectInstance.displayNextQuotation();
        }, 6000);
      },

      displayNextQuotation : function() {
        var objectInstance     = this,
            totalQuotation  = this.quotationListObject.length,
            currentQuotation = this.quotationListObject.filter(".current").index(),
            nextQuotation    = currentQuotation + 1;

        if(nextQuotation + 1 > totalQuotation)
          nextQuotation = 0;

        this.quotationListObject.eq(currentQuotation)
            .removeClass('current animated ' + this.quotationDisplayEffect)
            .addClass('animated ' + this.quotationHideEffect);

        setTimeout(function(){
          objectInstance.quotationListObject.eq(currentQuotation).hide();

          objectInstance.quotationListObject.eq(nextQuotation)
              .removeClass('animated ' + objectInstance.quotationHideEffect)
              .show()
              .addClass('animated current ' + objectInstance.quotationDisplayEffect);
        }, 500);

      }

    },

    SeparatorNotification : {
      templateHelperInstance      : {},
      alias                       : "component_separator_notification",
      containerObject             : {},
      containerIdentifier         : ".component-separator-notification",
      notificationListObject         : {},
      notificationListIdentifier     : " ul > li",
      notificationDisplayEffect      : "slideInLeft",
      notificationHideEffect         : "slideOutRight",

      Init : function(componentContainerObject, templateHelperInstance) {
          this.containerObject        = componentContainerObject;
          this.templateHelperInstance = templateHelperInstance;
          this.containerObject.data(this.alias, this);

          this.notificationListObject = this.containerObject.find(this.notificationListIdentifier);
          this.notificationListObject.not(":first").hide();
          this.notificationListObject.eq(0).addClass("current");

          var objectInstance = this;

          setInterval(function(){
              objectInstance.displayNextNotification();
          }, 6000);
      },

      displayNextNotification : function() {
          var objectInstance     = this,
              totalNotification  = this.notificationListObject.length,
              currentNotification = this.notificationListObject.filter(".current").index(),
              nextNotification    = currentNotification + 1;

          if(nextNotification + 1 > totalNotification)
              nextNotification = 0;

          this.notificationListObject.eq(currentNotification)
              .removeClass('current animated ' + this.notificationDisplayEffect)
              .addClass('animated ' + this.notificationHideEffect);

          setTimeout(function(){
              objectInstance.notificationListObject.eq(currentNotification).hide();

              objectInstance.notificationListObject.eq(nextNotification)
                  .removeClass('animated ' + objectInstance.notificationHideEffect)
                  .show()
                  .addClass('animated current ' + objectInstance.notificationDisplayEffect);
          }, 500);

      }

    },

    FeaturedWorks : {

      templateHelperInstance         : {},
      alias                          : "component_featured_works",
      containerObject                : {},
      containerIdentifier            : ".component-featured-works",
      carouselTargetIdentifier       : "[data-featured-works-carousel]",
      carouselItemsAttribute         : "data-featured-works-carousel",
      dependencies                   : [
        TemplateHelper.ThirdParty.libraries.owlCarousel.alias
      ],

      Init : function(componentContainerObject, templateHelperInstance) {
        this.containerObject        = componentContainerObject;
        this.templateHelperInstance = templateHelperInstance;
        this.containerObject.data(this.alias, this);

        var objectInstance = this;

        this.containerObject.find(this.carouselTargetIdentifier).each(function(){
          jQuery(this).owlCarousel({
            items             : parseInt(jQuery(this).attr(objectInstance.carouselItemsAttribute)),
            itemsDesktop      : [1199,3],
            itemsDesktopSmall : [979,3]
          });
        });
      }

    },

    EasyFilter : {

      templateHelperInstance                   : {},
      alias                                    : "component_easy_filter",
      containerObject                          : {},
      containerIdentifier                      : "[data-component-easy-filter]",
      containerFilterIdentifierAttribute       : "data-component-easy-filter",
      containerFilterTargetIdentifierAttribute : "data-component-easy-filtered",

      showEffect              : ['slideInRight', 'slideInLeft'],
      hideEffect              : ['slideOutRight', 'slideOutLeft'],
      showEffectStringList    : 'slideInRight slideInLeft',
      hideEffectStringList    : 'slideOutRight slideOutLeft',

      filterAttribute   : "data-filter",
      filterIdentifier  : "[data-filter]",
      filteredAttribute : "data-filtered",
      filteredIdentifier: "[data-filtered]",
      filterObject      : {},
      filteredObject    : {},

      Init : function(componentContainerObject, templateHelperInstance) {
        this.containerObject        = componentContainerObject;
        this.templateHelperInstance = templateHelperInstance;
        this.containerObject.data(this.alias, this);

        this._setupFilterAndFiltered();
        this._setFilter();
      },

      _setupFilterAndFiltered : function() {
        this.filterAttribute = typeof this.containerObject.attr(this.containerFilterIdentifierAttribute) !== "undefined" ?
            this.containerObject.attr(this.containerFilterIdentifierAttribute) : this.filterAttribute;
        this.filteredAttribute = typeof this.containerObject.attr(this.containerFilterTargetIdentifierAttribute) !== "undefined" ?
            this.containerObject.attr(this.containerFilterTargetIdentifierAttribute) : this.filteredAttribute;

        this.filterIdentifier   = "[" + this.filterAttribute + "]";
        this.filteredIdentifier = "[" + this.filteredAttribute + "]";

        this.filterObject   = this.containerObject.find(this.filterIdentifier);
        this.filteredObject = this.containerObject.find(this.filteredIdentifier);
      },

      _setFilter : function() {
        var objectInstance = this;

        this.filterObject.bind("click." + this.alias + " touchstart." + this.alias, function(event){
          event.preventDefault();

          if(jQuery(this).attr(objectInstance.filterAttribute) == "*")
            objectInstance.showListObject(objectInstance.filteredObject);
          else {
            var currentDisplayIdentifier = '[' + objectInstance.filteredAttribute + '="' + jQuery(this).attr(objectInstance.filterAttribute) + '"]',
                hiddenListObject         = objectInstance.filteredObject.not(currentDisplayIdentifier);

            objectInstance.hideListObject(hiddenListObject);

            setTimeout(function(){
              hiddenListObject.hide();
              objectInstance.showListObject(objectInstance.filteredObject.filter(currentDisplayIdentifier));
            }, 200);
          }
        });
      },

      ClearAnimations   : function(listObject) {
        listObject.removeClass('animated ' + this.showEffectStringList + ' ' + this.hideEffectStringList);
      },

      hideListObject : function(listObject) {
        var objectInstance = this;

        this.ClearAnimations(listObject);

        listObject.each(function(){
          var effect = (objectInstance.hideEffect instanceof Array ?
              objectInstance.hideEffect
                  [
                  Math.floor(
                      Math.random() * objectInstance.hideEffect.length
                  )
                  ]
              : objectInstance.hideEffect);

          jQuery(this).show();
          jQuery(this).addClass('animated ' + effect);
        });
      },

      showListObject : function(listObject) {
        var objectInstance = this;

        this.ClearAnimations(listObject);

        listObject.each(function(){
          var effect = (objectInstance.showEffect instanceof Array ?
              objectInstance.showEffect
                  [
                  Math.floor(
                      Math.random() * objectInstance.showEffect.length
                  )
                  ]
              : objectInstance.showEffect);

          jQuery(this).show();
          jQuery(this).addClass('animated ' + effect);
        });
      }
    },

    ContactEmailAndMap : {

      templateHelperInstance          : {},
      alias                           : "component_contact_email_and_map",
      containerObject                 : {},
      containerIdentifier             : ".component-contact-email-and-map",
      mapContainerIdentifierAttribute : "data-component-map-target",
      mapContainerIdentifier          : "",
      mapContainerObject              : {},
      dependencies                    : [
        TemplateHelper.ThirdParty.libraries.googleMapExternal.alias
      ],
      mapConfiguration                : {
        zoom: 15,
        markers: [{
          latitude: 0,
          longitude: 0,
          html: "",
          popup: false,
          flat: true,
          icon: {
            iconsize: [32, 37],
            iconanchor: [15, 30],
            shadowsize: [32, 37],
            shadowanchor: null}
        }
        ],
        panControl: false,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: true,
        scrollwheel: false,
        styles: [ { "stylers": [ { "gamma": 1.58 } ] } ],
        onComplete: function() {
          if(typeof objectInstance !== "undefined")
            objectInstance._onCompleteHandler();
        }
      },
      mapConfigurationLatitudeAttribute  : "data-component-map-configuration-latitude",
      mapConfigurationLongitudeAttribute : "data-component-map-configuration-longitude",

      Init : function(componentContainerObject, templateHelperInstance) {
        this.containerObject        = componentContainerObject;
        this.templateHelperInstance = templateHelperInstance;
        this.containerObject.data(this.alias, this);

        this.mapContainerIdentifier = this.containerObject.attr(this.mapContainerIdentifierAttribute);
        this.mapContainerObject     = this.containerObject.find(this.mapContainerIdentifier);

        this.mapConfiguration.markers[0].latitude  = parseFloat(this.containerObject.attr(this.mapConfigurationLatitudeAttribute));
        this.mapConfiguration.markers[0].longitude = parseFloat(this.containerObject.attr(this.mapConfigurationLongitudeAttribute));

        this.templateHelperInstance.ThirdParty.loadLibrary(
            TemplateHelper.ThirdParty.libraries.googleMap.alias,
            this,
            "_onjQueryMapSupportInclude"
        );
      },

      _onjQueryMapSupportInclude : function() {
        this._setMapType();
        this._setMap();
      },

      _setMapType : function() {
        this.mapConfiguration.maptype = google.maps.MapTypeId.ROADMAP;
      },

      _setMap : function() {
        var objectInstance = this;

        this.mapContainerObject.gMap(this.mapConfiguration);
      },

      _onCompleteHandler : function() {
        var objectInstance = this,
            gmap = this.mapContainerObject.data('gmap').gmap;
        window.onresize = function(){
          google.maps.event.trigger(gmap, 'resize');
          objectInstance.gMap('fixAfterResize');
        };
      }

    },

    DropDownSelect : {
      templateHelperInstance      : {},
      alias                       : "component_drop_down_select",
      containerObject             : {},
      containerIdentifier         : ".component-drop-down-select",
      labelText                   : "Label",
      labelIdentifier             : function(containerObject) {
        return (typeof containerObject.attr("id") == "undefined") ? null : jQuery('label[for="' + containerObject.attr("id") + '"]');
      },
      labelObject                 : {},
      placeholderAttribute        : "data-component-placeholder",
      placeholderText             : "Select ...",
      selectOptions               : {},
      dropDownContainerObject     : {},

      Init : function(componentContainerObject, templateHelperInstance) {
        this.containerObject        = componentContainerObject;
        this.templateHelperInstance = templateHelperInstance;
        this.containerObject.data(this.alias, this);

        this._settings();
        this._displayDropDown();
        this._setInteraction();
      },

      _settings : function() {
        var objectInstance = this;
            objectInstance.selectOptions = {};

        if(typeof this.containerObject.attr(this.placeholderAttribute) !== "undefined")
          this.placeholderText = this.containerObject.attr(this.placeholderAttribute);

        this.labelObject = this.labelIdentifier(this.containerObject);

        if(this.labelObject.length > 0 && this.labelObject !== null)
          this.labelText = this.labelObject.html();

        this.containerObject.find('> option').each(function(){
          objectInstance.selectOptions[jQuery(this).val()] = jQuery(this).text();
        });
      },

      _displayDropDown : function() {
        this.containerObject.after(this._getDropDownHTML());
        this.containerObject.hide();
        this.labelObject.hide();
        this.dropDownContainerObject = this.containerObject.next();
      },

      _setInteraction : function() {
        var objectInstance = this;
        this.dropDownContainerObject.find("ul > li > a").bind("click touchstart", function(event){
          event.preventDefault();

          var selectedOption      = jQuery(this).attr("href").slice(1),
              selectedOptionLabel = jQuery(this).text();

          objectInstance.dropDownContainerObject.find("span.label-text").html(selectedOptionLabel);
          objectInstance.containerObject.val(selectedOption);
        });
      },

      _getDropDownHTML : function() {
        var objectInstance = this,
            html = '<div class="dropdown">' +
                      '<span>' + this.labelText + '</span>' +
                      '<a data-toggle="dropdown" href="#">' +
                        '<span class="label-text">' + this.placeholderText + '</span>' +
                        '<span class="fa fa-angle-down"></span>' +
                      '</a>' +
                      '<ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">';

            jQuery.each(this.selectOptions, function(key, value){
              html += '<li><a href="#' + key + '">' + value + '</a></li>';
            });

            html +=   '</ul>' +
                    '</div>';

        return html;
      }
    },

    Chosen : {
      templateHelperInstance      : {},
      alias                       : "component_chosen_select",
      containerObject             : {},
      containerIdentifier         : ".chosen-select",
      dependencies                : [
        TemplateHelper.ThirdParty.libraries.chosen.alias
      ],

      Init : function(componentContainerObject, templateHelperInstance) {
        this.containerObject        = componentContainerObject;
        this.templateHelperInstance = templateHelperInstance;
        this.containerObject.data(this.alias, this);

        this.containerObject.chosen({});
      }
    }

};

jQuery(document).ready(function(){
  TemplateHelper.Init();
});