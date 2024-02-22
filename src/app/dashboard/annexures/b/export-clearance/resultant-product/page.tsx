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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Textarea } from "@/components/ui/textarea";

const ResultantProductExport = () => {
  return (
    <>
      <Card className="max-w-4xl mx-auto my-5 bg-gray-100 p-5">
        <CardHeader>
          <CardTitle>
            <h1 className="text-2xl">
              Resultant Products(Clearance For Export)
            </h1>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form className="">
            <Accordion type="single" collapsible className="gap-10">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h1 className="font-semibold text-2xl">Part I</h1>
                </AccordionTrigger>
                <AccordionContent className="space-y-5 p-3">
                  <p className="tet-xl font-extralight">
                    Resultant Product Exported
                  </p>
                  <div className="flex gap-2">
                    <div className="flex-1 space-y-3">
                      <Label>Date</Label>
                      <Input type="date" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <Label>Time of removal:</Label>
                      <Input type="time" />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1 space-y-3">
                      <Label>Shipping Bill No:</Label>
                      <Input placeholder="Shipping Bill No." />
                    </div>
                    <div className="flex-1 space-y-3">
                      <Label>Date:</Label>
                      <Input type="date" />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1 space-y-3">
                      <Label>GST Invoice No:</Label>
                      <Input placeholder="GST Invoice No." />
                    </div>
                    <div className="flex-1 space-y-3">
                      <Label>Date:</Label>
                      <Input type="date" />
                    </div>
                  </div>

                  <div>
                    <Label>Description of Goods</Label>
                    <Textarea placeholder="Description of goods" />
                  </div>

                  <div className="flex gap-2">
                    <div className="flex-1 space-y-3">
                      <Label>Quality with UQC:</Label>
                      <Input placeholder="Quality with UQC" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <Label>Assessable Value:</Label>
                      <Input placeholder="Assessable Value" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <Label>Export duty:</Label>
                      <Input placeholder="Export duty" />
                    </div>
                  </div>
                  <p className="text-xl font-extralight">
                    Tax paid (if applicable) (IGST,Comp.cess,etc.):
                  </p>

                  <div>
                    <div className="flex gap-2">
                      <div className="flex-1 space-y-3">
                        <Label>IGST</Label>
                        <Input placeholder="IGST" />
                      </div>
                      <div className="flex-1 space-y-3">
                        <Label>Comp.cess</Label>
                        <Input placeholder="Comp.cess" />
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <h1 className="font-semibold text-2xl">Part II</h1>
                </AccordionTrigger>

                <AccordionContent className="space-y-5 p-3">
                  <p className="text-xl font-extralight">
                    Quantinty of warehoused goods contained in so much of the
                    resultant products exported:
                  </p>

                  <div className="space-y-3">
                    <Label>Description of goods</Label>
                    <Textarea placeholder="Description of goods" />
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <Label>Quality with UQC:</Label>
                      <Input placeholder="Quality with UQC" />
                    </div>
                    <div className="flex-1">
                      <Label>Assessable Value:</Label>
                      <Input placeholder="Assessable Value" />
                    </div>
                  </div>

                  <p className="text-xl font-extralight">Duty involved:</p>
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <Label>BCD</Label>
                      <Input placeholder="BCD" />
                    </div>
                    <div className="flex-1">
                      <Label>IGST</Label>
                      <Input placeholder="IGST" />
                    </div>
                    <div className="flex-1">
                      <Label>Comp.cess</Label>
                      <Input placeholder="Comp.cess" />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div>
              <div className="max-w-xl"></div>
              <div className="max-w-xl"></div>
            </div>
            <div></div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-start">
          <Button className="w-96 ">Save</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default ResultantProductExport;
