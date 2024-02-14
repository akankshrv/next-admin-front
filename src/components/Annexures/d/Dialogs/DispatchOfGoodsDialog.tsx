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
export default function DispatchOfGoodsDialog({ isEdit }: Props): JSX.Element {
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
                Ware House Details{" "}
              </DialogTitle>
              <DialogDescription>
                {isEdit ? (
                  <div>
                    Please provide details of the warehouse where the goods was
                    stored.
                  </div>
                ) : (
                  <div>
                    The details of the warehouse where the goods was stored.
                  </div>
                )}
              </DialogDescription>
            </DialogHeader>
          </div>
          <div className="static">
            <div className="absolute top-28 left-10">
              {isEdit ? (
                <>
                  <EditDispatchOfGoods />
                </>
              ) : (
                <>
                  <ViewDispatchOfGoods />
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
