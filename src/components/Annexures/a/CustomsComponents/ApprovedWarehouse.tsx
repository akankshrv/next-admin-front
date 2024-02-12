import { Button } from "@/components/ui/button";
import React from "react";
import CustomsOfficerSignature from "./IssueofLicense/CustomsOfficerSignature";

function ApprovedWarehouse() {
  return (
    <>
      <div className="flex flex-col pr-10 w-">
        <div className="flex flex-col border border-gray-300 w-[1000px]">
          <div className="flex flex-row border-b border-gray-300 ">
            <h2 className="flex-1 p-4">
              1. Date of verification visit to certify commencement of
              manufacture or other operations in the Warehouse :{" "}
            </h2>
            <div className="flex-1 p-4">February 14th, 2024</div>
          </div>
          <div className="flex flex-row border-b border-gray-300">
            <h2 className="flex-1 p-4">
              2. Name of the officials who visited the premises? :
            </h2>
            <div className="flex-1 p-4">Subram Tandav</div>
          </div>
          <div className="text-xl w-[50%] p-10">
            <div className="flex flex-row ">
              <h3 className="flex-1 font-semibold">Full Name:</h3>
              <p className="flex-1">Mr. Aditya Jakochi</p>
            </div>
            <div className="flex flex-row ">
              <h3 className="flex-1 font-semibold">Designation</h3>
              <p className="flex-1">Customs Senior Officer</p>
            </div>
            <div className="flex flex-row ">
              <h3 className="flex-1 font-semibold">Signature:</h3>
              <p className="flex-1">Adijak</p>
            </div>
            <div className="flex flex-row ">
              <h3 className="flex-1 font-semibold">Date of Issue:</h3>
              <p className="flex-1">February 12th 2024</p>
            </div>
          </div>
        </div>
        <h2 className="text-right p-4 text-green-500">Approved</h2>
      </div>
    </>
  );
}

export default ApprovedWarehouse;
