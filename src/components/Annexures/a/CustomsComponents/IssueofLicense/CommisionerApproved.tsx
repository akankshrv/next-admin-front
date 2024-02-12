import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ToggleButton from "@/components/ui/togglebutton";
import { Props } from "@/index";
import React from "react";
import WareHouseApprovalDialog from "../../Dialogs/CustomsOnlyDialogs/WareHouseApprovalDialog";
import WarehouseKeeperDialog from "../../Dialogs/CustomsOnlyDialogs/WarehouseKeeperDialog";

export default function CommisionerApproved({ isEdit }: Props): JSX.Element {
  return (
    <>
      <div className="flex flex-col pr-10">
        <div className="flex flex-col border border-gray-300 w-[1000px]">
          <div className="flex flex-row border-b border-gray-300 ">
            <div className="flex flex-1 p-4 flex-row gap-1">
              <h2>Insurance Policy</h2>
            </div>
            <div className="flex-1 flex items-center">
              {isEdit ? (
                <Input type="file" />
              ) : (
                <Button className="w-36">View</Button>
              )}
            </div>
          </div>
          <div className="flex flex-row border-b border-gray-300">
            <h2 className="flex-1 p-4">Undertaking under section 73A.</h2>
            <div className="flex-1 p-4 ">
              <ToggleButton isEdit={isEdit} />
            </div>
          </div>
          <div className="flex flex-row border-b border-gray-300">
            <h2 className="flex-1 p-4">Indemnity Undertaking By</h2>
            <div className="flex-1 flex flex-row items-center">
              {
                isEdit ? <Input className="w-96" /> : (
                  <div>
                    <h2>Mr. Sri HariCharan</h2>
                  </div>
                )
              }
              
            </div>
          </div>
          <div className="flex flex-row border-b border-gray-300">
            <h2 className="flex-1 p-4">
              Bond as per Annexure C to this Circular.
            </h2>
            <div className="flex-1 p-4 flex flex-row gap-1">
              <ToggleButton isEdit={isEdit} />
              <Button>View</Button>
            </div>
          </div>
          <div className="flex flex-row border-b border-gray-300">
            <h2 className="flex-1 p-4">
            Details of Warehouse keeper appointed by the Licensee :
            </h2>
            <div className="flex-1 p-4 flex flex-row gap-1">
              <WarehouseKeeperDialog isEdit={isEdit}/>
            </div>
          </div>
          
        </div>
        {isEdit ? null : (
          <h2 className="text-right p-4 text-green-500">Approved</h2>
        )}
      </div>
    </>
  );
}
