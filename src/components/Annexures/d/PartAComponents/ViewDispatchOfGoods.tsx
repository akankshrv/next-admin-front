import { Label } from "@/components/ui/label";
import React from "react";

function ViewDispatchOfGoods() {
  return (
    <>
      {" "}
      <div className="flex flex-col pr-10">
        <div className="flex flex-col border border-gray-300 w-[800px] space-y-2 p-1 gap-1 border-none ">
          <div className="flex flex-row items-center">
            <Label className="label-primary">Description of the Goods:</Label>
            <div className="flex-1">
              The goods are made of iron, plastic and steel, these are used as
              gym equipments, mostly are dumbbells and barbells, each package
              contain 60kgs worth of gym equipments of 50 pieces
            </div>
          </div>
          <div className="flex flex-row items-center">
            <Label className="label-primary">No. of Packages:</Label>
            <div className="flex-1">50</div>
          </div>
          <div className="flex flex-row items-center">
            <Label className="label-primary">
              Marks and Numbers on Packages:
            </Label>
            <div className="flex-1">50</div>
          </div>
          <div className="flex flex-row items-center">
            <Label className="label-primary">Weight:</Label>
            <div className="flex-1">3000 kgs</div>
          </div>
          <div className="flex flex-row items-center">
            <Label className="label-primary">Quantity:</Label>
            <div className="flex-1">300</div>
          </div>
          <div className="flex flex-row items-center">
            <Label className="label-primary">Value of the Goods: </Label>
            <div className="flex-1">Rs. 50,000,000</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewDispatchOfGoods;
