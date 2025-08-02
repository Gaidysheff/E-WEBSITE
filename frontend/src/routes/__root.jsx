import * as React from "react";

import { Outlet, createRootRoute } from "@tanstack/react-router";

import Footer from "./../components/footer/Footer.jsx";
import NavBar from "./../components/navbar/NavBar.jsx";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div className="font-Comfort">
        <NavBar />

        <div className="container">
          <Outlet />
        </div>

        <Footer />
      </div>
    </React.Fragment>
  );
}
