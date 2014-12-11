<!DOCTYPE html>
<html>
  <head>
    <title>Jana - Widget List</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="stylesheet/less" type="text/css" href="assets/style-development/style.less" />
    <script src="assets/scripts/less-1.7.0.min.js" type="text/javascript"></script>
  </head>
  <body data-spy="scroll" data-target="#scrollSpyMenu">

    <?php require("parts/_body-loading-animation.php");?>

    <?php require("parts/navigation/default.php");?>


    <div class="container padding-in-box">
      <div class="title text-center">
        <h2>Widget Example 1</h2>
      </div>
      <?php require("parts/_elegant-line-separator.php");?>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-3">
          <?php require("parts/widget/text.php");?>
        </div>
        <div class="col-xs-12 col-sm-4 col-md-3">
          <?php require("parts/widget/recent_posts.php");?>
        </div>
        <div class="col-xs-12 col-sm-4 col-md-3">
          <?php require("parts/widget/text-contact.php");?>
        </div>
        <div class="col-xs-12 col-sm-4 col-md-3">
          <?php require("parts/widget/flicker.php");?>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>


    <div class="container padding-in-box">
      <div class="title text-center">
        <h2>Widget Example 2</h2>
      </div>
      <?php require("parts/_elegant-line-separator.php");?>
      <div class="row">
        <div class="col-md-3 col-sm-6">
          <?php require("parts/widget/recent-comments.php");?>
        </div>
        <div class="col-md-3 col-sm-6">
          <?php require("parts/widget/recent-posts.php");?>
        </div>
        <div class="col-md-2 col-sm-4">
          <?php require("parts/widget/link-contact.php");?>
        </div>
        <div class="col-md-2 col-sm-4">
          <?php require("parts/widget/quick-links.php");?>
        </div>
        <div class="col-md-2 col-sm-4">
          <?php require("parts/widget/account.php");?>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>


    <div class="container padding-in-box">
      <div class="title text-center">
        <h2>Widget Example 3</h2>
      </div>
      <?php require("parts/_elegant-line-separator.php");?>
      <div class="row">
        <div class="col-md-4 col-sm-6">
          <?php require("parts/widget/recent-posts.php");?>
        </div>
        <div class="col-md-4 col-sm-6">
          <?php require("parts/widget/recent-link.php");?>
        </div>
        <div class="col-md-4 col-sm-12">
          <?php require("parts/widget/costume-text.php");?>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>


    <div class="container padding-in-box">
      <div class="title text-center">
        <h2>Widget Example 4</h2>
      </div>
      <?php require("parts/_elegant-line-separator.php");?>
      <div class="row">
        <div class="col-md-3  col-sm-6">
          <?php require("parts/widget/flicker-image.php");?>
        </div>
        <div class="col-md-3  col-sm-6">
          <?php require("parts/widget/recent-works-image.php");?>
        </div>
        <div class="col-md-3 col-sm-6">
          <?php require("parts/widget/recent-posts.php");?>
        </div>
        <div class="col-md-3 col-sm-6">
          <?php require("parts/widget/recent-link.php");?>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>


    <div class="container padding-in-box">
      <div class="title text-center">
        <h2>Widget Example 5</h2>
      </div>
      <?php require("parts/_elegant-line-separator.php");?>
      <div class="row">
        <div class="col-md-6">
          <?php require("parts/widget/video.php");?>
        </div>
        <div class="col-md-6">
          <?php require("parts/widget/reasons-buy.php");?>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>


    <div class="container padding-in-box">
      <div class="title text-center">
        <h2>Widget Example 6</h2>
      </div>
      <?php require("parts/_elegant-line-separator.php");?>
      <div class="row">
        <div class="col-md-3">
          <?php require("parts/widget/facebook-social.php");?>
        </div>
        <div class="col-md-3">
          <?php require("parts/widget/twitter-social.php");?>
        </div>
        <div class="col-md-6">
          <?php require("parts/widget/frequently-asked-questions.php");?>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>


    <div class="container padding-in-box">
      <div class="title text-center">
        <h2>Widget Example 7</h2>
      </div>
      <?php require("parts/_elegant-line-separator.php");?>
      <div class="row">
        <div class="col-md-6">
          <?php require("parts/widget/tabs.php");?>
        </div>
        <div class="col-md-6">
          <?php require("parts/widget/collapse.php");?>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>


    <div class="container padding-in-box">
      <div class="title text-center">
        <h2>Widget Example 8</h2>
      </div>
      <?php require("parts/_elegant-line-separator.php");?>
      <div class="row">
        <div class="col-md-4 col-sm-6">
          <?php require("parts/widget/quick-links.php");?>
        </div>
        <div class="col-md-4 col-sm-6">
          <?php require("parts/widget/text-contact-secondary.php");?>
        </div>
        <div class="col-md-4  col-sm-12">
          <?php require("parts/widget/newsletter.php");?>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>


    <div class="container padding-in-box">
      <div class="title text-center">
        <h2>Widget Example 9</h2>
      </div>
      <?php require("parts/_elegant-line-separator.php");?>
      <div class="row">
        <div class="col-md-4">
          <?php require("parts/widget/text-about.php");?>
        </div>
        <div class="col-md-4">
          <?php require("parts/widget/newsletter-reasons-subscribe.php");?>
        </div>
        <div class="col-md-4">
          <?php require("parts/widget/quick-message.php");?>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>


    <div class="container padding-in-box">
      <div class="title text-center">
        <h2>Widget Example 10</h2>
      </div>
      <?php require("parts/_elegant-line-separator.php");?>
      <div class="row">
        <div class="col-md-3">
          <?php require("parts/widget/recent-posts-blog.php");?>
        </div>
        <div class="col-md-3">
          <?php require("parts/widget/categories.php");?>
        </div>
        <div class="col-md-3">
          <?php require("parts/widget/archives.php");?>
        </div>
        <div class="col-md-3">
          <?php require("parts/widget/quick-search.php");?>
        </div>
        <div class="col-md-3">
          <?php require("parts/widget/tags.php");?>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>


    <?php require("parts/footer-bar.php");?>

    <?php require_once("_footer-scripts.php"); ?>

  </body>
</html>