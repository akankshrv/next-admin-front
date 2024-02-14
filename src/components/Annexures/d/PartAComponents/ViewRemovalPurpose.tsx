import { TransportationSelect } from "@/components/ui/TransporationSelect";
import { DatePicker } from "@/components/ui/datepicker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import ToggleButton from "@/components/ui/togglebutton";
import React from "react";

export default function ViewRemovalPurpose() {
  return (
    <>
      {" "}
      <div className="flex flex-col pr-10">
        <div className="flex flex-col border border-gray-300 w-[800px] space-y-2 p-1 gap-1 border-none ">
          <div className="flex flex-row items-center">
            <Label className="label-primary">
              Deposit to another wareHouse
            </Label>
            <div className="flex-1">
              <h2>Yes</h2>
            </div>
          </div>
          <h2>
            The Warehouse code and address of transfer{" "}
          </h2>
          <div className="flex flex-row items-center">
            <Label className="label-primary">Warehouse Code:</Label>
            <div className="flex-1">
              <h2>32</h2>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <Label className="label-primary">Address</Label>
            <div className="flex-1">Bangalore</div>
          </div>

          <h2>Transportation Details for Export:</h2>
          <div className="flex flex-row items-center">
            <Label className="label-primary">
              For export by air or sea or land or post (Furnish details of
              customs station).
            </Label>
            <div className="flex-1">
              <h2>Air</h2>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <Label className="label-primary">
              Additional Info on the transportation
            </Label>
            <div className="flex-1">
              The transportation of goods will be done via Air.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
