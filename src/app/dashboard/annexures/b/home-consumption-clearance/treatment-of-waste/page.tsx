import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const TreatmentOfWasteForHomeConsumption = () => {
  return (
    <>
      <Card className="max-w-4xl mx-auto my-10 bg-gray-100 p-20">
        <CardHeader>
          <CardTitle>
            <h1 className="text-2xl">Treatment of waste for home consumption</h1>
          </CardTitle>
          <CardContent>
            <form className="">
              <div className="space-y-3">
                <h2 className="text-xl pt-3">
                Duty paid on warehoused goods contained in so much of the waste or refuse
                </h2>
                <div className='flex max-w-xl'>
                  <div className='flex-1'>
                    <Label>Bill Entry No</Label>
                    <Input placeholder='Bill Entry No'/>
                  </div>
                  <div className='flex-1'>
                    <Label>Date:</Label>
                    <Input type='date'/>
                  </div>
                </div>
                <div className="flex max-w-3xl gap-3">
                  <div className="flex-1">
                    <Label>Description of Goods:</Label>
                    <Input placeholder="Description of goods" />
                  </div>
                  <div className="flex-1">
                    <Label>Quantity with UQC:</Label>
                    <Input placeholder="Quantity with UQC" />
                  </div>
                  <div className="flex-1">
                    <Label>Assessable value:</Label>
                    <Input placeholder="Assessable value" />
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h2 className="text-xl pt-3">Duty paid</h2>
                <div className="flex max-w-3xl gap-3">
                  <div className="flex-1">
                    <Label>BCD</Label>
                    <Input placeholder="BCD" />
                  </div>
                  <div className="flex-1">
                    <Label>GST</Label>
                    <Input placeholder="GST" />
                  </div>
                  <div className="flex-1">
                    <Label>Comp.cess</Label>
                    <Input placeholder="Comp.cess" />
                  </div>
                </div>
              </div>
              <div className='max-w-xl'>
                <Label>Remarks(if any)</Label>
                <Textarea/>
                
              </div>
            </form>
          </CardContent>
        </CardHeader>
      </Card>
    </>
  )
}

export default TreatmentOfWasteForHomeConsumption