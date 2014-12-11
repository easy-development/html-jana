<!--========== START COMPONENT EMAIL AND MAP ==========-->
  <div class="component-contact-email-and-map padding-in-box" id="contact"
       data-component-map-target="#responsive_map"
       data-component-map-configuration-latitude="-37.801578"
       data-component-map-configuration-longitude="145.060508">

    <div class="title">
      <h2>CONTACT US</h2>
    </div>
    <?php require("parts/_elegant-line-separator.php");?>
    <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec tempus nunc, eu vulputate tellus</p>

    <div class="relative">
      <div class="modal-contact active"></div>
      <div id="responsive_map" class="gray-scale"></div>
      <div class="container padding-in-box">
        <div class="row">
          <form role="form" class="col-xs-11 col-sm-9 form-1">
            <div class="form-group col-sm-6 col-xs-12">
              <label for="exampleInputText1">Your Name&#42;:</label>
              <input type="text" class="form-control" id="exampleInputText1">
            </div>
            <div class="form-group col-sm-6 col-xs-12">
              <label for="exampleInputEmail1">Your Email&#42;:</label>
              <input type="email" class="form-control" id="exampleInputEmail1">
            </div>
            <div class="form-group col-sm-6 col-xs-12">
              <label for="exampleInputText2">Your Phone Number</label>
              <input type="text" class="form-control" id="exampleInputText2">
            </div>
            <div class="form-group col-sm-6 col-xs-12">
              <label for="exampleInputText3">Your Website</label>
              <input type="text" class="form-control" id="exampleInputText3">
            </div>
            <div class="form-group col-sm-12 col-xs-12">
              <label for="exampleInputText4">Type Your Message Here</label>
              <textarea rows="4" cols="50" class="form-control" id="exampleInputText4"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">SEND MESSAGE</button>
            <span class="exit-modal fa fa-times"></span>
          </form>
        </div>
      </div>
      <div class="contain-button-see-modal"><span class="button-see-modal btn btn-primary">send a message</span></div>
    </div>
  </div>
<!--========== END COMPONENT EMAIL AND MAP ==========-->