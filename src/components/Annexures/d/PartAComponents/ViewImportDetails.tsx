import { DatePicker } from '@/components/ui/datepicker'
import { Label } from '@/components/ui/label'
import React from 'react'

export default function ViewImportDetails() {
  return (
    <>
       <div className="flex flex-col pr-10">
        <div className="flex flex-col border border-gray-300 w-[800px] space-y-2 p-1 gap-1 border-none ">
          <div className="flex flex-row items-center  ">
            <Label className="label-primary">Bill of the Entry No. : </Label>
            <div className="flex-1 text-xl">
              203
            </div>
          </div>
          <div className="flex flex-row items-center">
            <Label className="label-primary">
              Date of when the Entry No was issued :{" "}
            </Label>
            <div className="flex-1">
              February 14th, 2024
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

