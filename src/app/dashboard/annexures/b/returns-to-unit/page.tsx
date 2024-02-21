"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import React from 'react'

const ReturnsToUnitForm = () => {
  return (
   <>
   <Card className="max-w-4xl mx-auto my-10 bg-gray-100 p-20">
        <CardHeader>

          <CardTitle>
            <h1 className="text-2xl">Reeturns to unit after job work</h1>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form className="">
            <div className="flex gap-2 max-w-xl">
              <div className="flex-1 ">
                <Label>Date</Label>
                <Input type="date" />
              </div> 
              <div className="flex-1">
                <Label>Time of return:</Label>
                <Input type="time"/>
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

            
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>Save</Button>
        </CardFooter>
      </Card>
   </>
  )
}

export default ReturnsToUnitForm