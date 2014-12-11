<!DOCTYPE html>
<html>
  <head>
    <title>Jana - Blog With Right Sidebar Page</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="stylesheet/less" type="text/css" href="assets/style-development/style.less" />
    <script src="assets/scripts/less-1.7.0.min.js" type="text/javascript"></script>
  </head>
  <body data-spy="scroll" data-target="#scrollSpyMenu" class="blog-sidebar">

  <?php require("parts/_body-loading-animation.php");?>

  <?php require("parts/navigation/default.php");?>

  <div class="container padding-in-box">
    <div class="title">
      <h2>BLOG WITH RIGHT SIDEBAR</h2>
    </div>
    <?php require("parts/_elegant-line-separator.php");?>
    <div class="row">
      <div class="col-sm-9">

        <?php require("parts/blog/post-slider.php");?>

        <div class="container">
          <?php require("parts/_elegant-line-separator-full.php");?>
        </div>

        <?php require("parts/blog/post-image.php");?>

        <div class="container">
          <?php require("parts/_elegant-line-separator-full.php");?>
        </div>

        <?php require("parts/blog/post-video-1.php");?>

        <div class="container">
          <?php require("parts/_elegant-line-separator-full.php");?>
        </div>

        <?php require("parts/blog/post-video-2.php");?>

        <div class="container">
          <?php require("parts/_elegant-line-separator-full.php");?>
        </div>

        <?php require("parts/blog/post-text.php");?>

        <div class="container">
          <?php require("parts/_elegant-line-separator-full.php");?>
        </div>

        <?php require("parts/blog/post-quote.php");?>

        <div class="container">
          <?php require("parts/_elegant-line-separator-full.php");?>
        </div>

      </div>
      <div class="col-sm-3">

        <?php require("parts/blog/sidebar.php");?>

      </div>
    </div>
  </div>

  <?php require("parts/footer.php");?>

  <?php require("parts/footer-bar.php");?>

  <?php require_once("_footer-scripts.php"); ?>
  </body>
</html>