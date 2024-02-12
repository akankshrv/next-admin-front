
import React from 'react'
import { Input } from './input'
import { Label } from './label'
import { DatePicker } from './datepicker'

function ApprovalSignature() {
  return (
    <div className='flex flex-col pt-4'>
        <div className='flex flex-col gap-4 items-center w-96'>
            <Input className='flex-1 w-full' placeholder='Signature of the Approver'/>
            <Input className='flex-1 w-full' placeholder='Full Name of the Approver'/>
            <Input className='flex-1 w-full' placeholder='Designation of the Approver'/>
            <DatePicker />
        </div>
        
    </div>
  )
}

export default ApprovalSignature