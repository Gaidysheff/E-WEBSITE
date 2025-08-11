import Orders from "@/components/order/Orders.jsx";
import Wishlist from "@/components/wishlist/Wishlist.jsx";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/profile")({
  component: ProfilePage,
});

function ProfilePage() {
  return (
    <>
      <Orders />
      <Wishlist />
    </>
  );
}
