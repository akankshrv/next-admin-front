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
import { Label } from "@radix-ui/react-label";
import React from "react";

const RecieptsForm = () => {
  return (
    <>
      <Card className="mx-20 my-10">
        <CardHeader>
          <CardTitle>
            <h1 className="text-2xl">Receipts(import)</h1>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form className="">
            <div className="flex">
              <div className="max-w-xl">

              <Label>Bill of Entry No:</Label>
              <Input placeholder="bill no" />
              </div>

              <div className="max-w-xl mx-10">

              <Label>Date</Label>
              <Input type="date" />
              </div>
            </div>

            <div className="max-w-xl">
              <Label>Customs Station of import</Label>
              <Input placeholder="Customs Station of import" />
            </div>

            <div className="max-w-xl">
              <Label>Details of Bond:</Label>
              <Input placeholder="Details of Bond" />
            </div>
            <div className="max-w-xl">
              <Label>Details of Insurance:</Label>
              <Input placeholder="Details of Insurance" />
            </div>

            <div className="max-w-xl">
              <Label>Description of goods</Label>
              <Input placeholder="Description of goods" />
            </div>

            <div className="flex p-px">
              <div className="max-w-xl">
              <Label>Invoice No:</Label>
              <Input placeholder="Invoice No" />
              </div>
              <div className="max-w-xl mx-10"> 

              <Label>Date</Label>
              <Input type="date" />
              </div>
            </div>

            <div className="max-w-xl p-px">
              <Label>Quantity with UQ</Label>
              <Input placeholder="Quantity with UQ" />
            </div>

            <div className="max-w-xl">
              <Label>Assessable Value</Label>
              <Input placeholder="assessable value" />
            </div>

            <div className="max-w-xl">
              <p>Duty assessed</p>
              <Label>BCD:</Label>
              <Input placeholder="BCD" />
            </div>

            <div className="max-w-xl">
              <Label>IGST:</Label>
              <Input placeholder="IGST" />
            </div>

            <div className="max-w-xl">
              <Label>Comp cess:</Label>
              <Input placeholder="comp. cess" />
            </div>

            <div className="max-w-xl">
              <Label>Registration No. of means of transport:</Label>
              <Input placeholder="registration no." />
            </div>

            <div className="max-w-xl">
              <Label>One-time-Lock no:</Label>
              <Input placeholder="lock no." />
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

export default RecieptsForm;
