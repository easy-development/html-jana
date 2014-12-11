<?php require_once("_utilities.php");?><!DOCTYPE html>
<html>
  <head>
    <title>Jana - Shop</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="stylesheet/less" type="text/css" href="assets/style-development/style.less" />
    <script src="assets/scripts/less-1.7.0.min.js" type="text/javascript"></script>
  </head>
  <body data-spy="scroll" data-target="#scrollSpyMenu">

    <?php require("parts/_body-loading-animation.php");?>

    <?php require("parts/navigation/default.php");?>

    <!--========== START COMPONENT SHOP PRODUCT LIST ==========-->
      <div class="component-shop-product-list">
        <div class="container padding-in-box">
          <div class="title">
            <h2>SHOP <span>JANA</span></h2>
          </div>
          <?php require("parts/_elegant-line-separator.php");?>
          <div class="filter">
            <div class="dropdown dropdown-1">
              <a data-toggle="dropdown" href="#">Sort by Name <span class="fa fa-angle-down"></span></a>
              <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
                <li><a href="#">Sort by Price</a></li>
                <li><a href="#">Sort by Date</a></li>
                <li><a href="#">Sort by Rating</a></li>
                <li><a href="#">Sort by Sells</a></li>
              </ul>
            </div>
            <div class="dropdown dropdown-2">
              <a data-toggle="dropdown" href="#">Show 12 Products <span class="fa fa-angle-down"></span></a>
              <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
                <li><a href="#">Show 24 Products</a></li>
                <li><a href="#">Show 36 Products</a></li>
              </ul>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="content">
            <div class="row">
              <div class="items">
                <?php
                foreach(ProductList::$productList as $productInformation)
                  echo partial("parts/shop/product-list-row-item.php", $productInformation);
                ?>
              </div>
            </div>
          </div>
          <div class="selection-page">
            <ul class="pagination">
              <li class="active"><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li class="next-page"><a href="#">Next <span class="fa fa-angle-right"></span></a></li>
            </ul>
          </div>
        </div>
      </div>
    <!--========== END COMPONENT SHOP ==========-->

    <?php require("parts/footer-bar.php");?>

    <?php require_once("_footer-scripts.php"); ?>
  </body>
</html>