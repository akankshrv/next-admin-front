import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import IndividualWarehouseDialog from "./Dialogs/PartBDialogs/IndividualWarehouseDialog";
import { Card } from "@/components/ui/card";
import TopTabs from "./Tabs/TopTabs";

import WareHouseApprovalDialog from "./Dialogs/CustomsOnlyDialogs/WareHouseApprovalDialog";
import { Button } from "@/components/ui/button";
import CompanyApprovalDialog from "./Dialogs/CustomsOnlyDialogs/CompanyApprovalDialog";
import IssuePartOneDialog from "./Dialogs/CustomsOnlyDialogs/IssuePartOneDialog";
import CustomsSignatureDialog from "./Dialogs/CustomsOnlyDialogs/CustomsSignatureDialog";

const CustomOnlySection = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-4 p-10 ">
        <Card className="w-full p-10 rounded-2xl  bg-black/5 border-none">
          <div className="flex flex-col gap-2 ">
            <h1 className="">Instorein Technologies Private Limited</h1>

            <div className="flex flex-row gap-2 items-center">
              <h1>Company Approval: </h1>
              <CompanyApprovalDialog isEdit={true} />
            </div>
          </div>
          <h1 className="mt-5">Customs WareHouse Review</h1>

          <h2 className="mt-2">Pending Approvals</h2>
          <Table>
            <TableHeader className="text-xl ">
              <TableRow>
                <TableHead className="w-[10%]">License No.</TableHead>
                <TableHead className="w-[15%]">Warehouse Code </TableHead>
                <TableHead className="w-[10%]">Warehouse </TableHead>
                <TableHead className="w-[20%]">License renewal due</TableHead>
                <TableHead className="w-[20%]">Bond Renewal due</TableHead>
                <TableHead className="w-[20%] text-center">Review</TableHead>
                <TableHead>Approval</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>456</TableCell>
                <TableCell>789</TableCell>
                <TableCell>Bengaluru</TableCell>
                <TableCell>02-08-2024</TableCell>
                <TableCell>02-08-2024</TableCell>
                <TableCell>
                  <div className="flex flex-col items-center space-y-4 md:flex-row md:items-end md:space-x-4 md:justify-center">
                    <IndividualWarehouseDialog isEdit={false} />

                    <IndividualWarehouseDialog isEdit={true} />
                  </div>
                </TableCell>
                <TableCell>
                  <WareHouseApprovalDialog isEdit={true} />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>321</TableCell>
                <TableCell>654</TableCell>
                <TableCell>Mysuru</TableCell>
                <TableCell>02-08-2024</TableCell>
                <TableCell>02-08-2024</TableCell>
                <TableCell>
                  <div className="flex flex-col items-center space-y-4 md:flex-row md:items-end md:space-x-4 md:justify-center">
                    <IndividualWarehouseDialog isEdit={false} />

                    <IndividualWarehouseDialog isEdit={true} />
                  </div>
                </TableCell>
                <TableCell>
                  <WareHouseApprovalDialog isEdit={false} />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>987</TableCell>
                <TableCell>654</TableCell>
                <TableCell>Mangaluru</TableCell>
                <TableCell>02-08-2024</TableCell>
                <TableCell>02-08-2024</TableCell>
                <TableCell>
                  <div className="flex flex-col items-center space-y-4 md:flex-row md:items-end md:space-x-4 md:justify-center">
                    <IndividualWarehouseDialog isEdit={false} />

                    <IndividualWarehouseDialog isEdit={true} />
                  </div>
                </TableCell>
                <TableCell>
                  <WareHouseApprovalDialog isEdit={false} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <h1>Issue of Licence : </h1>
          <div className="flex flex-row gap-3">
            <IssuePartOneDialog isEdit={true} />
            <CustomsSignatureDialog isEdit={true} />
          </div>
          <div className="flex flex-row gap-3 mt-2">
            <IssuePartOneDialog isEdit={false} />
            <CustomsSignatureDialog isEdit={false} />
          </div>
        </Card>
      </div>
    </>
  );
};

export default CustomOnlySection;
