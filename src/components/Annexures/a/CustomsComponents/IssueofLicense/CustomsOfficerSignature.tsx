import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/datepicker";
import { Input } from "@/components/ui/input";
import ApprovalSignature from "@/components/ui/signature";
import ToggleButton from "@/components/ui/togglebutton";
import { Props } from "@/index";
import React from "react";

export default function CustomsOfficerSignature({ isEdit }: Props): JSX.Element {
  return (
    <>
      <div className="flex flex-col pr-10 ">
        <div className="flex flex-col border border-gray-300 w-[1000px] p-4">
          <div className="flex flex-row border-b border-gray-300 ">
            <div className="flex flex-1 p-4 flex-row gap-1">
              <h2>License No. :</h2>
            </div>
            <div className="flex-1 flex items-center">
              {isEdit ? (
                <Input type="text" className="m-4" />
              ) : (
                <div>
                  <h2>304</h2>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-row border-b border-gray-300">
            <h2 className="flex-1 p-4">Date of Issue:</h2>
            <div className="flex-1 flex items-center">
              {isEdit ? (
                <DatePicker />
              ) : (
                <div>
                  <h2>date/month/year</h2>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-row border-b border-gray-300">
            <h2 className="flex-1 p-4">
              Warehouse Registration Code on ICEGATE (refer Circular 19/2016
              dated 20th May 2016) :
            </h2>
            <div className="flex-1 flex items-center">
              {isEdit ? (
                <Input type="text" className="m-4" />
              ) : (
                <div>
                  <h2>980482</h2>
                </div>
              )}
            </div>
          </div>
          {
            isEdit ? <ApprovalSignature /> : 
            (
                <div className="text-xl w-[50%] p-10">
                    <div className="flex flex-row ">
                        <h3 className="flex-1 font-semibold">Full Name:</h3>
                        <p className="flex-1">Mr. Aditya Jakochi</p>
                    </div>
                    <div className="flex flex-row ">
                        <h3 className="flex-1 font-semibold">Designation</h3>
                        <p className="flex-1">Customs Senior Officer</p>
                    </div>
                    <div className="flex flex-row ">
                        <h3 className="flex-1 font-semibold">Signature:</h3>
                        <p className="flex-1">Adijak</p>
                    </div>
                    <div className="flex flex-row ">
                        <h3 className="flex-1 font-semibold">Date of Issue:</h3>
                        <p className="flex-1">February 12th 2024</p>
                    </div>
                </div>
            )
          }
         
        </div>
        {isEdit ? null : (
          <h2 className="text-right p-4 text-green-500">Approved</h2>
        )}
      </div>
    </>
  );
}
