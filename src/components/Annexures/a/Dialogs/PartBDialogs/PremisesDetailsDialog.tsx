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
import CustomsTabs from "../../Tabs/CustomsTabs";
import EditPremises from "../../WarehouseComponents/EditPremises";
import ViewPremises from "../../WarehouseComponents/ViewPremises";

export default function PremisesDetailsDialog({ isEdit }: Props): JSX.Element {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button variant="default" className="">
            {isEdit ? <FaEdit /> : <GrView />}
          </Button>
        </DialogTrigger>
        <DialogContent className=" min-w-[1300px] min-h-[900px]">
          <DialogHeader>
            <DialogTitle>Description of the WareHouse Premise</DialogTitle>
            {isEdit ? (
              <DialogDescription>
                This form aims to gather comprehensive information about a
                building's characteristics and usage. It includes sections to
                record details such as the floor area, number of stories,
                storage capacity, areas occupied by third parties, construction
                type of walls and roof, year built and any remodeling, accesses
                for pedestrians and vehicles, other accesses like doors and
                windows, and authorization for commercial use by local
                government authorities. Providing accurate data in each section
                will facilitate better understanding and management of the
                building's attributes and functionalities.
              </DialogDescription>
            ) : (
              <DialogDescription>
                This section shows comprehensive information about a building's
                characteristics and usage. It includes sections to record
                details such as the floor area, number of stories, storage
                capacity, areas occupied by third parties, construction type of
                walls and roof, year built and any remodeling, accesses for
                pedestrians and vehicles, other accesses like doors and windows,
                and authorization for commercial use by local government
                authorities.
              </DialogDescription>
            )}
          </DialogHeader>

          <div className="static">
            <div className="absolute top-40 left-10">
              {isEdit ? (
                <>
                  <EditPremises />
                </>
              ) : (
                <>
                  <ViewPremises />{" "}
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
