// eslint-disable-next-line no-unused-vars
import React from "react";

export default function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center space-x-4">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-4 border-t-blue-400 rounded-full animate-spin"></div>
      <div className="text-gray-700">Please wait, your data is loading...</div>
    </div>
  );
}
  