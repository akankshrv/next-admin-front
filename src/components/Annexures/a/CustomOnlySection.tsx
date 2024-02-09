import React from "react";
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import IndividualWarehouseDialog from "./Dialogs/PartBDialogs/IndividualWarehouseDialog";
import { Card } from "@/components/ui/card";
import TopTabs from "./Tabs/TopTabs";

import WareHouseApprovalDialog from "./Dialogs/CustomsOnlyDialogs/WareHouseApprovalDialog";

const CustomOnlySection = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-4 p-10 ">
        <Card className="w-full p-10 rounded-2xl  bg-black/5 border-none">
          <h1>Customs Review </h1>
          <Table>
            <TableHeader className="text-xl ">
              <TableRow>
                <TableHead className="w-[20%]">Company </TableHead>
                <TableHead className="w-[10%]">Warehouse </TableHead>
                <TableHead className="w-[10%]">Status</TableHead>
                <TableHead className="w-[20%]">License renewal due</TableHead>
                <TableHead className="w-[20%]">Bond Renewal due</TableHead>
                <TableHead className="w-[20%] text-center">Review</TableHead>
              </TableRow>
            </TableHeader>
            <TableRow>
              <TableCell>Radha Krishna Private ltd</TableCell>
              <TableCell>Bangalore</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>02-08-2024</TableCell>
              <TableCell>02-08-2024</TableCell>
              <TableCell>
                <div className="flex flex-col items-center space-y-4 md:flex-row md:items-end md:space-x-4 md:justify-center">
                  {/* thesee are the icons in the table */}
                  <WareHouseApprovalDialog isEdit={false} />

                  <WareHouseApprovalDialog isEdit={true} />
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>ABC Corporation</TableCell>
              <TableCell>New York</TableCell>
              <TableCell>Inactive</TableCell>
              <TableCell>03-15-2024</TableCell>
              <TableCell>03-15-2024</TableCell>
              <TableCell>
                <div className="flex flex-col items-center space-y-4 md:flex-row md:items-end md:space-x-4 md:justify-center">
                  <IndividualWarehouseDialog isEdit={false} />
                  <IndividualWarehouseDialog isEdit={true} />
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>XYZ Enterprises</TableCell>
              <TableCell>Los Angeles</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>04-20-2024</TableCell>
              <TableCell>04-20-2024</TableCell>
              <TableCell>
                <div className="flex flex-col items-center space-y-4 md:flex-row md:items-end md:space-x-4 md:justify-center">
                  <IndividualWarehouseDialog isEdit={false} />
                  <IndividualWarehouseDialog isEdit={true} />
                </div>
              </TableCell>
            </TableRow>
          </Table>
        </Card>
      </div>
    </>
  );
};

export default CustomOnlySection;
