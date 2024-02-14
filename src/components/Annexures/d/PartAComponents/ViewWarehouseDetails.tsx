import { DatePicker } from "@/components/ui/datepicker";
import { Label } from "@/components/ui/label";
import React from "react";

export default function ViewWarehouseDetails() {
  return (
    <>
      <div className="flex flex-col pr-10">
        <div className="flex flex-col border border-gray-300 w-[800px] space-y-2 p-1 gap-1 border-none ">
          <div className="flex flex-row items-center  ">
            <Label className="label-primary">Warehouse code : </Label>
            <div className="flex-1">303</div>
          </div>
          <div className="flex flex-row items-center  ">
            <Label className="label-primary">Warehouse Address: </Label>
            <div className="flex-1">Bangalore</div>
          </div>
          <div className="flex flex-row items-center  ">
            <Label className="label-primary">Bond No. </Label>
            <div className="flex-1">12</div>
          </div>
          <div className="flex flex-row items-center">
            <Label className="label-primary">Date of Bond issued : </Label>
            <div className="flex-1">February 14th, 2024</div>
          </div>
        </div>
      </div>
    </>
  );
}
