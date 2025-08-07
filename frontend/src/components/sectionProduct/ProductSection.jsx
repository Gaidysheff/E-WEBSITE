import ProductCard from "./ProductCard";

const ProductSection = ({ title }) => {
  return (
    <section className="mx-auto my-30">
      <h2 className="my-9 text-center text-xl font-bold text-primaryDark">
        {title}
      </h2>

      {/* Content */}
      <div className="flex-center flex-wrap gap-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default ProductSection;
