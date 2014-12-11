<?php require_once("_utilities.php");?><!DOCTYPE html>
<html>
<head>
  <title>Jana - Shop Single</title>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <link rel="stylesheet/less" type="text/css" href="assets/style-development/style.less" />
  <script src="assets/scripts/less-1.7.0.min.js" type="text/javascript"></script>
</head>
<body data-spy="scroll" data-target="#scrollSpyMenu">

<?php require("parts/_body-loading-animation.php");?>

<?php require("parts/navigation/default.php");?>

<!--========== START COMPONENT SHOP SINGLE PRODUCT ==========-->
<div class="component-shop-single-product">
  <div class="container padding-in-box">
    <div class="title">
      <h2>SHOP <span>JANA</span></h2>
    </div>
    <?php require("parts/_elegant-line-separator.php");?>
    <div class="content">
      <div class="row">
        <div class="single-item col-sm-12">
          <div class="left-contain col-md-6 col-xs-12">
            <img src="assets/image/shop-image-1.png" alt="shop-image"/>
            <span class="fa fa-expand"></span>
          </div>
          <div class="right-contain col-md-6 col-xs-12">
            <div class="title-and-price">
              <h3>
                Easy Development Shirt
              </h3>
              <p>
                $169.00
              </p>
            </div>
            <div class="line-separator-product"><span></span></div>
            <div class="options-change">
              <form>
                <label for="select-single-product-size">Size</label>
                <select id="select-single-product-size"
                        class="component-drop-down-select"
                        name="product_size"
                        data-component-placeholder="Select..."
                    >
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="X">X</option>
                  <option value="XL">XL</option>
                </select>
                <label for="select-single-product-color">Color</label>
                <select id="select-single-product-color"
                        class="component-drop-down-select"
                        name="product_size"
                        data-component-placeholder="Select..."
                    >
                  <option value="Red">Red</option>
                  <option value="Blue">Blue</option>
                  <option value="White">White</option>
                  <option value="Black">Black</option>
                </select>
                <div class="group-toolbar">
                  <div class="add-element">
                    <a href="#" class="left">
                      <span class="fa fa-angle-left"></span>
                    </a>
                    <div class="see-number">
                      1
                    </div>
                    <a href="#" class="right">
                      <span class="fa fa-angle-right"></span>
                    </a>
                  </div>
                  <a href="#" class="buy-button">
                    <span class="fa fa-shopping-cart"></span>
                  </a>
                </div>
                <div class="clearfix"></div>
              </form>
            </div>
            <div class="line-separator-product"><span></span></div>
            <div class="description">
              <p class="title">
                Description
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et dolor purus. <br>
                Etiam tincidunt leo vitae diam vulputate commodo.
              </p>
              <ul>
                <li>
                  <div>
                    <span class="fa fa-check-circle"></span>
                  </div>
                  <p>High quality materials</p>
                </li>
                <li>
                  <div>
                    <span class="fa fa-check-circle"></span>
                  </div>
                  <p>Trendy color</p>
                </li>
                <li>
                  <div>
                    <span class="fa fa-check-circle"></span>
                  </div>
                  <p>Convenient</p>
                </li>
                <li>
                  <div>
                    <span class="fa fa-check-circle"></span>
                  </div>
                  <p>Easy to wash</p>
                </li>
                <li>
                  <div>
                    <span class="fa fa-check-circle"></span>
                  </div>
                  <p>Made in USA</p>
                </li>
              </ul>
            </div>
            <div class="line-separator-product"><span></span></div>
            <div class="share-container">
              <p>Share</p>
              <ul>
                <li><a href="#"><span class="fa fa-facebook"></span></a></li>
                <li><a href="#"><span class="fa fa-twitter"></span></a></li>
                <li><a href="#"><span class="fa fa-google-plus"></span></a></li>
                <li><a href="#"><span class="fa fa-envelope"></span></a></li>
              </ul>
              <div class="clearfix"></div>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
        <div class="col-sm-12 line-separator-container">
          <div class="line-separator-full-shop"><span></span></div>
        </div>
        <div class="col-sm-12 similar-item">
          <h3 class="title">
            Similar Items
          </h3>
          <p class="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et dolor purus. Etiam tincidunt leo vitae diam vulputate commodo.
          </p>

          <?php
          $fourProducts = array_slice(ProductList::$productList, 0, 4);
          foreach($fourProducts as $productInformation)
            echo partial("parts/shop/product-list-row-item.php", $productInformation);
          ?>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
  </div>
</div>
<!--========== END COMPONENT SHOP SINGLE PRODUCT ==========-->

<?php require("parts/footer-bar.php");?>

<?php require_once("_footer-scripts.php"); ?>

</body>
</html>