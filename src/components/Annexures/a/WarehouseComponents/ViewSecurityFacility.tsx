import { Button } from "@/components/ui/button";
import React from "react";

export default function ViewSecurityFacility() {
  return (
    <>
      <div className="flex flex-col pr-10 w-">
        <div className="flex flex-col border border-gray-300 w-[1000px]">
          <div className="flex flex-row border-b border-gray-300 ">
            <h1 className="flex-1 p-4">Securities Facilities Present</h1>
            <h1 className="flex-1 p-4">Input Provided</h1>
          </div>
          <div className="flex flex-row border-b border-gray-300">
            <h2 className="flex-1 p-4">Burglar Alarm System :</h2>
            <div className="flex-1 p-4">Yes</div>
          </div>
          <h2 className="ml-2 mt-2">CCTV Facility</h2>
          <div className="flex flex-row border-b border-gray-300">
            <h2 className="flex-1 p-4">
              {" "}
              Is there a CCTV monitoring system installed to cover the
              surrounding area of the site and storage area?
            </h2>
            <div className="flex-1 p-4">Yes</div>
          </div>
          <div className="flex flex-row border-b border-gray-300">
            <h2 className="flex-1 p-4">No of Cameras installed:</h2>
            <div className="flex-1 p-4">25</div>
          </div>
          <div className="flex flex-row border-b border-gray-300">
            <h2 className="flex-1 p-4">No. of hours/days of recording accessible at any point of time :</h2>
            <div className="flex-1 p-4">
              No
            </div>
          </div>
          <div className="flex flex-row border-b border-gray-300">
            <h2 className="flex-1 p-4">Fire Security:</h2>
            <div className="flex-1 p-4">
              Yes
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
