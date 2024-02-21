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
import { Textarea } from "@/components/ui/textarea";

const ReturnsToUnitForm = () => {
  return (
    <>
      <Card className="max-w-4xl mx-auto my-5 bg-gray-100 p-5">
        <CardHeader>
          <CardTitle>
            <h1 className="text-2xl">Returns to unit after job work</h1>
          </CardTitle>
        </CardHeader>

        <CardContent className="mx-auto">
          <form className="space-y-4">
            <div className="flex gap-2">
              <div className="flex-1 ">
                <Label>Date</Label>
                <Input type="date" />
              </div>
              <div className="flex-1">
                <Label>Time of return:</Label>
                <Input type="time" />
              </div>
            </div>

            <div className="flex-1 space-y-2">
              <Label>Description of goods</Label>
              <Textarea className="pb-20" placeholder="Description of goods" />
            </div>
            <div className="flex gap-2 pt-1">
              <div className="flex-1">
                <Label>Quality with UQC:</Label>
                <Input placeholder="Quality with UQC" />
              </div>
              <div className="flex-1">
                <Label>Value:</Label>
                <Input placeholder="value" />
              </div>

              <div className="flex-1">
                <Label>Delivery Challan No:</Label>
                <Input placeholder="Delivery Challan No" />
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

export default ReturnsToUnitForm;
