// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Application() {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      <div className="container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10">
        <h2 className="text-xl font-semibold">Your Resume</h2>
        <div className="flex gap-2 mb-6 mt-3">
          {isEdit ? (
            <></>
          ) : (
            <div className="flex gap-2">
              <Link
                href=""
                className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg"
              >
                Resume
              </Link>
              <button
                onClick={() => setIsEdit(true)}
                className="text-gray-500 border border-gray-300 rounded-lg px-4 py-2"
              >
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
