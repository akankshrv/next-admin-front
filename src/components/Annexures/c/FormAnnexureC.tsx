"use client";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";

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
import PartASubmissionDialog from "./Dialogs/PartASubmissionDialog";

const FormAnnexureC = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-4 p-10 ">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="w-full p-10 rounded-2xl  bg-black/5"
        >
          <h1 className="text-4xl ">Annexure C</h1>

          <AccordionItem value="item-1">
            <AccordionTrigger>
              <h1 className="">List of Bonds</h1>
            </AccordionTrigger>
            <AccordionContent className="space-y-10 p-10">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[10%]">Bond No.</TableHead>
                    <TableHead className="w-[10%]">Date of Issue</TableHead>
                    <TableHead className="w-[10%]">Bond Validity</TableHead>
                    <TableHead className="w-[20%]">Status</TableHead>
                    <TableHead className="w-[20%]">Approved By</TableHead>
                    <TableHead className="text-center w-[30%]">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  <TableRow>
                    <TableCell>980</TableCell>
                    <TableCell>23-9-2024</TableCell>
                    <TableCell>23-9-2025</TableCell>
                    <TableCell>Approved</TableCell>
                    <TableCell>Mr. Subramanya </TableCell>
                    <TableCell className="text-center">
                      <div className="flex flex-col items-center space-y-4 md:flex-row md:items-end md:space-x-4 md:justify-center">
                        <PartASubmissionDialog isEdit={false} />

                        {/* <RegisteredOfficeDialog isEdit={false} /> */}
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>967</TableCell>
                    <TableCell>23-9-2024</TableCell>
                    <TableCell>23-9-2025</TableCell>
                    <TableCell>Pending</TableCell>
                    <TableCell>Mr. Rama Krishna </TableCell>
                    <TableCell className="text-center">
                      <div className="flex flex-col items-center space-y-4 md:flex-row md:items-end md:space-x-4 md:justify-center">
                        <PartASubmissionDialog isEdit={false} />
                        <PartASubmissionDialog isEdit={true} />

                        {/* <RegisteredOfficeDialog isEdit={false} /> */}
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>930</TableCell>
                    <TableCell>23-9-2024</TableCell>
                    <TableCell>23-9-2025</TableCell>
                    <TableCell>Pending</TableCell>
                    <TableCell>Mr. Subramanya </TableCell>
                    <TableCell className="text-center">
                      <div className="flex flex-col items-center space-y-4 md:flex-row md:items-end md:space-x-4 md:justify-center">
                        <PartASubmissionDialog isEdit={false} />
                        <PartASubmissionDialog isEdit={true} />
                        {/* <RegisteredOfficeDialog isEdit={false} /> */}
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>

          {/* <div className="flex gap-2">
            <PartASubmissionDialog isEdit={true} />
            <PartASubmissionDialog isEdit={false} />
          </div> */}
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <h1 className="">Notes about the Bond for clarification</h1>
            </AccordionTrigger>
            <AccordionContent>
              <p>
                The provided text is a template for a General Bond to be
                executed under Section 59 of the Customs Act, 1962, and MOOWR,
                2019 by a unit operating under Section 65 of the Customs Act,
                1962. The bond is between M/s. [Importer's Name and Details] and
                the President of India.
              </p>
              <h3>Key Points:</h3>
              <ol>
                <li>
                  <strong>Parties Involved:</strong> The bond is between the
                  importer and the President of India.
                </li>
                <li>
                  <strong>Purpose:</strong> It is executed in relation to the
                  operation of a warehouse under Section 58 of the Customs Act
                  and permits carrying out manufacturing and other operations in
                  the warehouse under Section 65.
                </li>
                <li>
                  <strong>Bond Conditions:</strong> The importer binds
                  themselves to comply with all provisions of relevant laws
                  (Customs Act, GST Acts, etc.), pay duties, interest, fines,
                  and penalties if obligations are not fulfilled.
                </li>
                <li>
                  <strong>Continuity of Bond:</strong> The bond remains in force
                  even if goods are transferred to other premises for job work.
                </li>
                <li>
                  <strong>Recovery:</strong> The President or authorized
                  officers can recover amounts due under the bond through
                  specified methods.
                </li>
                <li>
                  <strong>Witnesses:</strong> The document requires witnesses
                  for signing.
                </li>
                <li>
                  <strong>Acceptance:</strong> The bond is accepted by an
                  Assistant/Deputy Commissioner on behalf of the President of
                  India.
                </li>
                <li>
                  <strong>Schedule:</strong> There's a schedule attached
                  detailing specific information related to the goods being
                  bonded, including bill numbers, duty assessed, bond value,
                  remarks, and officer signatures.
                </li>
              </ol>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default FormAnnexureC;
