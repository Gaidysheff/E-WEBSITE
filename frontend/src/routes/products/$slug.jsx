import CustomerReviews from "@/components/productDetail/CustomerReviews.jsx";
import ProductInfo from "@/components/productDetail/ProductInfo.jsx";
import ProductSection from "@/components/sectionProduct/ProductSection.jsx";
import ReviewCardContainer from "@/components/productDetail/ReviewCardContainer.jsx";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/products/$slug")({
  component: IndividualProductComponent,
});

function IndividualProductComponent() {
  return (
    <>
      <ProductInfo />
      <CustomerReviews />
      <ReviewCardContainer />
      <ProductSection title="Products from the same category" />
    </>
  );
}
