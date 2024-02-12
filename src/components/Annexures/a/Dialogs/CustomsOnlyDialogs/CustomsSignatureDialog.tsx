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
import CustomsOfficerSignature from "../../CustomsComponents/IssueofLicense/CustomsOfficerSignature";

export default function CustomsSignatureDialog({ isEdit }: Props): JSX.Element {
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
            Custom's Signature
          </Button>
        </DialogTrigger>
        <DialogContent
          className={
            isEdit
              ? "min-w-[1200px] min-h-[800px]"
              : "min-h-[700px] min-w-[1200px]"
          }
        >
          <div>
            <DialogHeader>
              <DialogTitle className="text-xl">
                Customs Duty Signature
              </DialogTitle>
              <DialogDescription>
                {isEdit ? (
                  <div>
                    License No. and the date of Issue has to be mentioned during
                    submission, along with the ware house Registration code. The
                    customs duty is expected to provide his signature, his/her
                    name and her Designation and Date of Approval
                  </div>
                ) : (
                  <div>
                    The License No. and the date of Issue can be seen along with
                    the ware house Registration code. The customs duty officer
                    has signed , his/her name and her Designation and the Date
                    of Approval. These info can be viewed here.
                  </div>
                )}
              </DialogDescription>
            </DialogHeader>
          </div>
          <div className="static">
            <div className="absolute top-28 left-10">
              {isEdit ? (
                <>
                  <CustomsOfficerSignature isEdit={isEdit} />
                </>
              ) : (
                <>
                  <CustomsOfficerSignature isEdit={isEdit} />{" "}
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
