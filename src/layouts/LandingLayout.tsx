// layouts/LandingLayout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/navigations/Navbar";
import Footer from "../components/navigations/Footer";

export default function LandingLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
