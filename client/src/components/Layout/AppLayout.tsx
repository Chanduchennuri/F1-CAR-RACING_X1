import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../Footer/Footer";
export default function AppLayout() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      <Navbar />

      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}