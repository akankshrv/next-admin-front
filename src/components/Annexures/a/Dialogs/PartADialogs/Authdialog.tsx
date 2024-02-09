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

export default function BankAccountDialog({ isEdit }: Props): JSX.Element {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default" className="">
            {isEdit ? <FaEdit /> : <GrView />}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] min-w-[800px] min-h-[500px] my-auto p-10">
          <DialogHeader className="-mb-36">
            <DialogTitle>
              <h1> Authorized Personal Details</h1>
            </DialogTitle>
            <DialogDescription className="text-xl">
             You can check who the authorized person to do the changes is in this section.
            </DialogDescription>
          </DialogHeader>
          {isEdit ? (
            <div className="flex flex-col px-20 justify-center gap-5">
              <div>
                <Label className="text-right">Name of the Authorized Person:</Label>
                <Input />
              </div>
              <div>
                <Label className="text-right">Designation:</Label>
                <Input />
              </div>
   
            </div>
          ) : (
            <div>
              <div className="flex flex-col p-10 w-full flex-flex-col gap-4 space-y-5">
                <div className="grid grid-cols-2 place-items-start">
                  <div className="text-xl ">Authorized Person:</div>
                  <div>
                    <p className="text-lg">Mr. Puneeth Rajkumar</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 place-items-start">
                  <div className="text-xl">Designation:</div>
                  <div>
                    <p className="text-lg">CEO</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 place-items-start">
                  <div className="text-xl">Edit Rights:</div>
                  <div>
                    <p className="text-lg">Yes</p>
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
