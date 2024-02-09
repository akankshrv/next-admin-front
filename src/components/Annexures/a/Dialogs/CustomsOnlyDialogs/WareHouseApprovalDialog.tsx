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
        <DialogContent>
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>

          <DialogFooter>
            
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
