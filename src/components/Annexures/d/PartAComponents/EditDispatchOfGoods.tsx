import { DatePicker } from "@/components/ui/datepicker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

function EditDispatchOfGoods() {
  return (
    <>
      {" "}
      <div className="flex flex-col pr-10">
        <div className="flex flex-col border border-gray-300 w-[800px] space-y-2 p-1 gap-1 border-none ">
          <div className="flex flex-row items-center">
            <Label className="label-primary">Description of the Goods:</Label>
            <div className="flex-1">
              <Textarea />
            </div>
          </div>
          <div className="flex flex-row items-center">
            <Label className="label-primary">No. of Packages:</Label>
            <div className="flex-1">
              <Input type="number" />
            </div>
          </div>
          <div className="flex flex-row items-center">
            <Label className="label-primary">
              Marks and Numbers on Packages:
            </Label>
            <div className="flex-1">
              <Input />
            </div>
          </div>
          <div className="flex flex-row items-center">
            <Label className="label-primary">Weight:</Label>
            <div className="flex-1">
              <Input type="number" />
            </div>
          </div>
          <div className="flex flex-row items-center">
            <Label className="label-primary">Quantity:</Label>
            <div className="flex-1">
              <Input type="number" />
            </div>
          </div>
          <div className="flex flex-row items-center">
            <Label className="label-primary">Value of the Goods: </Label>
            <div className="flex-1">
              <Input type="number" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditDispatchOfGoods;
