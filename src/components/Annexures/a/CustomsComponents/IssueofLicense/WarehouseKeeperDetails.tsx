import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ToggleButton from "@/components/ui/togglebutton";
import { Props } from "@/index";
import React from "react";

export default function WarehouseKeeperDetails({ isEdit }: Props): JSX.Element {
  return (
    <>
      <div className="flex flex-col pr-10">
        <div className="flex flex-col border border-gray-300 w-[1000px]">
          <div className="flex flex-row border-b border-gray-300 ">
            <div className="flex flex-1 p-4 flex-row gap-1">
              <h2>Name</h2>
            </div>
            <div className="flex-1 flex items-center">
              {isEdit ? (
                <Input type="text" className="m-4" />
              ) : (
                <div>
                  <h2>Ram Charan</h2>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-row border-b border-gray-300">
            <h2 className="flex-1 p-4">Address</h2>
            <div className="flex-1 flex items-center">
              {isEdit ? (
                <Input type="text" className="m-4" />
              ) : (
                <div>
                  <h2>
                    42, Ganga Street, Saraswati Nagar, Krishna Colony, Jasmine
                    Valley, Rajasthan, 302001, India.
                  </h2>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-row border-b border-gray-300">
            <h2 className="flex-1 p-4">Telephone - Office</h2>
            <div className="flex-1 flex items-center">
              {isEdit ? (
                <Input type="text" className="m-4" />
              ) : (
                <div>
                  <h2>0920920299</h2>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-row border-b border-gray-300">
            <h2 className="flex-1 p-4">Telephone - Mobile</h2>
            <div className="flex-1 flex items-center">
              {isEdit ? (
                <Input type="text" className="m-4" />
              ) : (
                <div>
                  <h2>0920908798</h2>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-row border-b border-gray-300">
            <h2 className="flex-1 p-4">Email ID</h2>
            <div className="flex-1 flex items-center">
              {isEdit ? (
                <Input type="text" className="m-4" />
              ) : (
                <div>
                  <h2>ramcharan@gmail.com</h2>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-row border-b border-gray-300">
            <h2 className="flex-1 p-4">
              Confirmation that digital signature has been obtained by the
              warehouse keeper (as per guidance available on ICEGATE website).
            </h2>
            <div className="flex-1 flex items-center">
              {isEdit ? (
                <div className="flex gap-3 items-center">
                  {/* <ToggleButton isEdit={true} /> */}
                  <Input type="file" className="m-4" />
                </div>
              ) : (
                <div className="flex gap-3">
                  <ToggleButton isEdit={false} />
                  <Button>View</Button>
                </div>
              )}
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
