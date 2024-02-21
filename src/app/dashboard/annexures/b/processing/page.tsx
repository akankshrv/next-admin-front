"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import React from "react";

const ProcessingForm = () => {
  return (
    <>
      <Card className="max-w-4xl mx-auto my-5 bg-gray-100 p-5">
        <CardHeader>
          <CardTitle>
            <h1 className="text-3xl">Processing</h1>
          </CardTitle>
        </CardHeader>

        <CardContent className="mx-auto">
          <form>
            <Accordion type="single" collapsible className="gap-10" defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h1 className="font-semibold text-2xl">Part I</h1>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <p className="text-xl font-extralight">
                      Goods issued for manufacturing or other operations
                    </p>
                    <div className="flex gap-2">
                      <div className="flex-1">
                        <Label>Date of Goods issued</Label>
                        <Input placeholder="enter value" />
                      </div>
                      <div className="flex-1">
                        <Label>Goods Quality with UQC:</Label>
                        <Input placeholder="Goods Quality with UQC" />
                      </div>
                      <div className="flex-1">
                        <Label>Value:</Label>
                        <Input placeholder="value" />
                      </div>
                    </div>
                    <div>
                      <Label>Description of goods</Label>
                      <Textarea placeholder="Description of goods" />
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1">
                        <Label>Delivery Challan No.</Label>
                        <Input placeholder="value" />
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <h1 className="font-semibold text-2xl">Part II</h1>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <p className="text-xl font-extralight pt-5">
                      Removal for job-work
                    </p>

                    <div className="flex gap-2 flex-1 ">
                      <div className="flex-1">
                        <Label>Date</Label>
                        <Input type="date" />
                      </div>
                      <div className="flex-1">
                        <Label>Time of removal</Label>
                        <Input type="time" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <Label>Description of goods</Label>
                      <Textarea placeholder="Description of goods" />
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
                    <div className="border p-5 m-2">
                      <p className="text-xl font-extralight">
                        Details of Job worker
                      </p>
                      <div className=" flex-1 gap-2">
                        <div className="flex gap-2">
                          <div className="flex-1">
                            <Label>Name:</Label>
                            <Input placeholder="name" />
                          </div>
                          <div className="flex-1">
                            <Label>GSTIN(if applicable)</Label>
                            <Input type="GSTIN" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <Label>Address:</Label>
                          <Textarea placeholder="address" />
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <h1 className="font-semibold text-2xl">Part III</h1>
                </AccordionTrigger>
                <AccordionContent>
                  <div>
                    <p className="text-xl font-extralight">
                      Returns to unit after job work
                    </p>
                    <div className="flex gap-2 flex-1 ">
                      <div className="flex-1">
                        <Label>Date</Label>
                        <Input type="date" />
                      </div>
                      <div className="flex-1">
                        <Label>Time of removal</Label>
                        <Input type="time" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <Label>Description of goods</Label>
                      <Textarea placeholder="Description of goods" />
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
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>Save</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default ProcessingForm;
