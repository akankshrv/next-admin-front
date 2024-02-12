import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

function PendingApprovedWarehouse() {
  return (
    <>
      <div className="space-y-1 flex flex-col gap-1">
        <div className="">
          <Label>
            {" "}
            <p>
              Please provide the number of Goods present in the warehouse?
            </p>{" "}
          </Label>
          <Input className="w-96" />
        </div>
        <div>
          <Label>
            {" "}
            <p>
              Please provide Description of the goods stored in the ware house
              in Detail?
            </p>{" "}
          </Label>
          <Input className="" />
        </div>
        <div>
          <Label>
            {" "}
            <p>Classification as per Customs Tariff</p>{" "}
          </Label>
          <Input className="w-96" />
        </div>
        <div>
          <Label>
            {" "}
            <p>
              Identify and mark area(s), occupied by third parties in the ground
              plan :
            </p>{" "}
          </Label>
          <Input type="file" />
        </div>
      </div>
    </>
  );
}

export default PendingApprovedWarehouse;
