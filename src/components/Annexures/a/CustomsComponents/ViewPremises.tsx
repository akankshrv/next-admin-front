import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function ViewPremises() {
  return (
    <div className="flex flex-col pr-10">
      <div className="flex flex-col border border-gray-300">
        <div className="flex flex-row border-b border-gray-300 ">
          <h1 className="flex-1 p-4">Required Details</h1>
          <h1 className="flex-1 p-4">Input provided</h1>
        </div>
        <div className="flex flex-row border-b border-gray-300">
          <h2 className="flex-1 p-4">The area of the Floor:</h2>
          <div className="flex-1 p-4">340 sq.ft</div>
        </div>
        <div className="flex flex-row border-b border-gray-300">
          <h2 className="flex-1 p-4">Number of stories Present:</h2>
          <div className="flex-1 p-4">2</div>
        </div>
        <div className="flex flex-row border-b border-gray-300">
          <h2 className="flex-1 p-4">
            Total area (or cubic capacity) available for storage:
          </h2>
          <div className="flex-1 p-4">240 sq.ft</div>
        </div>
        <div className="flex flex-row border-b border-gray-300">
          <h2 className="flex-1 p-4">
            {" "}
            Identified and mark area(s), occupied by third parties in the ground
            plan:
          </h2>
          <div className="flex-1 p-4">2</div>
        </div>
        <div className="flex flex-row border-b border-gray-300">
          <h2 className="flex-1 p-4">
            The type of construction of walls and roof?
          </h2>
          <div className="flex-1 p-4">Concrete and Wood</div>
        </div>
        <div className="flex flex-row border-b border-gray-300">
          <h2 className="flex-1 p-4">
            Year of Construction and Remodel Status:
          </h2>
          <div className="flex-1 p-4">2000, remodelled recently in 2023</div>
        </div>
        <div className="flex flex-row border-b border-gray-300">
          <h2 className="flex-1 p-4">
            Identified Location and size of all accesses to the site/building to
            pedestrian and vehicles:
          </h2>
          <div className="flex-1 p-4">
            Four Location identified and all are mid sized and comfortable
            walking space
          </div>
        </div>
        <div className="flex flex-row border-b border-gray-300">
          <h2 className="flex-1 p-4">
            Is the premises currently being used for commercial purposes by
            local Gov. Authorities?:
          </h2>
          <div className="flex-1 p-4">
            Yes the premises are being used for commercial purposes
          </div>
        </div>
      </div>
    </div>
  );
}
