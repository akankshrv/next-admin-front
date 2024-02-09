import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function EditPremises() {
  return (
    <div className="space-y-1 flex flex-col gap-1">
      <div className="">
        <Label>
          {" "}
          <p>What is the Area of the floor?</p>{" "}
        </Label>
        <Input className="w-96" />
      </div>
      <div>
        <Label>
          {" "}
          <p>Number of Stories Present?</p>{" "}
        </Label>
        <Input className="w-96" />
      </div>
      <div>
        <Label>
          {" "}
          <p>Total area (or cubic capacity) available for storage??</p>{" "}
        </Label>
        <Input className="w-96" />
      </div>
      <div>
        <Label>
          {" "}
          <p>
            Identify and mark area(s), occupied by third parties in the ground
            plan :
          </p>{" "}
        </Label>
        <Input className="w-96" />
      </div>
      <div>
        <Label>
          {" "}
          <p>What is the type of construction of walls and roof?</p>{" "}
        </Label>
        <Input className="w-96" />
      </div>
      <div>
        <Label>
          {" "}
          <p>
            Which year has the building been built? Has it been recently
            remodelled? If so, when?
          </p>{" "}
        </Label>
        <Input className="w-96" />
      </div>
      <div>
        <Label>
          {" "}
          <p>
            Identify by location and size all accesses to the site/building to
            pedestrian and vehicles :
          </p>{" "}
        </Label>
        <Input className="w-96" />
      </div>
      <div>
        <Label>
          {" "}
          <p>
            Identify by location and size all other accesses to the building
            including doors & windows :
          </p>{" "}
        </Label>
        <Input className="w-96" />
      </div>
      <div>
        <Label>
          {" "}
          <p>
            Please indicate whether the premises have been authorized for
            commercial use by local Government authorities?
          </p>{" "}
        </Label>
        <Input className="w-96" />
      </div>
    </div>
  );
}
