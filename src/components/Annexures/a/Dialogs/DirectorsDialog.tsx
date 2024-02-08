import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CiViewList } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { GrView } from "react-icons/gr";

import { Props } from "@/index";

export default function DirectorsDialog({ isEdit }: Props): JSX.Element {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default" className="">
            {isEdit ? <FaEdit /> : <GrView />}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] min-w-[1000px] min-h-[400px] p-10">
          <DialogHeader className="-mb-36">
            <DialogTitle>
              <h1> Directors Details</h1>
            </DialogTitle>
            <DialogDescription className="text-xl">
              You can view the Directors details in this section.
            </DialogDescription>
          </DialogHeader>
          {isEdit ? (
            <div className="flex flex-col px-20 justify-center gap-5">
              <div>
                <Label className="text-right">Name of the Director:</Label>
                <Input />
              </div>
              <div>
                <Label className="text-right">DIN No:</Label>
                <Input />
              </div>
            </div>
          ) : (
            <div>
              <div className="flex flex-col p-10 w-full flex-flex-col gap-4 space-y-5">
                <div className="grid grid-cols-2 place-items-start">
                  <div className="text-xl ">Name of the Director:</div>
                  <div>
                    <p className="text-lg">Mr.Puneeth Rajkumar</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 place-items-start">
                  <div className="text-xl">DIN No:</div>
                  <div>
                    <p className="text-lg">901993992</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {isEdit ? (
            <DialogFooter>
              <Button>Submit</Button>
            </DialogFooter>
          ) : (
            <div className="hidden">
              <DialogFooter>
                <Button>Submit</Button>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
