// eslint-disable-next-line no-unused-vars
import React, { useContext, useRef } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../Context/AppContext";

export default function Hero() {

    const {setSearchFilter, setIsSearched} = useContext(AppContext)

    const titleRef = useRef(null)
    const locationRef = useRef(null)

  return (
    <div className="container 2xl:px-20 mx-auto my-10">
      <div className="bg-gradient-to-r from-purple-800 to-purple-950 text-white py-16 text-center mx-2 rounded-xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
          Over 10,000+ jobs to apply
        </h2>
        <p className="mb-8 max-w-xl mx-auto text-sm font-light px-5">
          Your Next Big Career Move Starts Right Here - Explore the Best Job
          Opportunities and Take the First Step Toward Your Future!
        </p>
        <div className="flex item-center justify-between bg-white rounded text-gray-600 max-w-xl pl-4 mx-4 sm:mx-auto">
          <div className="flex items-center">
            <img
              className="h-4 sm:h-5"
              src={assets.search_icon}
              alt="search_icon"
              ref={titleRef}
            />
            <input
              type="text"
              placeholder="Search for jobs"
              className="max-sm:text-xs p-2 rouned outline-none w-full"
              ref={locationRef}
            />
          </div>
          <div className="flex items-center">
            <img
              className="h-4 sm:h-5"
              src={assets.location_icon}
              alt="location_icon"
            />
            <input
              type="text"
              placeholder="location"
              className="max-sm:text-xs p-2 rouned outline-none w-full"
            />
          </div>
          <button className="bg-blue-600 px-6 py-2 rounded text-white m-1">
            Search
          </button>
        </div>
      </div>
      <div
        className="border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="flex justify-center gap-10 lg:gap-16 flex-wrap">
          <p className="font-medium">Trusted by</p>
          <img
            className="h-6"
            src={assets.microsoft_logo}
            alt="microsoft_logo"
          />
          <img className="h-6" src={assets.walmart_logo} alt="walmart_logo" />
          <img
            className="h-6"
            src={assets.accenture_logo}
            alt="accenture_logo"
          />
          <img className="h-6" src={assets.samsung_logo} alt="samsung_logo" />
          <img className="h-6" src={assets.amazon_logo} alt="amazon_logo" />
          <img className="h-6" src={assets.adobe_logo} alt="adobe_logo" />
        </div>
      </div>
    </div>
  );
}
