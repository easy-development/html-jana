<div class="col-md-3 col-sm-4 col-xs-12 <?php echo isset($discount) ? "discount " : "";?>">
  <div class="contain-image">
    <img src="<?php echo isset($productImage) ? $productImage : 'assets/image/product-default.gif'?>" alt="shop-image">
    <div class="contain-buy">
      <a href="<?php echo isset($productPurchaseLink) ? $productPurchaseLink : "#";?>">
        <span class="fa fa-shopping-cart"></span>
        Add to cart
      </a>
      <a href="<?php echo isset($productPageLink) ? $productPageLink : "#";?>">
        <span class="fa fa-list"></span>
        Details
      </a>
    </div>
  </div>
  <div class="contain-details">
    <div class="description col-sm-8 col-xs-8">
      <?php echo isset($productName) ? $productName : "Name Not Available";?>
    </div>
    <div class="contain-price col-sm-4 col-xs-4">
      <p class="price">$<?php echo isset($productPrice) ? $productPrice : "169.00"?></p>
      <p class="gender"><?php echo isset($productGender) ? $productGender : "unknown"?></p>
      <p class="rated">
        <?php if(isset($productRating)) : ?>
          <?php if($productRating == 0) : ?>
            Unrated
          <?php else : ?>
            <?php for($i = 1; $i <= 5; $i++)
                    echo ceil($productRating) >= $i ?
                        '<span class="fa fa-star"></span>' :
                        '<span class="fa fa-star-o"></span>';
            ?>
          <?php endif;?>
        <?php else : ?>
          Unrated
        <?php endif;?>
      </p>
      <?php if(isset($discount)) : ?>
        <div class="discount-price">
          <p>-<?php echo $discount;?>&#37;</p>
        </div>
      <?php endif; ?>
    </div>
    <div class="clearfix"></div>
  </div>
</div>