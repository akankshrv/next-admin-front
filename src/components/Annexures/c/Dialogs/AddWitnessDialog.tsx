import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function AddWitnessDialog() {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button>Add Witness</Button>
        </DialogTrigger>
        <DialogContent className="min-w-[800px]">
          <DialogHeader>
            <DialogTitle>Witness Details </DialogTitle>
            <DialogDescription>
              Additional Witness Info such as Signature and Name. The Address of
              the Witness and the occupation of the Witness
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-row items-center  ">
            <Label className="label-primary">
              Name of the Witness
            </Label>
            <div className="flex-1">
              <Input />
            </div>
          </div>
          <div className="flex flex-row items-center  ">
            <Label className="label-primary">
              Signature of the Witness
            </Label>
            <div className="flex-1">
              <Input />
            </div>
          </div>
          <div className="flex flex-row items-center  ">
            <Label className="label-primary">
              Address of the Witness
            </Label>
            <div className="flex-1">
              <Textarea />
            </div>
          </div>
          <div className="flex flex-row items-center  ">
            <Label className="label-primary">
              Occupation of the Witness
            </Label>
            <div className="flex-1">
              <Input />
            </div>
          </div>
          
        </DialogContent>
      </Dialog>
    </>
  );
}


