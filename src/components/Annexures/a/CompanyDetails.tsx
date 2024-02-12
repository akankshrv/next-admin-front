"use client";
import React, { useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "../../ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import Link from "next/link";
import { GrView } from "react-icons/gr";
import { IoIosRefresh, IoIosAddCircleOutline } from "react-icons/io";
import Authdialog from "./Dialogs/PartADialogs/Authdialog";
import ViewcompanyDialog from "./Dialogs/PartADialogs/ViewcompanyDialog";
import RegisteredOfficeDialog from "./Dialogs/PartADialogs/RegisteredOfficeDialog";
import BankAccountDialog from "./Dialogs/PartADialogs/BankAccountDialog";
import DirectorsDialog from "./Dialogs/PartADialogs/DirectorsDialog";
import ManufacturingDetailsDialog from "./Dialogs/PartADialogs/ManufacturingDetailsDialog";

const formSchema = z.object({
  name: z.string(),
  panNo: z.string(),
  gstin: z.string(),
  iec: z.string(),
  cob: z.string(),
  address: z.string(),
  email: z.string().email("Must be a valid email"),
});

const CompanyDetails = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      panNo: "",
      gstin: "",
      iec: "",
      cob: "",
      address: "",
      email: "",
      //   Address: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <>
      {/* <div className="space-x-10 px-10 my-10 -mb-10">
          <Button className="">Company Details</Button>
          <Button>Warehouse Details</Button>
        </div> */}
      <div className="w-full flex flex-col gap-4 p-10 ">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="w-full p-10 rounded-2xl  bg-black/5"
        >
          <h1 className="text-4xl ">Annexure A - Part 1</h1>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <h1 className="">Company Registration</h1>
            </AccordionTrigger>
            <AccordionContent className="space-y-10 p-10">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50%]">
                      Name of the applicant
                    </TableHead>
                    <TableHead className="w-[15%]">Pan No.</TableHead>
                    <TableHead className="w-[15%]">GSTIN</TableHead>
                    <TableHead className="text-center w-[20%]">
                      Annexures
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  <TableRow>
                    <TableCell>
                      Instorein Technologies Private Limited
                    </TableCell>
                    <TableCell>AAECIO133R1</TableCell>
                    <TableCell>29AAECIO133R1</TableCell>
                    <TableCell className="text-center">
                      <div className="flex flex-col items-center space-y-4 md:flex-row md:items-end md:space-x-4 md:justify-center">
                        <Button>
                          {" "}
                          <IoIosRefresh />{" "}
                        </Button>

                        <ViewcompanyDialog isEdit={false} />
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              {/* <CompanyDetails /> */}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              <h1 className="">Registered Office</h1>
            </AccordionTrigger>
            <AccordionContent className="space-y-10 p-10">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[40%]">Address</TableHead>
                    <TableHead className="w-[15%]">Tel</TableHead>
                    <TableHead className="w-[20%]">Fax</TableHead>
                    <TableHead className="text-center w-[10%]">Email</TableHead>
                    <TableHead className="text-center w-[25%]">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  <TableRow>
                    <TableCell>
                      Singapore GardenSgublala Cross, Kanakapura Main Road,
                      DoddaKalaSandraBangalore NO.19 Karnataka Bengaluru Urban
                    </TableCell>
                    <TableCell>9090090909</TableCell>
                    <TableCell>044 123 4567</TableCell>
                    <TableCell>company@email.com</TableCell>
                    <TableCell className="text-center">
                      <div className="flex flex-col items-center space-y-4 md:flex-row md:items-end md:space-x-4 md:justify-center">
                        <Button>
                          <IoIosRefresh />
                        </Button>

                        <RegisteredOfficeDialog isEdit={false} />
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              <h1 className="">Bank Account Details</h1>
            </AccordionTrigger>
            <AccordionContent className="space-y-10 p-10">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[40%]">Name of the Bank</TableHead>
                    <TableHead>IFSCE Code</TableHead>
                    <TableHead className="w-[25%]">Branch </TableHead>
                    <TableHead className="w-[25%]">Account No.</TableHead>
                    <TableHead className="text-center w-[25%]">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Axis Bank</TableCell>
                    <TableCell>AAECIO133R1</TableCell>
                    <TableCell>Bangalore</TableCell>
                    <TableCell>87421590634218</TableCell>
                    <TableCell className="text-center">
                      <div className="flex flex-col items-center space-y-4 md:flex-row md:items-end md:space-x-4 md:justify-center">
                        <Button>
                          <IoIosRefresh />
                        </Button>

                        <BankAccountDialog isEdit={false} />
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <h1 className="">Directors</h1>
            </AccordionTrigger>

            <AccordionContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50%]">
                      Name of the Director
                    </TableHead>
                    <TableHead className="w-[50%]">DTO No </TableHead>

                    <TableHead className="text-center w-[25%]">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  <TableRow>
                    <TableCell>Puneeth Rajkumar</TableCell>
                    <TableCell>901993992</TableCell>
                    <TableCell className="text-center">
                      <div className="flex flex-col items-center space-y-4 md:flex-row md:items-end md:space-x-4 md:justify-center">
                        <Button>
                          <IoIosRefresh />
                        </Button>
                        <DirectorsDialog isEdit={false} />
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              <h1 className="">Authorized Person</h1>
            </AccordionTrigger>

            <AccordionContent className="space-y-5 p-10">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50%]">
                      Name of the Authorized Person
                    </TableHead>
                    <TableHead className="w-[50%]">Designation</TableHead>

                    <TableHead className="text-center w-[25%]">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Mr. Puneeth Rajkumar</TableCell>
                    <TableCell>CEO</TableCell>
                    <TableCell className="text-center">
                      <div className="flex flex-col items-center space-y-4 md:flex-row md:items-end md:space-x-4 md:justify-center">
                        <Button>
                          <IoIosRefresh />
                        </Button>

                        <Authdialog isEdit={false} />
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>
              <h1 className="">Manufacturing Details</h1>
            </AccordionTrigger>
            <AccordionContent className="space-y-3 p-2 mb-1">
              <div className="flex justify-end">
                <ManufacturingDetailsDialog isEdit={true} />
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[15%]">Location</TableHead>
                    <TableHead className="w-[25%]">Facility Name</TableHead>
                    <TableHead className="w-[20%]">
                      Goods Manufactured
                    </TableHead>
                    <TableHead className="w-[20%]">InCharge</TableHead>
                    <TableHead className="w-[25%] text-center">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Bangalore</TableCell>
                    <TableCell>
                      Instorein Technologies Private Limited
                    </TableCell>
                    <TableCell>500</TableCell>
                    <TableCell>Subramaniah Reddy</TableCell>
                    <TableCell>
                      <div className="flex flex-col items-center space-y-4 md:flex-row md:items-end md:space-x-4 md:justify-center">
                        <Button>
                          <IoIosRefresh />
                        </Button>
                        <ManufacturingDetailsDialog isEdit={false} />
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default CompanyDetails;
