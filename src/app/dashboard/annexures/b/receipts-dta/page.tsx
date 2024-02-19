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
import { Label } from "@radix-ui/react-label";
import React from "react";
import { Button } from "@/components/ui/button";

const RecieptsDtaForm = () => {
  return (
    <>
      <Card className="mx-20 my-10">
        <CardHeader>
          <CardTitle>
            <h1 className="text-2xl">Receipts(dta)</h1>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form className="">
            <div className="flex">
              <div className="max-w-xl">
                <Label>GST Invoice No:</Label>
                <Input placeholder="GST Invoice no" />
              </div>

              <div className="max-w-xl mx-10">
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
              <Label>Value:</Label>
              <Input placeholder="value" />
            </div>

            <div className="max-w-xl">
              <p>Tax paid</p>
              <Label>GST:</Label>
              <Input placeholder="GST" />
            </div>

            <div className="max-w-xl">
              <Label>Comp cess:</Label>
              <Input placeholder="comp. cess" />
            </div>

            <div className="max-w-xl">
              <Label>E-way bill number(if applicable):</Label>
              <Input placeholder="bill no." />
            </div>

            <div className="flex ">
              <div className="max-w-xl">
                <Label>Date</Label>
                <Input type="date" />
              </div>

              <div className="mx-10 max-w-xl ">
                <Label>Time of receipt at the warehouse</Label>
                <Input type="time" />
              </div>
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

export default RecieptsDtaForm;
