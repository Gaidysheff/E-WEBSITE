import { createFileRoute, redirect } from "@tanstack/react-router";

import Orders from "@/components/order/Orders.jsx";
import Wishlist from "@/components/wishlist/Wishlist.jsx";

export const Route = createFileRoute("/_authenticated/profile")({
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
