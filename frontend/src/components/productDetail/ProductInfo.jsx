import Button from "../uiComponents/Button";
import Image from "@/assets/images/product/Product-1.png";

const ProductInfo = () => {
  return (
    <div
      className="py-10 md:pt-20 flex items-start flex-wrap md:grid 
    md:grid-cols-8 gap-6"
    >
      {/* Product Image */}
      <div
        className="bg-card md:col-span-3 relative overflow-hidden rounded-lg 
      max-md:mt-10 p-3 xsm:p-10 md:p-3 shadow-sm border border-gray-200"
      >
        <img
          src={Image}
          alt="product image"
          className="w-full sm:w-[75%] md:w-full object-cover rounded-lg mx-auto"
        />
      </div>

      {/* Product Info */}
      <div className="md:col-span-5 w-full max-md:mt-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl sm:text-3xl font-bold text-primaryDark">
            AppleSmart Watch
          </h1>
          <h3 className="text-xl sm:text-2xl font-semibold text-primaryDark">
            $200
          </h3>
        </div>

        {/* Product Details */}
        <div>
          <h3 className="text-lg sm:text-xl text-primaryDark my-3">Details</h3>
          <p
            className="text-primaryDark text-justify md:leading-6 text-base
            max-sm:text-sm mb-10"
          >
            {/* {product.description} */}
            Just as a book is judged by its cover, the first thing you notice
            when you pick up a modern smartphone is the display. Advanced
            technologies allow for edge-to-edge screens with minimal cutouts,
            and Apple consistently excels in this area. The 6.7-inch Retina
            panels with ProMotion from last year received widespread praise for
            their exceptional quality.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex py-3 items-center gap-4 flex-wrap">
          <Button className="product-btn">Add to Cart</Button>
          <Button className="wish-btn">Add to Wishlist</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
