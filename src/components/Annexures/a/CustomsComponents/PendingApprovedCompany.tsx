import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

function PendingApprovedCompany() {
  return (
    <>
      <div className="flex flex-col pr-10">
        <div className="flex flex-col border border-gray-300 w-[1000px] space-y-2 p-1 gap-3 border-none ">
          <div className="flex flex-row items-center ">
            <Label className="flex-1 ">1. Verification of the applicant </Label>
            <Input className="flex-1" />
          </div>
          <div className="flex flex-row">
            <Label className="flex-1 ">
              2. Date of visit to the premises by the bond officer?
            </Label>
            <Input className="flex-1" />
          </div>
          <div className="flex flex-row">
            <Label className="flex-1">
              3. Findings of the bond officer with respect to security, fire
              protection, IT enabled inventory management system, type of
              construction, area available for examination of goods, if required
              etc.
            </Label>
            <Textarea className="flex-1 pb-20" />
          </div>
          <div className="flex flex-row">
            <Label className="flex-1  ">
              4. Is the Premises recommended for issue of license as a warehouse
              along with permission for manufacture or other operations?
            </Label>
            <Textarea className="flex-1 pb-20" />
          </div>
        </div>
      </div>
    </>
  );
}

export default PendingApprovedCompany;
