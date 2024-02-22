import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const ImportedGoodsForHomeConsumption = () => {
  return (
    <>
    <Card className="max-w-4xl mx-auto my-10 bg-gray-100 p-20">
        <CardHeader>
          <CardTitle>
            <h1 className="text-2xl">
              Imported goods cleared as such for home consumption
            </h1>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form className="">
            <div className="flex gap-2 max-w-xl">
              <div className="flex-1">
                <Label>Bill Entry No:</Label>
                <Input placeholder="Bill Entry No" />
              </div>
              <div className="flex-1 ">
                <Label>Date</Label>
                <Input type="date" />
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
              <Label>Assessable Value:</Label>
              <Input placeholder="Assessable Value" />
            </div>

            <div className='pt-3'>
              <h2 className='text-xl'>Duty involved:</h2>
              <div className="max-w-xl">
                <Label>BCD</Label>
                <Input placeholder="BCD" />
              </div>
            <div className="max-w-xl">
              <Label>IGST</Label>
              <Input placeholder="IGST" />
            </div>
            <div className="max-w-xl">
              <Label>Comp.cess</Label>
              <Input placeholder="Comp.cess" />
            </div>
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

export default ImportedGoodsForHomeConsumption