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
import Authdialog from "./Authdialog";
import { Props } from "@/index";
import { Card } from "@/components/ui/card";

export default function ViewcompanyDialog({ isEdit }: Props): JSX.Element {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default" className="">
            {isEdit ? <FaEdit /> : <GrView />}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] min-w-[1200px] min-h-[600px] p-10">
          <DialogHeader className="-mb-36">
            <DialogTitle>
              <h1> Company Details </h1>
            </DialogTitle>
            <DialogDescription className="text-xl">
              You can view the details of the company here
            </DialogDescription>
          </DialogHeader>
          {isEdit ? (
            <div className="flex flex-col px-20 justify-center gap-5">
              <div>
                <Label className="text-right">License No.</Label>
                <Input />
              </div>
              <div>
                <Label className="text-right">Commissionerate file No.</Label>
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
                  Whether the applicant is a Licensed Customs Broker? If yes,
                  please provide details :
                </Label>
                <Input />
              </div>
              <div>
                <Label className="text-right">
                  Whether the applicant is AEO? If yes, please provide details.
                </Label>
                <Input />
              </div>
            </div>
          ) : (
            <div>
              <div className="flex flex-col p-10 w-full flex-flex-col gap-4 space-y-5">
                <div className="grid grid-cols-2 place-items-start">
                  <div className="text-xl ">Name of the Applicant:</div>
                  <div>
                    <p className="text-lg">
                      Instorein Technologies Private Limited
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 place-items-start">
                  <div className="text-xl">Pan No:</div>
                  <div>
                    <p className="text-lg">AAECIO133R1</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 place-items-start">
                  <div className="text-xl">GSTIN:</div>
                  <div>
                    <p className="text-lg">29AAECIO133R1</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 place-items-start">
                  <div className="text-xl">IEC:</div>
                  <div>
                    <p className="text-lg">IEC</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 place-items-start">
                  <div className="text-xl ">Constitution of Business:</div>
                  <div>
                    <p className="text-lg">Private Limited Company</p>
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
