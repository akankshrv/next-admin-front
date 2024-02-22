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
import { Textarea } from "@/components/ui/textarea";

const ImportedGoodsClearanceForExport = () => {
  return (
    <>
      <Card className="max-w-4xl mx-auto my-5 bg-gray-100 p-5">
        <CardHeader>
          <CardTitle>
            <h1 className="text-2xl">Imported goods clearance for export</h1>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form className="space-y-5 p-3">
            <div className="flex gap-2">
              <div className="flex-1 space-y-3 space-y-3">
                <Label>Shipping Bill No:</Label>
                <Input placeholder="Shipping Bill No" />
              </div>
              <div className="flex-1 space-y-3 space-y-3">
                <Label>Date</Label>
                <Input type="date" />
              </div>
            </div>
            <div>
              <Label>Description of goods</Label>
              <Textarea placeholder="Description of goods" />
            </div>

            <div className="flex gap-2">
              <div className="flex-1 space-y-3 space-y-3">
                <Label>Quality with UQC:</Label>
                <Input placeholder="Quality with UQC" />
              </div>
              <div className="flex-1 space-y-3 space-y-3">
                <Label>Assessable Value:</Label>
                <Input placeholder="Assessable Value" />
              </div>
            </div>

            <p className="text-xl font-extralight">Duty involved:</p>

            <div className="flex gap-2">
              <div className="flex-1 space-y-3">
                <Label>BCD</Label>
                <Input placeholder="BCD" />
              </div>
              <div className="flex-1 space-y-3">
                <Label>IGST</Label>
                <Input placeholder="IGST" />
              </div>
              <div className="flex-1 space-y-3 ">
                <Label>Comp.cess</Label>
                <Input placeholder="Comp.cess" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-start">
          <Button className="w-96 ">Save</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default ImportedGoodsClearanceForExport;
