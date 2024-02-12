import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/datepicker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ApprovalSignature from "@/components/ui/signature";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

function PendingApprovedWarehouse() {
  return (
    <>
      <div className="flex flex-col pr-10">
        <div className="flex flex-col border border-gray-300 w-[1000px] space-y-2 p-1 gap-3 border-none ">
          <div className="flex flex-row items-center ">
            <Label className="flex-1 ">
              1. Date of verification visit to certify commencement of
              manufacture or other operations in the Warehouse :{" "}
            </Label>
            <div className="flex-1">
              <DatePicker />
            </div>
          </div>
          <div className="flex flex-row">
            <Label className="flex-1 ">
              2. Name of the officials who visited the premises? :
            </Label>
            <Input className="flex-1" />
          </div>

          <h1>VERIFICATION REPORT :</h1>
          <div>
            1. I have verified that the unit has commenced manufacture or other
            operations.
          </div>
          <div>
            2. I have verified that records are being maintained by the licensee
            as prescribed under Annexure B of Circular 34/2019-Customs dated
            1-10-2019.
          </div>

          <ApprovalSignature />
        </div>
      </div>
    </>
  );
}

export default PendingApprovedWarehouse;
