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

import { CiViewTable } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import EditDispatchOfGoods from "../PartAComponents/EditDispatchOfGoods";
import ViewDispatchOfGoods from "../PartAComponents/ViewDispatchOfGoods";
import EditRemovalPurpose from "../PartAComponents/EditRemovalPurpose";
import ViewRemovalPurpose from "../PartAComponents/ViewRemovalPurpose";
export default function RemovalPurposeDialog({ isEdit }: Props): JSX.Element {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          {isEdit ? (
            <Button>
              <FaEdit />
            </Button>
          ) : (
            <Button>
              <CiViewTable />
            </Button>
          )}
        </DialogTrigger>
        <DialogContent
          className={
            isEdit
              ? "min-w-[900px] min-h-[700px]"
              : "min-h-[600px] min-w-[900px]"
          }
        >
          <div>
            <DialogHeader>
              <DialogTitle className="text-3xl">
                Purpose of Removal of Goods from Ware House{" "}
              </DialogTitle>
              <DialogDescription>
                {isEdit ? (
                  <div>
                    Please provide details for the removal goods for transport if transferred to another warehouse or exported to another country or state
                  </div>
                ) : (
                  <div>
                   The Details in regards to the transfer of the goods or export .
                  </div>
                )}
              </DialogDescription>
            </DialogHeader>
          </div>
          <div className="static">
            <div className="absolute top-28 left-10">
              {isEdit ? (
                <>
                  <EditRemovalPurpose />
                </>
              ) : (
                <>
                  <ViewRemovalPurpose/>
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
