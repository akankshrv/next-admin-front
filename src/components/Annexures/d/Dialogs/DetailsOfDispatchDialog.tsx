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
import EditDetailsOfDispatch from "../PartAComponents/EditDetailsOfDispatch";
import ViewDetailsofDispatch from "../PartAComponents/ViewDetailsofDispatch";
export default function DetailsOfDispatchDialog({
  isEdit,
}: Props): JSX.Element {
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
              ? "min-w-[900px] min-h-[600px]"
              : "min-h-[600px] min-w-[900px]"
          }
        >
          <div>
            <DialogHeader>
              <DialogTitle className="text-3xl">
                Time and transportation vehicle details at Dispatch{" "}
              </DialogTitle>
              <DialogDescription>
                {isEdit ? (
                  <div>
                    Please provide the details of the time of removal of the
                    goods from one warehouse to another and the mode transport,
                    the details of the vehicle used for the transport of the
                    goods during dispatch should be provided.
                  </div>
                ) : (
                  <div>
                    The details of the time of removal of the goods from one
                    warehouse to another and the mode transport, the details of
                    the vehicle used for the transport of the goods during
                    dispatch should be provided.
                  </div>
                )}
              </DialogDescription>
            </DialogHeader>
          </div>
          <div className="static">
            <div className="absolute top-28 left-10">
              {isEdit ? (
                <>
                  <EditDetailsOfDispatch />
                </>
              ) : (
                <>
                  <ViewDetailsofDispatch />
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
