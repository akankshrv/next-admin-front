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
import { Textarea } from "@/components/ui/textarea";

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
          <form>
            <div>
              <Accordion
                type="single"
                collapsible
                defaultValue="item1"
                className="gap-10"
              >
                <AccordionItem value="item1" className="">
                  <AccordionTrigger className="font-semibold text-2xl">
                    Part I
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-5 p-5">
                    <div className="flex gap-2">
                      <div className="flex-1">
                        <Label>Bill of Entry No:</Label>
                        <Input placeholder="bill no" />
                      </div>
                      <div className="flex-1">
                        <Label>Date</Label>
                        <Input type="date" />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1">
                        <Label>Customs Station of import</Label>
                        <Input placeholder="Customs Station of import" />
                      </div>
                      <div className="flex-1">
                        <Label>Details of Bond:</Label>
                        <Input placeholder="Details of Bond" />
                      </div>
                    </div>
                    <div className="flex gap-5">
                      <div className="flex-1">
                        <Label>Details of Insurance:</Label>
                        <Input placeholder="Details of Insurance" />
                      </div>

                      <div className="flex flex-1 gap-2">
                        <div className="flex-1">
                          <Label>Invoice No:</Label>
                          <Input placeholder="Invoice No" />
                        </div>
                        <div className="flex-1">
                          <Label>Date</Label>
                          <Input type="date" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <Label>Description of goods</Label>
                      <Textarea placeholder="Description of goods" />
                    </div>

                    <div className="flex gap-2">
                      <div className="flex-1">
                        <Label>Quantity with UQ</Label>
                        <Input placeholder="Quantity with UQ" />
                      </div>
                      <div className="flex-1">
                        <Label>Assessable Value</Label>
                        <Input placeholder="assessable value" />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item2">
                  <AccordionTrigger className="text-2xl font-semibold">
                    Part II
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-5 p-3">
                    <p className="text-xl font-extralight">Duty Assessed</p>
                    <div className="flex gap-2">
                      <div className="flex-1">
                        <Label>BCD:</Label>
                        <Input placeholder="BCD" />
                      </div>

                      <div className="flex-1">
                        <Label>IGST:</Label>
                        <Input placeholder="IGST" />
                      </div>
                      <div className="flex-1">
                        <Label>Comp cess:</Label>
                        <Input placeholder="comp. cess" />
                      </div>
                    </div>
                    <hr />
                    <div className="flex gap-2">
                      <div className="flex-1">
                        <Label>Registration No. of means of transport:</Label>
                        <Input placeholder="registration no." />
                      </div>
                      <div className="flex-1">
                        <Label>One-time-Lock no:</Label>
                        <Input placeholder="lock no." />
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <div className="flex-1">
                        <Label>Date</Label>
                        <Input type="date" />
                      </div>

                      <div className="flex-1 ">
                        <Label>Time of receipt at the warehouse</Label>
                        <Input type="time"  />
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
