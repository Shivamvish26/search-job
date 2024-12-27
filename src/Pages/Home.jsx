// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import JobListing from "../Components/JobListing";
import AppDownlode from "../Components/AppDownlode";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div>
      <Hero/>
      <JobListing/>
      <AppDownlode/>
    </div>
  );
}
