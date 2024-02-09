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
import { Textarea } from "@/components/ui/textarea";

export default function ManufacturingDetailsDialog({
  isEdit,
}: Props): JSX.Element {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default" className="">
            {isEdit ? <FaEdit /> : <GrView />}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] min-w-[1200px] min-h-[900px] p-10">
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
                <Label className="text-right">Location:</Label>
                <Input />
              </div>
              <div>
                <Label className="text-right">Facility:</Label>
                <Input />
              </div>
              <div>
                <Label className="text-right">Goods Manufactured:</Label>
                <Input type="file" />
              </div>
              <div>
                <Label className="text-right">In charge:</Label>
                <Input />
              </div>
              <p className="font-thin text-sm">
                Details of existing manufacturing facilities in India and/or
                OverSeas of the Applicant firm and of each of its
                directors/partners/proprietor, as the case may be (please attach
                separate sheet if required){" "}
              </p>
              <Textarea placeholder="Details" />
              <div>
                <Label className="text-right">Add File</Label>
                <Input type="file" />
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-center pt-10 mb-5">Manufacturing Details</h2>
              <div className="flex flex-col p-10 w-full flex-flex-col gap-4 space-y-5">
                <div className="grid grid-cols-2 place-items-start ">
                  <div className="text-xl">Location:</div>
                  <div>
                    <p className="text-lg">Bangalore</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 place-items-start ">
                  <div className="text-xl">Facility Name:</div>
                  <div>
                    <p className="text-lg">
                      Instorein Technologies Private Limited{" "}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 place-items-start ">
                  <div className="text-xl">Good Manufactured:</div>
                  <div>
                    <p className="text-lg">500</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 place-items-start ">
                  <div className="text-xl">In-charge</div>
                  <div>
                    <p className="text-lg">Subramanya Reddy</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-lg">Details</div>
                  <p className="text-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Veniam numquam sequi harum architecto. Natus placeat
                    obcaecati iusto distinctio delectus doloribus! Possimus
                    cumque illo voluptatum ex beatae facilis libero est
                    cupiditate.
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="text-lg">File</div>
                  <p className="text-sm">Attached</p>
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
