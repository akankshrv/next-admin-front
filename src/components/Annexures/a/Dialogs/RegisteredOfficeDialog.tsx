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


export default function RegisteredOfficeDialog({ isEdit }: Props): JSX.Element {
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
              <h1> Registered Office Details </h1>
            </DialogTitle>
            <DialogDescription className="text-xl">
              You can view the registered Office telephone number , fax, address
              and email
            </DialogDescription>
          </DialogHeader>
          {isEdit ? (
            <div className="flex flex-col px-20 justify-center gap-5">
              <div>
                <Label className="text-right">Address</Label>
                <Input />
              </div>
              <div>
                <Label className="text-right">Telephone number</Label>
                <Input />
              </div>
              <div>
                <Label className="text-right">Fax number</Label>
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
                <Label className="text-right">E-mail</Label>
                <Input />
              </div>
            </div>
          ) : (
            <div>
              <div className="flex flex-col p-10 w-full flex-flex-col gap-4 space-y-5">
                <div className="grid grid-cols-2 place-items-start">
                  <div className="text-xl ">Address:</div>
                  <div>
                    <p className="text-lg">
                      Singapore GardenSgublala Cross, Kanakapura Main Road,
                      DoddaKalaSandraBangalore NO.19 Karnataka Bengaluru Urban
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 place-items-start">
                  <div className="text-xl">Telephone:</div>
                  <div>
                    <p className="text-lg">9090090909</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 place-items-start">
                  <div className="text-xl">Fax:</div>
                  <div>
                    <p className="text-lg">044 123 4567</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 place-items-start">
                  <div className="text-xl">E-mail:</div>
                  <div>
                    <p className="text-lg">company@email.com</p>
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
