import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import Favourite from "./pages/Favourite";
import SeatLayout from "./pages/SeatLayout";
import MyBookings from "./pages/MyBookings";
import { Toaster } from "react-hot-toast";
import MainLayout from "./pages/admin/MainLayout";
import Dashboard from "./pages/admin/Dashboard";
import AddShows from "./pages/admin/AddShows";
import ListShows from "./pages/admin/ListShows";
import ListBookings from "./pages/admin/ListBookings";
import { useAppContext } from "./context/AppContext";
import { SignIn } from "@clerk/clerk-react";
import Loading from "./components/Loading";

const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith("/admin");
  const { user } = useAppContext();
  return (
    <>
      {!isAdminRoute && <NavBar />}
      <Toaster />
      <Routes>
        {/* Main user routes */}
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/:id/:date" element={<SeatLayout />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/loading/:nextUrl" element={<Loading />} />
        <Route path="/favourite" element={<Favourite />} />

        {
          /* Admin layout with nested routes*/
          <Route
            path="/admin/*"
            element={
              user ? (
                <MainLayout />
              ) : (
                <div className="min-h-screen flex justify-center items-center">
                  <SignIn fallbackRedirectUrl={"/admin"} />
                </div>
              )
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="add-shows" element={<AddShows />} />
            <Route path="list-shows" element={<ListShows />} />
            <Route path="list-bookings" element={<ListBookings />} />
          </Route>
        }
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App;
