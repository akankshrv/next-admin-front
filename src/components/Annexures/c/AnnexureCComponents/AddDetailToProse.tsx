import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/datepicker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ApprovalSignature from "@/components/ui/signature";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import AddWitness from "../Dialogs/AddWitnessDialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function AddDetailToProse() {
  return (
    <>
      <div className="flex flex-col pr-10">
        <div className="flex flex-col border border-gray-300 w-[800px] space-y-2 p-1 gap-1 border-none ">
          <div className="flex flex-row items-center  ">
            <Label className="label-primary">
              Name of the Applicant initiating this Bond:
            </Label>
            <div className="flex-1">
              <Input />
            </div>
          </div>
          <div className="flex flex-row items-center ">
            <Label className="label-primary">Address of the Office:</Label>
            <div className="flex-1">
              <Input />
            </div>
          </div>
          <div className="flex flex-row items-center ">
            <Label className="label-primary">
              Import Export code No. (GSTIN no.)
            </Label>
            <div className="flex-1">
              <Input />
            </div>
          </div>
          <div className="flex flex-row">
            <Label className="label-primary">
              Sum of the Amount to be paid to the President
            </Label>
            <div className="flex-1 flex items-center">
              <Input />
            </div>
          </div>

          <div className="flex flex-row items-center ">
            <Label className="label-primary">
              Date of the Seal of the Bond:
            </Label>
            <div className="flex-1 flex items-center">
              <DatePicker />
            </div>
          </div>
          <div className="flex flex-row items-center ">
            <Label className="label-primary">
              Place of where the Seal of the Bond is filed:
            </Label>
            <div className="flex-1">
              <Input />
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              <h1>Witnesses:</h1>
            </div>
            <Input
              placeholder="Name(s) of the importer/authorized signatory"
              className="mt-3  w-96"
            />
          </div>
          <div className="flex gap-3">
            <Label className="flex items-center text-xl">
              Signature of the importer/Authorized signatory:
            </Label>
            <Input
              placeholder="Name(s) of the importer/authorized signatory"
              className="mt-3 w-96 "
              type="file"
            />
          </div>
          <div className="flex justify-end my-5">
            <AddWitness />
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>No.</TableHead>
                <TableHead className="w-[30%]">Name of the Witness</TableHead>
                <TableHead className="w-[20%]">
                  Signature of the Witness
                </TableHead>
                <TableHead className="w-[30%]">
                  Address of the Witness
                </TableHead>
                <TableHead className="w-[20%]">
                  Occupation of the Witness
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>Radha Kumar</TableCell>
                <TableCell>RK</TableCell>
                <TableCell>Bangalore, Karnataka, India</TableCell>
                <TableCell>Engineer</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <div className="flex items-center gap-2 pt-4">
            <h1>Assistant/Deputy Commissioner:</h1>

            <Input
              placeholder="Name(s) of the importer/authorized signatory"
              className="mt-3  w-96"
            />
          </div>
        </div>
        <div className="mt-10">
          <h1>Additional Important Inputs for the Bond</h1>
          <Table>
            <TableBody>
              <TableRow className="text-lg">
                <TableCell>
                  Bill (Warehousing/Home consumption/ Export) No. :
                </TableCell>
                <TableCell>
                  <Input />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  Date of Providing the Bill :
                </TableCell>
                <TableCell>
                  <DatePicker />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Duty assessed on the goods :</TableCell>
                <TableCell>
                  <Input />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Bond value to be debited or credited (Thrice the amount of
                  duty)
                </TableCell>
                <TableCell>
                  <Input type="number" placeholder="0"/> 
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Debit</TableCell>
                <TableCell>
                  <Input type="number" placeholder="0"/> 
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Credit</TableCell>
                <TableCell>
                  <Input type="number" placeholder="0"/> 
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Balance of bond Value</TableCell>
                <TableCell>
                  <Input type="number" placeholder="0"/> 
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Remarks</TableCell>
                <TableCell>
                  <Textarea placeholder="Provide the necessary details"/>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Signature of the Officer</TableCell>
                <TableCell>
                  <Input />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Full Name of the Officer</TableCell>
                <TableCell>
                  <Input />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Designation</TableCell>
                <TableCell>
                  <Input />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
