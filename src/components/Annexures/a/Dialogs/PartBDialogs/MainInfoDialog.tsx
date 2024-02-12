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
import { IoIosRefresh } from "react-icons/io";
import Authdialog from "../PartADialogs/Authdialog";
import { Props } from "@/index";
import { Card } from "@/components/ui/card";
import { DatePicker } from "@/components/ui/datepicker";

export default function MainInfoDialog({ isEdit }: Props): JSX.Element {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default" className="">
            {isEdit ? <FaEdit /> : <GrView />}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] min-w-[1200px] min-h-[800px] p-10">
          <DialogHeader className="-mb-36">
            <DialogTitle>
              <h1>WareHouse Details </h1>
            </DialogTitle>
            <DialogDescription className="text-xl">
              This form is designed to gather essential details regarding
              security measures at the premises and personnel involved. Please
              provide information under the following three headings:
            </DialogDescription>
          </DialogHeader>

          <div className="static">
            <div className="absolute top-40 left-10">
              {isEdit ? (
                <div className="flex flex-col px-20 justify-center gap-5">
                  <div>
                    <Label className="text-right">License No.</Label>
                    <Input />
                  </div>
                  <div>
                    <Label className="text-right">
                      Date of registration of License
                    </Label>
                    <DatePicker />
                  </div>
                  <div>
                    <Label className="text-right">
                      Commissionerate file No.
                    </Label>
                    <Input />
                  </div>
                  <div>
                    <Label className="text-right">
                      Attach copy of warehouse license.
                    </Label>
                    <Input type="file" />
                  </div>
                  <div>
                    <Label className="text-right">
                      Whether the applicant is a Licensed Customs Broker? If
                      yes, please provide details :
                    </Label>
                    <Input />
                  </div>
                  <div>
                    <Label className="text-right">
                      Whether the applicant is AEO? If yes, please provide
                      details.
                    </Label>
                    <Input />
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex flex-col px-20 justify-center gap-5">
                    <div className="flex flex-col gap-2 ">
                      <div className="text-xl">License No: </div>
                      <p>101</p>
                    </div>
                    <div className="flex flex-col gap-2 ">
                      <Label className="text-xl">
                        Date of issue of license:{" "}
                      </Label>
                      <p>10/10/2022</p>
                    </div>
                    <div className="flex flex-col gap-2 ">
                      <Label className="text-xl">
                        Commissionerate file No.:{" "}
                      </Label>
                      <p>290</p>
                    </div>
                    <div className="flex flex-col gap-2 ">
                      <Label className="text-xl">
                        Is the copy of the warehouse details attached?{" "}
                      </Label>
                      <p>Yes</p>
                    </div>
                    <div className="flex flex-col gap-2 ">
                      <Label className="text-xl">
                        Whether the applicant is a Licensed Customs Broker? If
                        yes, please provide details :{" "}
                      </Label>
                      <p>Added</p>
                    </div>
                    <div className="flex flex-col gap-2 ">
                      <Label className="text-xl">
                        Whether the applicant is AEO? If yes, please provide
                        details:{" "}
                      </Label>
                      <p>No</p>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="absolute bottom-0 right-0">
              {isEdit ? (
                <Button className="w-96 p-1 mb-10 mr-10">Submit</Button>
              ) : (
                <div className="hidden">
                  <Button className="w-96 p-1 mb-10 mr-10">Submit</Button>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
