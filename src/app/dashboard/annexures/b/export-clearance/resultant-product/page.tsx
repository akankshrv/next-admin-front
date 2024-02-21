"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import React from "react";

const ResultantProductExport = () => {
  return (
    <>
      <Card className="max-w-4xl mx-auto my-10 bg-gray-100 p-20">
        <CardHeader>
          <CardTitle>
            <h1 className="text-2xl">
              Resultant Products(Clearance For Export)
            </h1>
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
                <Input type="time" />
              </div>
            </div>
            <div className="flex gap-2 max-w-xl">
              <div className="flex-1 ">
                <Label>Shipping Bill No:</Label>
                <Input placeholder="Shipping Bill No." />
              </div>
              <div className="flex-1">
                <Label>Date:</Label>
                <Input type="date" />
              </div>
            </div>

            <div className="flex gap-2 max-w-xl">
              <div className="flex-1 ">
                <Label>GST Invoice No:</Label>
                <Input placeholder="GST Invoice No." />
              </div>
              <div className="flex-1">
                <Label>Date:</Label>
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

            <div className="max-w-xl">
              <Label>Export duty:</Label>
              <Input placeholder="Export duty" />
            </div>
            <div>
              <p>Tax paid(if applicable):</p>
              <div className="max-w-xl">
                <Label>IGST</Label>
                <Input placeholder="IGST" />
              </div>
            </div>
            <div>
              <Label>Comp.cess</Label>
              <Input placeholder="Comp.cess" />
            </div>
            <div>
              <p>Quantinty of warehoused goods contained in so much of the resultant products exported:</p>
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
            </div>
            <div>
              <p>Duty involved:</p>
              <div className="max-w-xl">
                <Label>BCD</Label>
                <Input placeholder="BCD" />
              </div>
              <div className="max-w-xl">
                <Label>IGST</Label>
                <Input placeholder="IGST" />
              </div>
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
  );
};

export default ResultantProductExport;
