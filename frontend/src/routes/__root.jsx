import * as React from "react";

import { Outlet, createRootRoute } from "@tanstack/react-router";

import Footer from "@/components/footer/Footer.jsx";
import NavBar from "@/components/navbar/NavBar.jsx";
import { ThemeProvider } from "@/store/ThemeContext.jsx";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <ThemeProvider>
        <div className="font-Comfort">
          <NavBar />

          <div className="container">
            <Outlet />
          </div>

          <Footer />
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
}
