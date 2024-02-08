import React from "react";
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
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import Link from "next/link";
import { GrView } from "react-icons/gr";
import { IoIosRefresh, IoIosAddCircleOutline } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import IndividualWarehouseDialog from "./Dialogs/IndividualWarehouseDialog";
import MainInfoDialog from "./Dialogs/MainInfoDialog";
const WarehouseDetails = () => {
  return (
    <>
      <h1 className="text-center p-10">Annexure A - Part 2</h1>
      <div className="px-14 w-full flex flex-col gap-4 pb-10 ">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="w-full"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <h1 className="text-2xl font-semibold">Warehouse List</h1>
            </AccordionTrigger>
            <AccordionContent className="space-y-10 p-10">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[10%]">License No.</TableHead>
                    <TableHead className="w-[15%]">Warehouse Code </TableHead>
                    <TableHead className="w-[15%]">Warehouse Address</TableHead>
                    <TableHead className="w-[20%]">Bond Renewal due</TableHead>
                    <TableHead className="w-[20%]">
                      License renewal due
                    </TableHead>
                    <TableHead className="w-[20%] text-center">
                      Details of Warehouse License
                    </TableHead>
                  </TableRow>
                </TableHeader>
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
                </TableRow>

                <TableRow>
                  <TableCell>321</TableCell>
                  <TableCell>654</TableCell>
                  <TableCell>Mysuru</TableCell>
                  <TableCell>02-08-2024</TableCell>
                  <TableCell>02-08-2024</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>987</TableCell>
                  <TableCell>654</TableCell>
                  <TableCell>Mangaluru</TableCell>
                  <TableCell>02-08-2024</TableCell>
                  <TableCell>02-08-2024</TableCell>
                </TableRow>
              </Table>

              {/* <CompanyDetails /> */}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <h1 className="text-2xl font-semibold">Warehouse Registration</h1>
            </AccordionTrigger>
            <AccordionContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[20%]">Address</TableHead>
                    <TableHead className="w-[40%] text-center">
                      Boundaries of the warehouse
                    </TableHead>
                    <TableHead className="text-center">
                      Holding Rights Provided
                    </TableHead>
                    <TableHead className="text-center">Actions</TableHead>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      123 Evergreen Terrace, Springfield, Fictional Country,
                      F4K3-1M4G1N3.
                    </TableCell>
                    <TableCell>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>North</TableHead>
                            <TableHead>South</TableHead>
                            <TableHead>East</TableHead>
                            <TableHead>West</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableRow>
                          <TableCell>100</TableCell>
                          <TableCell>100</TableCell>
                          <TableCell>100</TableCell>
                          <TableCell>100</TableCell>
                        </TableRow>
                      </Table>
                    </TableCell>
                    <TableCell className="text-center text-2xl">Yes</TableCell>
                    <TableCell>
                      <div className="flex flex-col items-center space-y-4 md:flex-row md:items-end md:space-x-4 md:justify-center">
                        <Button>
                          <GrView />
                        </Button>
                        <Button>
                          <IoIosRefresh />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableHeader>
              </Table>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <h1 className="text-2xl font-semibold">
                Contact details at the site/premises
              </h1>
            </AccordionTrigger>
            <AccordionContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tel</TableHead>
                    <TableHead>Fax</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Website</TableHead>
                    <TableHead className="text-center">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableRow>
                  <TableCell>0890890808</TableCell>
                  <TableCell>989 9389 0393</TableCell>
                  <TableCell>k0NpI@example.com</TableCell>
                  <TableCell>www.abc.com</TableCell>
                  <TableCell>
                    <div className="flex flex-col items-start space-y-4 md:flex-row md:items-end md:space-x-4 md:justify-center">
                      <Button>
                        <GrView />
                      </Button>
                      <Button>
                        <IoIosRefresh />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              </Table>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <h1 className="text-2xl font-semibold">
                Details of warehouse license issued earlier to the applicant, if
                any{" "}
              </h1>
            </AccordionTrigger>
            <AccordionContent className="flex justify-center">
              <Accordion
                type="single"
                collapsible
                defaultValue="item-1"
                className="w-[95%]"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <h1 className="text-3xl font-normal ">Main Info</h1>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Date Of Issue</TableHead>
                          <TableHead>Commisionerate File No.</TableHead>
                          <TableHead>Attachment of warehouse License</TableHead>
                          <TableHead>Is Licensed CustomsBroker?</TableHead>
                          <TableHead>
                            Is Authorized Economic Operator?
                          </TableHead>
                          <TableHead className="text-center">Actions</TableHead>
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
                            <MainInfoDialog isEdit={true} />

                            <MainInfoDialog isEdit={false} />
                          </div>
                        </TableCell>
                      </TableRow>
                    </Table>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2"></AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default WarehouseDetails;
