"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const ImportedGoodsClearanceForExport = () => {
  return (
    <>
    <Card className="max-w-4xl mx-auto my-10 bg-gray-100 p-20">
        <CardHeader>
          <CardTitle>
            <h1 className="text-2xl">
              Imported goods clearance for export
            </h1>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form className="">
            <div className="flex gap-2 max-w-xl">
              <div className="flex-1">
                <Label>Shipping Bill No:</Label>
                <Input placeholder="Shipping Bill No" />
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

            <div>
              <p>Duty involved:</p>
              <div className="max-w-xl">
                <Label>BCD</Label>
                <Input placeholder="BCD" />
              </div>
            </div>
            <div>
              <Label>IGST</Label>
              <Input placeholder="IGST" />
            </div>
            <div>
              <Label>Comp.cess</Label>
              <Input placeholder="Comp.cess" />
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

export default ImportedGoodsClearanceForExport