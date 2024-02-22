import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const ResultantProductForHomeConsumption = () => {
  return (
   <>
   <Card className="max-w-4xl mx-auto my-10 bg-gray-100 p-20">
        <CardHeader>
          <CardTitle>
            <h1 className="text-2xl">Resultant product(clearance for home consumption)</h1>
          </CardTitle>
          <CardContent>
            <form className="">
              <div className="space-y-3">
                <h2 className="text-xl pt-3">
                  Resultant product cleared for home consumption
                </h2>
                <div className="flex max-w-3xl gap-3">
                  <div className="flex-1">
                    <Label>Date of removal:</Label>
                    <Input type="date" />
                  </div>
                  <div className="flex-1">
                    <Label>Time of removal:</Label>
                    <Input type="time" />
                  </div>
                </div>
                <div className="flex max-w-3xl gap-3">
                  <div className="flex-1">
                    <Label>GST Invoice No.</Label>
                    <Input placeholder='GST Invoice No.' />
                  </div>
                  <div className="flex-1">
                    <Label>Date of removal:</Label>
                    <Input type="date" />
                  </div>
                </div>
              </div>

              
              <div className="space-y-3">
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
                    <Label>Value:</Label>
                    <Input placeholder="Value" />
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h2 className="text-xl pt-3">Tax paid</h2>
                <div className="flex max-w-3xl gap-3">
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
              {/*part 2 */}
              <div className="space-y-3">
                <h2 className="text-xl pt-5">
                Warehoused goods contained in so much of the resultant products cleared for home consumption
                </h2>
                <div className="flex max-w-3xl gap-3">
                  <div className="flex-1">
                    <Label>Bill of Entry No.:</Label>
                    <Input placeholder="Bill of Entry No" />
                  </div>
                  
                  <div className="flex-1">
                    <Label>Date:</Label>
                    <Input type='date' />
                  </div>
                </div>
                <div className="flex max-w-3xl gap-3">
                  <div className="flex-1">
                    <Label>Description of Goods:</Label>
                    <Input placeholder="escription of Goods" />
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
                <h2 className="text-xl pt-3">Duty involved</h2>
                <div className="flex max-w-3xl gap-3">
                  <div className="flex-1">
                    <Label>BCD</Label>
                    <Input placeholder="BCD" />
                  </div>
                  <div className="flex-1">
                    <Label>IGST</Label>
                    <Input placeholder="IGST" />
                  </div>
                  <div className="flex-1">
                    <Label>Comp.cess</Label>
                    <Input placeholder="Comp.cess" />
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
        </CardHeader>
      </Card>
   </>
  )
}

export default ResultantProductForHomeConsumption