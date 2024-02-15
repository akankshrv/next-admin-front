import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CiViewTable } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import ImportDetailsDialog from "../Dialogs/ImportDetailsDialog";
import WarehouseDetailsDialog from "../Dialogs/WarehouseDetailsDialog";
import DispatchOfGoodsDialog from "../Dialogs/DispatchOfGoodsDialog";
import RemovalPurposeDialog from "../Dialogs/RemovalPurposeDialog";
import DetailsOfDispatchDialog from "../Dialogs/DetailsOfDispatchDialog";

export default function PartA() {
  return (
    <>
      <div className="w-full flex flex-col gap-4 p-10 ">
        <div className="w-full p-10 rounded-md bg-black/5">
          <h1>Part A</h1>
          <p>This part A has to be filled at the dispatch ware house.</p>

          <Table>
            <TableHeader>
              <TableRow>
                <TableCell>Import Details</TableCell>
                <TableCell>Details of Ware housing</TableCell>
                <TableCell>Description of dispatch of Goods</TableCell>
                <TableCell>Purpose of Removal</TableCell>
                <TableCell>Detail of Dispatch of Goods </TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="flex gap-2">
                    <ImportDetailsDialog isEdit={true} />
                    <ImportDetailsDialog isEdit={false} />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <WarehouseDetailsDialog isEdit={true} />
                    <WarehouseDetailsDialog isEdit={false} />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <DispatchOfGoodsDialog isEdit={true} />
                    <DispatchOfGoodsDialog isEdit={false} />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <RemovalPurposeDialog isEdit={true} />
                    <RemovalPurposeDialog isEdit={false} />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <DetailsOfDispatchDialog isEdit={true} />
                    <DetailsOfDispatchDialog isEdit={false} />
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        
      </div>
    </>
  );
}
