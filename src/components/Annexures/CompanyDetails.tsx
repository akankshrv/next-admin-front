import { Companies } from "@/index";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import Link from "next/link";

const CompanyDetails = async () => {
  async function getCompanies(): Promise<Companies> {
    const result = await fetch("http://localhost:3000/api/companies");

    return result.json();
  }

  const companiesDetails = await getCompanies();
  return (
    <>
      {
        <Table className="">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[5%]">ID</TableHead>
              <TableHead className="w-[20%]">Name of the applicant</TableHead>
              <TableHead className="w-[10%]">Pan No.</TableHead>
              <TableHead className="w-[10%]">GSTIN</TableHead>
              <TableHead className="w-[10%]">IEC</TableHead>
              <TableHead className="w-[15%]">Constitution</TableHead>
              <TableHead className="text-center">Annexures</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {companiesDetails.companies.map((details: any) => (
              <TableRow key={details.id}>
                <TableCell>{details.id}</TableCell>
                <TableCell>{details.name}</TableCell>
                <TableCell>{details.panNumber}</TableCell>
                <TableCell>{details.gstin}</TableCell>
                <TableCell>{details.iec}</TableCell>
                <TableCell>{details.constitution}</TableCell>
                <TableCell className="text-center">
                  <div className="flex flex-col items-center space-y-4 md:flex-row md:items-end md:space-x-4 md:justify-center">
                    <Button>Edit</Button>
                    <Link href="/dashboard/annexures">
                      <Button>View</Button>
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        // companiesDetails.companies.map((details:any) => (

        //   <div>
        //     <div>
        //       Name of the applicant
        //     </div>
        //     <div>{details.name}</div>

        //     {/* <div>Pan No.</div>
        //     <div>{details.panNumber}</div> */}
        //   </div>
        // ))
      }
    </>
  );
};

export default CompanyDetails;
