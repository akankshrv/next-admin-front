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
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { GrView } from "react-icons/gr";
import { IoIosRefresh } from "react-icons/io";
import Authdialog from "../PartADialogs/Authdialog";
import { Props } from "@/index";
import { Card } from "@/components/ui/card";

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
              <h1>Details </h1>
            </DialogTitle>
            <DialogDescription className="text-xl">
              This form is designed to gather essential details regarding
              security measures at the premises and personnel involved. Please
              provide information under the following three headings:
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
            <Card>this is view </Card>
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
