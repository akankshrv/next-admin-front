import { DatePicker } from "@/components/ui/datepicker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Props } from "@/index";
import React from "react";

export default function EditWarehouseDetails() {
  return (
    <>
      <div className="flex flex-col pr-10">
        <div className="flex flex-col border border-gray-300 w-[800px] space-y-2 p-1 gap-1 border-none ">
          <div className="flex flex-row items-center  ">
            <Label className="label-primary">Warehouse code : </Label>
            <div className="flex-1">
              <Input />
            </div>
          </div>
          <div className="flex flex-row items-center  ">
            <Label className="label-primary">Warehouse Address: </Label>
            <div className="flex-1">
              <Textarea />
            </div>
          </div>
          <div className="flex flex-row items-center  ">
            <Label className="label-primary">Bond No. </Label>
            <div className="flex-1">
              <Input />
            </div>
          </div>
          <div className="flex flex-row items-center">
            <Label className="label-primary">
              Date of Bond issued :{" "}
            </Label>
            <div className="flex-1">
              <DatePicker />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
