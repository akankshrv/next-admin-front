import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const TreatmentOfWasteExport = () => {
  return (
    <>
      <Card className="max-w-4xl mx-auto my-10 bg-gray-100 p-20">
        <CardHeader>
          <CardTitle>
            <h1 className="text-2xl">Treatment of waste for export</h1>
          </CardTitle>
          <CardContent>
            <form className="">
              <div className="space-y-3">
                <h2 className="text-xl pt-3">
                  Quantity of waste or refuse destroyed
                </h2>
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
                <h2 className="text-xl pt-3">Duty invloved</h2>
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
              <div className="space-y-3">
                <h2 className="text-xl pt-3">Duty paid on waste or refuse</h2>
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
                <h2 className="text-xl pt-3">Details of Duty paid</h2>
                <div className="flex max-w-3xl gap-3">
                  <div className="flex-1">
                    <Label>Challan No.</Label>
                    <Input placeholder="Challan No." />
                  </div>
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
              {/*part 2 */}
              <div className="space-y-3">
                <h2 className="text-xl pt-3">
                  Duty to be remitted on the quantity of warehoused goods
                  conatained in so much of the waste or refuse(destroyed or
                  cleared as such)
                </h2>
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
  );
};

export default TreatmentOfWasteExport;
