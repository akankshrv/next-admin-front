import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

export default function ViewProse() {
  return (
    <div className="text-justify mx-4 pr-5 flex flex-col gap-10 mb-10 pb-5">
      <p>
        (To be executed under Section 59 of the Customs Act, 1962 and MOOWR,
        2019 by a unit operating under section 65 of the Customs Act, 1962) KNOW
        ALL MEN BY THESE PRESENTS THAT we M/s. ____[ Name ]___ having our office
        located at _____[Address]_____ and holding Import-Export Code
        No.[Import-Export Code], hereinafter referred to as the “importer”,
        (which expression shall include our successors, heirs, executors,
        administrators and legal representatives) hereby jointly and severally
        bind ourselves to the President of India hereinafter referred to as the
        “President” (which expression shall include his successors and assigns)
        in the sum of Rs. [Amount to be paid to the President] (please fill
        amount in words) to be paid to the President, for which payment well and
        truly to be made, we bind ourselves, our successors, heirs, executors,
        administrators and legal representatives firmly by these presents.
      </p>
      <p>Sealed with our seal(s) this Date of [______].</p>
      <p>
        <b>WHEREAS</b> the Principal Commissioner or Commissioner of Customs,
        has decided to grant license to operate a warehouse under Section 58 of
        the Customs Act;
      </p>
      <p>
        <b>AND WHEREAS</b> the Principal Commissioner or Commissioner of
        Customs, has decided to permit carrying out manufacture and other
        operations in the warehouse under Section 65 of the Customs Act;
      </p>
      <p>
        <b>AND WHEREAS</b> the Assistant/Deputy Commissioner of Customs has
        given permission to enter into a General Bond for the purpose of
        sub-section (2) of Section 59 of the Customs Act, in respect of
        warehousing of goods to be imported by us during the period from
        ____[FROM]_____ to ____[TO]______ (both days inclusive).
      </p>
      <p>
        <b>NOW THE CONDITION</b> of the above written bond is such that, if we :
        comply with all the provisions of the Customs Act, 1962, Central Goods
        and Services Tax Act, 2017 or Integrated Goods and Services Tax Act,
        2017 or Goods and Services Tax (Compensation to States) Act, 2017 and
        the rules and regulations made thereunder in respect of such goods; pay
        in the event of our failure to discharge our obligation, the full amount
        of duty chargeable on account of such goods together with their
        interest, fine and penalties payable under section 72 of the Customs
        Act, 1962 in respect of such goods; pay all penalties and fines incurred
        for contravention of the provisions of the Customs Act, 1962, Central
        Goods and Services Tax Act, 2017 or Integrated Goods and Services Tax
        Act, 2017 or Goods and Services Tax (Compensation to States) Act, 2017
        and the rules or regulations made thereunder, in respect of such goods;
        Then the above written bond shall be void and of no effect; otherwise,
        the same shall remain in full force and virtue.
      </p>
      <p>
        IT IS HEREBY AGREED AND DECLARED that : the Bond shall continue in full
        force notwithstanding the transfer of goods to any other premises for
        job work; the President through the Deputy/Assistant Commissioner of
        Customs or any other officer may recover any amount due under this Bond
        in the manner laid down under sub-section (1) of section 142 of Customs
        Act, 1962, without prejudice to any other mode of recovery.
        <b>IN THE WITNESS WHEREOF,</b> the importer has herein set and
        subscribed his hands and seals the day, month and year first above
        written.
      </p>
      <p>
        SIGNED AND DELIVERED by or on behalf of the importer at
        _________________ (place) in the presence of :
      </p>

      <div className="flex flex-col gap-8">
        <b>Witness :</b>
        <b>(Signature(s) of the importer/authorized signatory) </b>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No.</TableHead>
            <TableHead className="w-[30%]">Name of the Witness</TableHead>
            <TableHead className="w-[20%]">Signature of the Witness</TableHead>
            <TableHead className="w-[30%]">Address of the Witness</TableHead>
            <TableHead className="w-[20%]">Occupation of the Witness</TableHead>
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

      <p>
        Accepted by me this date of [DATE], for and on behalf of the President
        of India.
      </p>

      <div>
        <p>(Assistant/Deputy Commissioner)</p>
        <div>
          <h2>Name : </h2>
          <h2>Signature : </h2>
          <h2>Date :</h2>
        </div>
      </div>

      <p className="font-semibold">
        Schedule to the General Bond to be executed by the importer under
        sub-section (2) of Section 59 of the Customs Act, 1962 for the purpose
        of warehousing of goods to be imported by them.
      </p>
      <div className="px-5 -mt-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50%]">Additional Details</TableHead>
              <TableHead className="w-[20%]">Entry</TableHead>
              <TableHead className="w-[30%]"></TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>
                Bill (Warehousing/Home consumption/ Export) No. and date
              </TableCell>
              <TableCell>9</TableCell>
              <TableCell>24-10-2024</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Duty assessed on the goods</TableCell>
              <TableCell>Senior Chief</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Bond value to be debited or credited (Thrice the amount of duty)
              </TableCell>
              <TableCell>Rs.10,00,000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Debit</TableCell>
              <TableCell>Rs.3,00,000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Credit</TableCell>
              <TableCell>Rs.7,00,000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Balance of bond Value</TableCell>
              <TableCell>Rs.10,00,000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Remarks</TableCell>
              <TableCell>Provide as required</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Signature of the Officer</TableCell>
              <TableCell>Sign</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Full Name of the Officer</TableCell>
              <TableCell>Romian JackSon</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Designation</TableCell>
              <TableCell>Customs officer</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
