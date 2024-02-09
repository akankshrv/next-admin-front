import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CiViewList } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { GrView } from "react-icons/gr";
import { IoIosRefresh } from "react-icons/io";
import Authdialog from "../PartADialogs/Authdialog";
import { Props } from "@/index";
import MainInfoDialog from "./MainInfoDialog";

export default function IndividualWarehouseDialog({
  isEdit,
}: Props): JSX.Element {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default" className="">
            {isEdit ? <FaEdit /> : <GrView />}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] min-w-[1200px] min-h-[800px] p-10">
          <DialogHeader className="-mb-36">
            <DialogTitle>
              <h1>Details of Warehouse License</h1>
            </DialogTitle>
            <DialogDescription className="text-xl">
              This form is designed to gather essential details regarding
              security measures at the premises and personnel involved. Please
              provide information under the following three headings:
            </DialogDescription>
          </DialogHeader>

          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="w-full "
          >
            <AccordionItem value="item-0">
              <AccordionTrigger>
                <h1 className="text-2xl font-semibold">
                  If issued earlier to the applicant:{" "}
                </h1>
              </AccordionTrigger>
              <AccordionContent className="flex justify-center">
                <Accordion
                  type="single"
                  collapsible
                  defaultValue="item-0"
                  className="w-[95%]"
                >
                  <AccordionItem value="item-0">
                    <AccordionTrigger>
                      <h1 className="text-3xl font-normal ">Main Info</h1>
                    </AccordionTrigger>
                    <AccordionContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Date Of Issue</TableHead>
                            <TableHead>Commisionerate File No.</TableHead>
                            <TableHead>
                              Attachment of warehouse License
                            </TableHead>
                            <TableHead>Is Licensed CustomsBroker?</TableHead>
                            <TableHead>
                              Is Authorized Economic Operator?
                            </TableHead>
                            <TableHead className="text-center">
                              Actions
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableRow>
                          <TableCell>12-2-2023</TableCell>
                          <TableCell>123</TableCell>
                          <TableCell>
                            <div className="flex text-xl font-semibold flex-col items-center space-y-4 md:flex-row md:items-center md:space-x-4 md:gap-10">
                              Added
                              <Button>
                                <GrView />
                              </Button>
                            </div>
                          </TableCell>
                          <TableCell className="text-xl font-semibold">
                            No
                          </TableCell>
                          <TableCell className="text-xl font-semibold">
                            No
                          </TableCell>
                          <TableCell>
                            <div className="flex flex-col items-center space-y-4 md:flex-row md:items-end md:space-x-4 md:justify-center">
                              {isEdit ? (
                                <>
                                  <MainInfoDialog isEdit={true} />
                                  <MainInfoDialog isEdit={false} />
                                </>
                              ) : (
                                <MainInfoDialog isEdit={false} />
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      </Table>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      <h1 className="text-3xl font-normal ">
                        Additional Checks
                      </h1>
                    </AccordionTrigger>
                    <AccordionContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="text-center">
                              Description of Premises{" "}
                            </TableHead>
                            <TableHead className="text-center">
                              Goods Proposed to be Manufactured
                            </TableHead>
                            <TableHead className="text-center">
                              Security Facilities at the Premises
                            </TableHead>
                            <TableHead className="text-center">
                              Security Measures
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableRow>
                          <TableCell>
                            <div className="space-x-4 flex justify-center ">
                              <Button>
                                <GrView />
                              </Button>
                              <Button>
                                <FaEdit />{" "}
                              </Button>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-x-4 flex justify-center ">
                              <Button>
                                <GrView />
                              </Button>
                              <Button>
                                <FaEdit />{" "}
                              </Button>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-x-4 flex justify-center ">
                              <Button>
                                <GrView />
                              </Button>
                              <Button>
                                <FaEdit />{" "}
                              </Button>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-x-4 flex justify-center ">
                              <Button>
                                <GrView />
                              </Button>
                              <Button>
                                <FaEdit />{" "}
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      </Table>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {isEdit ? (
            <DialogFooter>
              <Button>Submit</Button>
            </DialogFooter>
          ) : (
            <div className="hidden">
              <DialogFooter>
                <Button>Submit</Button>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
