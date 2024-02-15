import { TimePicker } from "@/components/ui/Timepicker/time-picker";
import { DatePicker } from "@/components/ui/datepicker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function EditDetailsOfDispatch() {
  return (
    <>
      {" "}
      <div className="flex flex-col pr-10">
        <div className="flex flex-col border border-gray-300 w-[800px] space-y-2 p-1 gap-1 border-none ">
          <div className="flex flex-row items-center">
            <Label className="label-primary">
              Date of Removal of Goods at Dispatch:
            </Label>
            <div className="flex-1">
              <DatePicker />
            </div>
          </div>
          <div className="flex flex-row items-center">
            <Label className="label-primary">Time of Removal</Label>
            <div className="flex-1">
              <div className="w-[100px]">
                <TimePicker />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <Label className="label-primary">Registration No. :</Label>
            <div className="flex-1">
              <div className="w-[200px]">
                <Input type="number" />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <Label className="label-primary">Means of Transport :</Label>
            <div className="flex-1">
              <Input type="text" />
            </div>
          </div>
          <div className="flex flex-row items-center">
            <Label className="label-primary">Further Details on the Transport vehicle:</Label>
            <div className="flex-1">
              <Textarea />
            </div>
          </div>
          <div className="flex flex-row items-center">
            <Label className="label-primary">Constainer No.(If applicaple) </Label>
            <div className="flex-1">
              <Input type="number" />
            </div>
          </div>
          <div className="flex flex-row items-center">
            <Label className="label-primary">One-Time-Lock No.</Label>
            <div className="flex-1">
              <Input type="number" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
