<?php

function partial($file, $variables = array()){
  if(!is_array($variables))
    throw new Exception("View included variables must be an array");

  extract($variables);
  ob_start();

  require($file);

  $return_html = ob_get_contents();
  ob_end_clean();
  return $return_html;
}


class ProductList {

  public static $productList = array(
      array(
          'productName'    => "Easy Development Edition 1",
          'discount'       => "50",
          'productGender'  => "female",
          'productRating'  => 0,
          'productImage'   => "assets/image/shop-image-1.png"
      ),
      array(
          'productName'    => "Easy Development Edition 2",
          'productGender'  => "male",
          'productRating'  => 5,
          'productImage'   => "assets/image/shop-image-2.png"
      ),
      array(
          'productName'    => "Easy Development Edition 3",
          'productGender'  => "female",
          'productRating'  => 2,
          'productImage'   => "assets/image/shop-image-3.png"
      ),
      array(
          'productName'    => "Easy Development Edition 4",
          'productGender'  => "female",
          'productRating'  => 4,
          'productImage'   => "assets/image/shop-image-4.png"
      ),
      array(
          'productName'    => "Easy Development Edition 5",
          'productGender'  => "male",
          'productRating'  => 3,
          'productImage'   => "assets/image/shop-image-5.png"
      ),
      array(
          'productName'    => "Easy Development Edition 6",
          'productGender'  => "male",
          'discount'       => "35",
          'productRating'  => 0,
          'productImage'   => "assets/image/shop-image-6.png"
      ),
      array(
          'productName'    => "Easy Development Edition 7",
          'productGender'  => "male",
          'productRating'  => 5,
          'productImage'   => "assets/image/shop-image-7.png"
      ),
      array(
          'productName'    => "Easy Development Edition 8",
          'productGender'  => "male",
          'productRating'  => 4,
          'productImage'   => "assets/image/shop-image-8.png"
      ),
      array(
          'productName'    => "Easy Development Edition 9",
          'productGender'  => "female",
          'productRating'  => 3,
          'productImage'   => "assets/image/shop-image-9.png"
      ),
      array(
          'productName'    => "Easy Development Edition 10",
          'productGender'  => "male",
          'productRating'  => 4,
          'productImage'   => "assets/image/shop-image-10.png"
      ),
      array(
          'productName'    => "Easy Development Edition 11",
          'productGender'  => "male",
          'discount'       => "20",
          'productRating'  => 1,
          'productImage'   => "assets/image/shop-image-11.png"
      ),
      array(
          'productName'    => "Easy Development Edition 12",
          'productGender'  => "female",
          'productRating'  => 4,
          'productImage'   => "assets/image/shop-image-12.png"
      )
  );

}