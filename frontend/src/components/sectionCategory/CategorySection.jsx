import CategoryCard from "./CategoryCard.jsx";

const CategorySection = () => {
  return (
    <section className="mx-auto my-20">
      <h2 className="my-9 text-center text-xl font-bold text-primaryDark">
        Browse By Category
      </h2>

      {/* Content */}
      <div className="flex justify-center flex-wrap gap-8">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </section>
  );
};

export default CategorySection;
