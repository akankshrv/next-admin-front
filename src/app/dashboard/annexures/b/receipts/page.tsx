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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const RecieptsForm = () => {
  return (
    <>
      <Card className="max-w-4xl mx-auto my-5 bg-gray-100 p-5">
        <CardHeader>
          <CardTitle>
            <h1 className="text-3xl">Receipts(import)</h1>
          </CardTitle>
        </CardHeader>

        <CardContent className="mx-auto">
          <form >
            <div >
              <Accordion
                type="single"
                collapsible
                className="gap-10 "
              >
                <AccordionItem value="item1" className="w-[700px]">
                  <AccordionTrigger className="font-semibold text-2xl">
                    Part I
                  </AccordionTrigger>
                  <AccordionContent className="flex w-[700px] flex-col gap-5">
                    <div className="flex gap-10">
                      <div>
                        <Label>Bill of Entry No:</Label>
                        <Input placeholder="bill no" />
                      </div>
                      <div>
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
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item2" className="w-[700px]">
                  <AccordionTrigger className="text-2xl font-semibold">
                    Part II : Duty Assessed
                  </AccordionTrigger>
                  <AccordionContent className="flex w-[700px] flex-col gap-5">
                    <div className="max-w-xl">
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
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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

export default RecieptsForm;
