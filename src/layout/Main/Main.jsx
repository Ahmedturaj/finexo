import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Shared/Navbar/Navbar";
import Footer from "../../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <main>
      <nav>
        <Navbar />
      </nav>
      <section>
        <Outlet />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default Main;
