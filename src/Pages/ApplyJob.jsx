// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import Loader from "../Components/Loader";
import { assets } from "../assets/assets";
import kConvert from "k-convert";
import moment from "moment";

export default function ApplyJob() {
  const { id } = useParams();
  const [jobData, setJobData] = useState(null);
  const { jobs } = useContext(AppContext);

  const fetchJob = async () => {
    const data = jobs.filter((job) => job._id === id);
    if (data.length !== 0) {
      setJobData(data[0]);
      console.log(data[0]);
    } else {
      console.log("Job not Found");
    }
  };

  useEffect(() => {
    if (jobs.length > 0) {
      fetchJob();
    }
  }, [id, jobs]);

  return jobData ? (
    <>
      {/* We can add navbar component */}
      <div className="min-h-screen flex flex-col py-10 container px-4 2xl:px:20 mx-auto">
        <div className="bg-white text-black rounded w-ful">
          <div className="flex justify-center md:justify-between flex-wrap gap-8 px-14 py-20 mb-6 bg-sky-50 border-sky-400 rounded-xl">
            <div>
              <img src={assets.company_icon} alt="company_icon" />
            </div>
            <h1>{jobData.title}</h1>
            <div>
              <span>
                <img src={assets.suitcase_icon} alt="suitcase_icon" />
                {jobData.companyId.name}
              </span>
              <span>
                <img src={assets.location_icon} alt="location_icon" />
                {jobData.location}
              </span>
              <span>
                <img src={assets.person_icon} alt="senior_icon" />
                {jobData.level}
              </span>
              <span>
                <img src={assets.money_icon} alt="money_icon" />
                CTC : {kConvert.convertTo(jobData.salary)}
              </span>
            </div>

            <div>
              <button>Apply Now</button>
              <p>posted {moment(jobData.date).fromNow()}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div>
      <Loader />
    </div>
  );
}
