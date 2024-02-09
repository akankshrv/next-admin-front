import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Props } from "@/index";
import { DialogTrigger } from "@radix-ui/react-dialog";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import CustomsTabs from "../../Tabs/CustomsTabs";

export default function WareHouseApprovalDialog({
  isEdit,
}: Props): JSX.Element {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button variant="default" className="">
            {isEdit ? <FaEdit /> : <GrView />}
          </Button>
        </DialogTrigger>
        <DialogContent className="min-w-[1200px] min-h-[1000px] ">
          <div>
            <DialogHeader className="">
              <DialogTitle className="text-xl">Customs Approval</DialogTitle>
              <DialogDescription>
                Please do the necessary Approval checks for the companies and
                their respective warehouses
              </DialogDescription>
            </DialogHeader>
          </div>
          <div className="static">
            <div className="absolute top-20 left-10">
              <CustomsTabs />
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
