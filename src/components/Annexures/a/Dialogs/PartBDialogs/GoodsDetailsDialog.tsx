import React from "react";
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

import { FaEdit } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import EditGoods from "../../CustomsComponents/EditGoods";
import ViewGoods from "../../CustomsComponents/ViewGoods";

export default function GoodsDetailsDialog({ isEdit }: Props): JSX.Element {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button variant="default" className="">
            {isEdit ? <FaEdit /> : <GrView />}
          </Button>
        </DialogTrigger>
        <DialogContent className=" min-w-[1100px] min-h-[600px]">
          <DialogHeader>
            <DialogTitle>Description of the WareHouse Premise</DialogTitle>
            {isEdit ? (
              <DialogDescription>
                This form aims to gather comprehensive information about a
                building's characteristics and usage. It includes sections to
                record details such as the Goods details, No. of goods and More additional info required. Providing accurate data in each section
                will facilitate better understanding and management of the
                building's attributes and functionalities.
              </DialogDescription>
            ) : (
              <DialogDescription>
                This section shows comprehensive information about a building's
                characteristics and usage.It includes sections to
                record details such as the Goods details, No. of goods and More additional info if provided.
              </DialogDescription>
            )}
          </DialogHeader>

          <div className="static">
            <div className="absolute top-40 left-10">
              {isEdit ? (
                <>
                  <EditGoods />
                </>
              ) : (
                <>
                  <ViewGoods />{" "}
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
