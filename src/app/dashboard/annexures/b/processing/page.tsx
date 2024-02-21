'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import React from 'react'

const ProcessingForm = () => {
  return (
    <>
    <Card className="max-w-4xl mx-auto my-10 bg-gray-100 p-20">
        <CardHeader>

          <CardTitle>
            <h1 className="text-2xl">Processing</h1>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form className="">
            <p>Goods issued for manufacturing or other operations</p>
            <div className="flex">
              <div className="max-w-xl">
                <Label>Date of issue</Label>
                <Input placeholder="enter value" />
              </div> 
              </div>
            <div className="max-w-xl">
              <Label>Description of goods</Label>
              <Input placeholder="Description of goods" />
            </div>

            <div className="max-w-xl">
              <Label>Goods Quality with UQC:</Label>
              <Input placeholder="Goods Quality with UQC" />
            </div>
            <div className="max-w-xl">
              <Label>Value:</Label>
              <Input placeholder="value" />
            </div>
            <div className='flex gap-2 max-w-xl '>
              <div className='flex-1'>
                <Label>Date</Label>
                <Input type='date'/>
              </div>
              <div className='flex-1'>
                <Label>Time of removal</Label>
                <Input type='time'/>
              </div>
            </div>
            <div className="max-w-xl">
              <Label>Description of goods</Label>
              <Input placeholder="Description of goods" />
            </div>
            <div className="max-w-xl">
              <Label>Quality with UQC:</Label>
              <Input placeholder="Quality with UQC" />
            </div>
            <div className="max-w-xl">
              <Label>Value:</Label>
              <Input placeholder="value" />
            </div>
            

            <div className="max-w-xl">
              <Label>Delivery Challan No:</Label>
              <Input placeholder="Delivery Challan No" />
            </div>

            <p>Details of Job worker</p>
            <div className='flex max-w-xl gap-2'>
            <div className="flex-1">
              <Label>Name:</Label>
              <Input placeholder="name" />
            </div>
            <div className="flex-1">
              <Label>Address:</Label>
              <Input placeholder="address" />
            </div>
            </div>

            
              <div className="max-w-xl">
                <Label>GSTIN(if applicable)</Label>
                <Input type="GSTIN" />
              </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>Save</Button>
        </CardFooter>
      </Card>
    </>
  )
}

export default ProcessingForm