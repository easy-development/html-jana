<!DOCTYPE html>
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

    <!--========== START COMPONENT SHOP CHECKOUT ==========-->
      <div class="component-shop-checkout">
        <div class="container padding-in-box">
          <div class="title">
            <h2>Checkout</h2>
          </div>
          <?php require("parts/_elegant-line-separator.php");?>
          <div class="row content">
            <div class="col-sm-3 col-md-4 col-xs-12 left">
              <ul class="tab-list">
                <li class="active">
                  <a href="#billing-address" role="tab" data-toggle="tab">
                    Billing Address
                    <span class="fa fa-angle-right"></span>
                  </a>
                </li>
                <li>
                  <a href="#shipping-address" role="tab" data-toggle="tab">
                    Shipping Address
                    <span class="fa fa-angle-right"></span>
                  </a>
                </li>
                <li>
                  <a href="#review-payment" role="tab" data-toggle="tab">
                    Review & Payment
                    <span class="fa fa-angle-right"></span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-sm-9 col-md-8 col-xs-12 right">
              <div class="tab-content">
                <div class="tab-pane active" id="billing-address">
                  <?php require("parts/shop/checkout-tab-billing.php");?>
                </div>
                <div class="tab-pane" id="shipping-address">
                  <?php require("parts/shop/checkout-tab-shipping.php");?>
                </div>
                <div class="tab-pane" id="review-payment">
                  <?php require("parts/shop/checkout-tab-review.php");?>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <!--========== END COMPONENT SHOP CHECKOUT ==========-->

    <?php require("parts/footer-bar.php");?>

    <?php require_once("_footer-scripts.php"); ?>
  </body>
</html>