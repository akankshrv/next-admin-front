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

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const RecieptsDtaForm = () => {
  return (
    <>
      <Card className="max-w-4xl mx-auto my-5 bg-gray-100 p-5">
        <CardHeader>
          <CardTitle>
            <h1 className="text-3xl">Receipts(dta)</h1>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form className="space-y-5">
            <Accordion
              type="single"
              defaultValue="item-1"
              collapsible
              className="gap-10"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h2 className="font-semibold text-2xl">Part I</h2>
                </AccordionTrigger>
                <AccordionContent className="space-y-5 p-3">
                  <div className="flex gap-2">
                    <div className="flex-1 space-y-3">
                      <Label>GST Invoice No:</Label>
                      <Input placeholder="GST Invoice no" />
                    </div>

                    <div className="flex-1 space-y-3">
                      <Label>Date</Label>
                      <Input type="date" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>Description of goods</Label>
                    <Textarea placeholder="Description of goods" />
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1 space-y-3">
                      <Label>Quality with UQC:</Label>
                      <Input placeholder="Quality with UQC" />
                    </div>

                    <div className="flex-1 space-y-3">
                      <Label>Value:</Label>
                      <Input placeholder="value" />
                    </div>
                  </div>
                  <hr />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <h2 className="font-semibold text-2xl">Part II</h2>
                </AccordionTrigger>
                <AccordionContent className="space-y-5">
                  <p className="text-2xl font-extralight">Tax Paid</p>
                  <div className="flex gap-2">
                    <div className="flex-1 space-y-3">
                      <Label>GST:</Label>
                      <Input placeholder="GST" />
                    </div>

                    <div className="flex-1 space-y-3">
                      <Label>Comp cess:</Label>
                      <Input placeholder="comp. cess" />
                    </div>
                  </div>

                  <hr />
                  <div className="flex gap-2">
                    <div className="flex-1 space-y-3">
                      <Label>E-way bill number(if applicable):</Label>
                      <Input placeholder="bill no." />
                    </div>
                    <div className="flex-1 space-y-3">
                      <Label>Valid till</Label>
                      <Input type="date" />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="flex-1 space-y-3">
                      <Label>Date</Label> space-y-3
                      <Input type="date" />
                    </div>

                    <div className="flex-1 space-y-3 ">
                      <Label>Time of receipt at the warehouse</Label>
                      <Input type="time" />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </form>
        </CardContent>
        <CardFooter className="flex justify-start">
          <Button className="w-96 ">Save</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default RecieptsDtaForm;
