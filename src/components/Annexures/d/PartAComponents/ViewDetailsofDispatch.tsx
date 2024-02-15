import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function ViewDetailsofDispatch() {
  return (
    <>
      {" "}
      <div className="flex flex-col pr-10">
        <div className="flex flex-col border border-gray-300 w-[800px] space-y-2 p-1 gap-1 border-none ">
          <div className="flex flex-row items-center">
            <Label className="label-primary">
              Date of Removal of Goods at Dispatch:
            </Label>
            <div className="flex-1">February 15th, 2024</div>
          </div>
          <div className="flex flex-row items-center">
            <Label className="label-primary">Time of Removal</Label>
            <div className="flex-1">
              <div className="w-[100px]">7:00 AM</div>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <Label className="label-primary">Registration No. :</Label>
            <div className="flex-1">
              <div className="w-[200px]">223457</div>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <Label className="label-primary">Means of Transport :</Label>
            <div className="flex-1">Land</div>
          </div>
          <div className="flex flex-row items-center">
            <Label className="label-primary">
              Further Details on the Transport vehicle:
            </Label>
            <div className="flex-1">
              The goods are initially been loaded to a container that are being
              carried by trucks and allowed for them to be exported via Ship
            </div>
          </div>
          <div className="flex flex-row items-center">
            <Label className="label-primary">
              Constainer No.(If applicable){" "}
            </Label>
            <div className="flex-1">2901</div>
          </div>
          <div className="flex flex-row items-center">
            <Label className="label-primary">One-Time-Lock Serial No.</Label>
            <div className="flex-1">OTL-2024-XYZ-001.</div>
          </div>
        </div>
      </div>
    </>
  );
}
