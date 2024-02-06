"use client";
import React from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CompanyDetails from "@/components/Annexures/CompanyDetails";
import { Textarea } from "../ui/textarea";
import { Card, CardHeader } from "../ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import Link from "next/link";

const formSchema = z.object({
  name: z.string(),
  panNo: z.string(),
  gstin: z.string(),
  iec: z.string(),
  cob: z.string(),
  address: z.string(),
  email: z.string().email("Must be a valid email"),
});
const FormAnnexureA = () => {
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
      <Card className="flex flex-col justify-between max-w-7xl pb-20 mx-auto mt-10 mb-10 ">
        <h1 className="text-center p-10">Annexure A</h1>

        <div className="px-14 w-full flex flex-col gap-4 pb-10">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="w-full"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h1 className="text-2xl font-semibold">Company Registration</h1>
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
                  <TableRow>
                    <TableCell>
                      Instorein Technologies Private Limited
                    </TableCell>
                    <TableCell>AAECIO133R1</TableCell>
                    <TableCell>29AAECIO133R1</TableCell>
                    <TableCell className="text-center">
                      <div className="flex flex-col items-center space-y-4 md:flex-row md:items-end md:space-x-4 md:justify-center">
                        <Link
                          href="/dashboard/annexures/a/editviewcompany"
                          passHref
                        >
                          <Button> Edit</Button>
                        </Link>
                        <Link
                          href="/dashboard/annexures/a/viewcompany"
                          passHref
                        >
                          <Button>View</Button>
                        </Link>
                      </div>
                    </TableCell>
                  </TableRow>
                </Table>

                {/* <CompanyDetails /> */}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                <h1 className="text-2xl font-semibold">Registered Office</h1>
              </AccordionTrigger>
              <AccordionContent className="space-y-10 p-10">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[40%]">Address</TableHead>
                      <TableHead className="w-[15%]">Tel</TableHead>
                      <TableHead className="w-[20%]">Fax</TableHead>
                      <TableHead className="text-center w-[10%]">
                        Email
                      </TableHead>
                      <TableHead className="text-center w-[25%]">
                        Actions
                      </TableHead>
                    </TableRow>
                  </TableHeader>
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
                        <Link href="/dashboard/annexures/a/editregisteredoffice">
                          <Button>Edit</Button>
                        </Link>
                        <Link
                          href="/dashboard/annexures/a/registeredoffice"
                          passHref
                        >
                          <Button>View</Button>
                        </Link>
                      </div>
                    </TableCell>
                  </TableRow>
                </Table>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                <h1 className="text-2xl font-semibold">Bank Account Details</h1>
              </AccordionTrigger>
              <AccordionContent className="space-y-10 p-10">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[50%]">
                        Name of the Bank
                      </TableHead>
                      <TableHead className="w-[25%]">Branch </TableHead>
                      <TableHead className="w-[25%]">Account No.</TableHead>
                      <TableHead className="text-center w-[25%]">
                        Actions
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableRow>
                    <TableCell>Axis Bank</TableCell>
                    <TableCell>Bangalore</TableCell>
                    <TableCell>87421590634218</TableCell>
                    <TableCell className="text-center">
                      <div className="flex flex-col items-center space-y-4 md:flex-row md:items-end md:space-x-4 md:justify-center">
                        <Link href="/dashboard/annexures/a/editbankaccountdetails">
                          <Button>Edit</Button>
                        </Link>
                        <Link
                          href="/dashboard/annexures/a/bankaccountdetails"
                          passHref
                        >
                          <Button>View</Button>
                        </Link>
                      </div>
                    </TableCell>
                  </TableRow>
                </Table>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <h1 className="text-2xl font-semibold">Directors</h1>
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
                  <TableRow>
                    <TableCell>Puneeth Rajkumar</TableCell>
                    <TableCell>901993992</TableCell>
                    <TableCell className="text-center">
                      <div className="flex flex-col items-center space-y-4 md:flex-row md:items-end md:space-x-4 md:justify-center">
                        <Link href="/dashboard/annexures/a/editdirectors">
                          <Button>Edit</Button>
                        </Link>
                        <Link href="/dashboard/annexures/a/directors" passHref>
                          <Button>View</Button>
                        </Link>
                      </div>
                    </TableCell>
                  </TableRow>
                </Table>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                <h1 className="text-2xl font-semibold">Authorized Person</h1>
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
                  <TableRow>
                    <TableCell>Mr. Authorized Person</TableCell>
                    <TableCell>Director</TableCell>
                    <TableCell className="text-center">
                      <div className="flex flex-col items-center space-y-4 md:flex-row md:items-end md:space-x-4 md:justify-center">
                        <Link
                          href="/dashboard/annexures/a/editauthorizedperson"
                          passHref
                        >
                          <Button>Edit</Button>
                        </Link>
                        <Link
                          href="/dashboard/annexures/a/authorizedperson"
                          passHref
                        >
                          <Button>View</Button>
                        </Link>
                      </div>
                    </TableCell>
                  </TableRow>
                </Table>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                <h1 className="text-2xl font-semibold">
                  Manufacturing Details
                </h1>
              </AccordionTrigger>
              <AccordionContent className="space-y-3 p-2 mb-1">
                <div className="flex justify-end">
                  <Button className="">Add</Button>
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
                  <TableRow>
                    <TableCell>Bangalore</TableCell>
                    <TableCell>
                      Instorein Technologies Private Limited
                    </TableCell>
                    <TableCell>500</TableCell>
                    <TableCell>Subramaniah Reddy</TableCell>
                    <TableCell>
                      <div className="flex flex-col items-center space-y-4 md:flex-row md:items-end md:space-x-4 md:justify-center">
                        <Link
                          href="/dashboard/annexures/a/editmanufacturingdetails"
                          passHref
                        >
                          <Button>Edit</Button>
                        </Link>
                        <Link
                          href="/dashboard/annexures/a/manufacturingdetails"
                          passHref
                        >
                          <Button>View</Button>
                        </Link>
                      </div>
                    </TableCell>
                  </TableRow>
                </Table>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Card>
    </>
  );
};

export default FormAnnexureA;
