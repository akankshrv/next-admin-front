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
import { ApprovedWarehouse, PendingApprovedWarehouse } from "../../CustomsComponents";


export default function WareHouseApprovalDialog({
  isEdit,
}: Props): JSX.Element {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button variant="default" className="">
            {isEdit ? "Pending": "Approved"}
          </Button>
        </DialogTrigger>
        <DialogContent className={isEdit ? "min-w-[1200px] min-h-[700px]": "min-h-[550px] min-w-[1200px]"}>
          <div>
            <DialogHeader className="">
              <DialogTitle className="text-xl">Ware House Approval</DialogTitle>
              <DialogDescription>
               
              </DialogDescription>
            </DialogHeader>
          </div>
          <div className="static">
            <div className="absolute top-20 left-10">
              
            {isEdit ? (
                <>
                  <PendingApprovedWarehouse />
                </>
              ) : (
                <>
                  <ApprovedWarehouse />{" "}
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
