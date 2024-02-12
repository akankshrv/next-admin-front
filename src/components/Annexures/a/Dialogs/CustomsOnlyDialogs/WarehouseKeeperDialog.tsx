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
import {
  ApprovedWarehouse,
  PendingApprovedWarehouse,
} from "../../CustomsComponents";
import CommissionerApproved from "../../CustomsComponents/IssueofLicense/CommisionerApproved";
import WarehouseKeeperDetails from "../../CustomsComponents/IssueofLicense/WarehouseKeeperDetails";

export default function WarehouseKeeperDialog({ isEdit }: Props): JSX.Element {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button
            variant="default"
            className={
              isEdit ? "bg-red-700 text-white" : "bg-green-500 text-white"
            }
          >
            {
              isEdit ? "Submit" : "View" 
            }
           
          </Button>
        </DialogTrigger>
        <DialogContent
          className={
            false
              ? "min-w-[1200px] min-h-[700px]"
              : "min-h-[700px] min-w-[1200px]"
          }
        >
          <div>
            <DialogHeader>
              <DialogTitle className="text-xl">
                WareHouse Keeper Details 
              </DialogTitle>
              <DialogDescription>
                Details of the Warehouse Keeper appointed by the Licensee.
              </DialogDescription>
            </DialogHeader>
          </div>
          <div className="static">
            <div className="absolute top-28 left-10">
              {isEdit ? (
                <>
                  <WarehouseKeeperDetails isEdit={isEdit}/>
                </>
              ) : (
                <>
                  <WarehouseKeeperDetails isEdit={isEdit}/>{" "}
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
