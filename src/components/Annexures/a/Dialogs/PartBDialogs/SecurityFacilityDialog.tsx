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
import EditGoods from "../../WarehouseComponents/EditGoods";
import ViewGoods from "../../WarehouseComponents/ViewGoods";
import EditSecurityFacility from "../../WarehouseComponents/EditSecurityFacility";
import ViewSecurityFacility from "../../WarehouseComponents/ViewSecurityFacility";

export default function SecurityFacilityDialog({ isEdit }: Props): JSX.Element {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button variant="default" className="">
            {isEdit ? <FaEdit /> : <GrView />}
          </Button>
        </DialogTrigger>
        <DialogContent className=" min-w-[1300px] min-h-[700px]">
          <DialogHeader>
            <DialogTitle>Description of the WareHouse Premise</DialogTitle>
            {isEdit ? (
              <DialogDescription>
                This form aims to gather comprehensive information about a
                building's characteristics in terms of security. It includes
                Burglar alarm system, CCTV Facilities which Includes no. of
                Cameras and Fire Security System
              </DialogDescription>
            ) : (
              <DialogDescription>
                This section shows comprehensive information about a building's
                characteristics and usage. It includes Burglar alarm system,
                CCTV Facilities which Includes no. of Cameras and Fire Security
                System
              </DialogDescription>
            )}
          </DialogHeader>

          <div className="static">
            <div className="absolute top-40 left-10">
              {isEdit ? (
                <>
                  <EditSecurityFacility />
                </>
              ) : (
                <>
                  <ViewSecurityFacility />{" "}
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
