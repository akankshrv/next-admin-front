"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Props } from "@/index";
import React, { useState } from "react";
import SignatureComponent from "./SignatureComponent";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";
import { SelectTrigger } from "@radix-ui/react-select";

type Role = "customs" | "warehouse" | "licensee";

export default function PartB() {
  const [selectedOption, setSelectedOption] = useState("Yes");
  const [role, setRole] = useState<Role>("customs");
  const handleToggle = () => {
    setSelectedOption(selectedOption === "Yes" ? "No" : "Yes");
  };
  const handleRoleChange = (event) => {
    setRole(event);
  };
  return (
    <>
      <div className="w-full flex flex-col gap-4 p-10 ">
        <div className="w-full p-10 rounded-md bg-black/10">
          <h1>Part B</h1>
          <p>To be filled by the recipient</p>

          <div className="flex gap-2 md:flex-col lg:flex-row">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="w-full p-1 rounded-lg pl-5 grid grid-cols-2 gap-4"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="flex justify-between">
                  <h2>
                    1. Date and Time of reciept at the warehouse or customs
                    Station
                  </h2>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col pr-10">
                    <div className="flex flex-col border border-gray-300 w-[800px] space-y-2 p-1 gap-1 border-none ">
                      {/* Add a toggle select between options warehouse and customs station */}
                      <div className="flex flex-row items-center">
                        <Label className="label-primary">
                          Warehouse/Customs Station:
                        </Label>
                        <div className="flex flex-1">
                          <select
                            title="goods redirected to "
                            className="border border-gray-300 rounded-md px-28 p-2"
                          >
                            <option value="warehouse">Warehouse</option>
                            <option value="customsStation">
                              Customs Station
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="flex flex-row items-center">
                        <Label className="label-primary">
                          Date of Reciept:
                        </Label>
                        <div className="flex-1">
                          <Input type="date" />
                        </div>
                      </div>
                      <div className="flex flex-row items-center">
                        <Label className="label-primary">Time of Reciept</Label>
                        <div className="flex-1">
                          <Input type="time" />
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-1">
                <AccordionTrigger className="flex justify-between">
                  <h2>
                    2. Check the registration number of the vehicle in which the
                    goods was delievered:
                  </h2>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col pr-10">
                    <div className="flex flex-col border border-gray-300 w-[800px] space-y-2 p-1 gap-1 border-none ">
                      {/* Add a toggle select between options warehouse and customs station */}

                      <div className="flex flex-row items-center">
                        <Label className="label-primary">
                          Registration No. of the Vehicle:
                        </Label>
                        <div className="flex-1">KA-01-AB-1234</div>
                      </div>
                      <div className="flex flex-row items-center">
                        <Label className="label-primary">
                          Is the registration no. matching the above
                          registration number:
                        </Label>

                        <div className="flex-1 flex gap-4 w-96 items-center">
                          <Button onClick={handleToggle}>
                            {selectedOption}
                          </Button>
                          <div>
                            {selectedOption === "No" && (
                              <Textarea
                                className="w-96"
                                placeholder="Please provide the a detailed summary on why it was not "
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="flex justify-between">
                  <h2>3. Was the One time Lock Intact ?</h2>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col pr-10">
                    <div className="flex flex-col border border-gray-300 w-[800px] space-y-2 p-1 gap-1 border-none ">
                      {/* Add a toggle select between options warehouse and customs station */}

                      <div className="flex flex-row items-center">
                        <Label className="label-primary">
                          Registration No. of the Vehicle:
                        </Label>
                        <div className="flex-1">KA-01-AB-1234</div>
                      </div>
                      <div className="flex flex-row items-center">
                        <Label className="label-primary">
                          Is the registration no. matching the above
                          registration number:
                        </Label>

                        <div className="flex-1 flex gap-4 w-96 items-center">
                          <Button onClick={handleToggle}>
                            {selectedOption}
                          </Button>
                          <div>
                            {selectedOption === "No" && (
                              <Textarea
                                className="w-96"
                                placeholder="Please provide the a detailed summary on why it was not "
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <h1>Signed by</h1>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="">
                    {/* <select
                    
                      title="signature"
                      value={role}
                      onChange={handleRoleChange}
                    >
                      <option value="customs">Customs Officer</option>
                      <option value="warehouse">
                        Warehouse Keeper or Licensee
                      </option>
                    </select> */}
                    <Select onValueChange={handleRoleChange} value={role}>
                      <SelectTrigger className="w-[180px]">
                        <Button className="w-48">
                          <SelectValue
                            placeholder="Role"
                            onChange={handleRoleChange}
                          />
                        </Button>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="customs">Customs</SelectItem>
                        <SelectItem value="warehouse">
                          Warehouse Keeper
                        </SelectItem>
                        <SelectItem value="licensee">Licensee</SelectItem>
                      </SelectContent>
                    </Select>
                    <SignatureComponent role={role} />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
