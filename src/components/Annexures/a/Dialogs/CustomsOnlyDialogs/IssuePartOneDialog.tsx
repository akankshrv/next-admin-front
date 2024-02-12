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

export default function IssuePartOneDialog({ isEdit }: Props): JSX.Element {
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
            Commissioner's Approval
          </Button>
        </DialogTrigger>
        <DialogContent
          className={
            isEdit
              ? "min-w-[1200px] min-h-[600px]"
              : "min-h-[600px] min-w-[1200px]"
          }
        >
          <div>
            <DialogHeader>
              <DialogTitle className="text-xl">
                Commisioner Approval
              </DialogTitle>
              <DialogDescription>
                Upon the satisfaction of the Commissioner that the licence may
                be granted, the following shall be obtained from the applicant
                (Please refer Regulation 4 of Private Warehouse Licensing
                Regulations, 2016)
              </DialogDescription>
            </DialogHeader>
          </div>
          <div className="static">
            <div className="absolute top-28 left-10">
              {isEdit ? (
                <>
                  <CommissionerApproved isEdit={isEdit}/>
                </>
              ) : (
                <>
                  <CommissionerApproved isEdit={isEdit}/>{" "}
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
