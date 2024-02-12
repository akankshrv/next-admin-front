import React from "react";

function ApprovedCompany() {
  return (
    <>
      <div className="flex flex-col pr-10 w-">
        <div className="flex flex-col border border-gray-300 w-[1000px]">
          <div className="flex flex-row border-b border-gray-300 ">
            <h2 className="flex-1 p-4">1. Verification of the applicant </h2>
            <div className="flex-1 p-4">Yes</div>
          </div>
          <div className="flex flex-row border-b border-gray-300">
            <h2 className="flex-1 p-4">
              2. Date of visit to the premises by the bond officer?
            </h2>
            <div className="flex-1 p-4">21/1/2024</div>
          </div>
          <div className="flex flex-row border-b border-gray-300">
            <h2 className="flex-1 p-4">
              3. Findings of the bond officer with respect to security, fire
              protection, IT enabled inventory management system, type of
              construction, area available for examination of goods, if required
              etc.
            </h2>
            <div className="flex-1 p-4">
              Findings provided by the officer .... ...{" "}
            </div>
          </div>
          <div className="flex flex-row border-b border-gray-300">
            <h2 className="flex-1 p-4">
              4. Is the Premises recommended for issue of license as a warehouse
              along with permission for manufacture or other operations?
            </h2>
            <div className="flex-1 p-4">
              Yes the premises can be recommended for the issue of license.
            </div>
          </div>
        </div>
        <h2 className="text-right p-4 text-green-500">Approved</h2>
      </div>
    </>
  );
}

export default ApprovedCompany;
