<!DOCTYPE html>
<html>
  <head>
    <title>Jana - Blog Page</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="stylesheet/less" type="text/css" href="assets/style-development/style.less" />
    <script src="assets/scripts/less-1.7.0.min.js" type="text/javascript"></script>
  </head>
  <body data-spy="scroll" data-target="#scrollSpyMenu" class="blog/color">

    <?php require("parts/_body-loading-animation.php");?>

    <?php require("parts/navigation/default.php");?>

    <?php require("parts/blog/title.php");?>

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

    <?php require("parts/footer.php");?>

    <?php require("parts/footer-bar.php");?>

    <?php require_once("_footer-scripts.php"); ?>
  </body>
</html>