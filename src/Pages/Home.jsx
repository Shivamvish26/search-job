// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import JobListing from "../Components/JobListing";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <JobListing/>
    </div>
  );
}
