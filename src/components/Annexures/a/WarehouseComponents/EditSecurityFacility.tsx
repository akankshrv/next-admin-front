import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ToggleButton from "@/components/ui/togglebutton";
import React from "react";

export default function EditSecurityFacility() {
  return (
    <div className="space-y-1 flex flex-col gap-1">
      <div className="flex flex-row gap-5 items-center">
        <Label>
          {" "}
          <p>Burglar Alarm System :</p>{" "}
        </Label>
        <ToggleButton />
      </div>
      <h1>CCTV Facility </h1>
      <div className="flex flex-col gap-5">
        <Label>
          {" "}
          <p>
            Is there a CCTV monitoring system installed to cover the surrounding
            area of the site and storage area?
          </p>{" "}
        </Label>
        <ToggleButton />
      </div>
      <div>
        <Label>
          {" "}
          <p>Please indicate the no. of cameras installed :</p>{" "}
        </Label>
        <Input className="w-96" />
      </div>
      <div>
        <Label>
          {" "}
          <p>
            No. of hours/days of recording accessible at any point of time :
          </p>{" "}
        </Label>
        <Input className="w-96" />
      </div>
      <div className="flex flex-row items-center gap-5">
        <Label>
          {" "}
          <p>Fire Security</p>{" "}
        </Label>
        <ToggleButton />
      </div>
    </div>
  );
}
