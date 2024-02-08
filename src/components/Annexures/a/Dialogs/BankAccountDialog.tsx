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
        <DialogContent className="sm:max-w-[425px] min-w-[1200px] min-h-[500px] p-10">
          <DialogHeader className="-mb-36">
            <DialogTitle>
              <h1> Bank Account Details </h1>
            </DialogTitle>
            <DialogDescription className="text-xl">
              You can view the Bank Account details in this section.
            </DialogDescription>
          </DialogHeader>
          {isEdit ? (
            <div className="flex flex-col px-20 justify-center gap-5">
              <div>
                <Label className="text-right">Name of the Bank:</Label>
                <Input />
              </div>
              <div>
                <Label className="text-right">Branch Name:</Label>
                <Input />
              </div>
              <div>
                <Label className="text-right">IFSC Code:</Label>
                <Input type="file" />
              </div>
              <div>
                <Label className="text-right">Account Number:</Label>
                <Input />
              </div>
              <div>
                <Label className="text-right">E-mail</Label>
                <Input />
              </div>
            </div>
          ) : (
            <div>
              <div className="flex flex-col p-10 w-full flex-flex-col gap-4 space-y-5">
                <div className="grid grid-cols-2 place-items-start">
                  <div className="text-xl ">Name of the Bank:</div>
                  <div>
                    <p className="text-lg">Axis Bank</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 place-items-start">
                  <div className="text-xl">Branch Name:</div>
                  <div>
                    <p className="text-lg">Bangalore</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 place-items-start">
                  <div className="text-xl">IFSC Code:</div>
                  <div>
                    <p className="text-lg">AXIS000000</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 place-items-start">
                  <div className="text-xl">Account Number:</div>
                  <div>
                    <p className="text-lg">87421590634218</p>
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
