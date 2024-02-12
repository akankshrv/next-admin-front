import { Button } from "@/components/ui/button";
import React from "react";

function ApprovedWarehouse() {
  return (
    <>
      <div className="flex flex-col pr-10 w-">
        <div className="flex flex-col border border-gray-300 w-[1000px]">
          <div className="flex flex-row border-b border-gray-300 ">
            <h1 className="flex-1 p-4">Goods Details</h1>
            <h1 className="flex-1 p-4">Input provided</h1>
          </div>
          <div className="flex flex-row border-b border-gray-300">
            <h2 className="flex-1 p-4">No. of Goods Present:</h2>
            <div className="flex-1 p-4">1000</div>
          </div>
          <div className="flex flex-row border-b border-gray-300">
            <h2 className="flex-1 p-4">
              Goods details present in the warehouse:
            </h2>
            <div className="flex-1 p-4">Furnitures like chairs , sofas</div>
          </div>
          <div className="flex flex-row border-b border-gray-300">
            <h2 className="flex-1 p-4">Classification as per Customs Tariff</h2>
            <div className="flex-1 p-4">Please provide more info on this</div>
          </div>
          <div className="flex flex-row border-b border-gray-300">
            <h2 className="flex-1 p-4">Additional Files provided </h2>
            <div className="flex-1 p-4">
              <Button>View</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApprovedWarehouse;
