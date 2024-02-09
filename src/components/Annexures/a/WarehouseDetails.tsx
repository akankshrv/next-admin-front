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
import IndividualWarehouseDialog from "./Dialogs/PartBDialogs/IndividualWarehouseDialog";
import MainInfoDialog from "./Dialogs/PartBDialogs/MainInfoDialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DatePicker } from "@/components/ui/datepicker";
const WarehouseDetails = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-4 p-10 ">
        <Accordion
          type="single"
          collapsible
          
          className="w-full p-10 rounded-2xl  bg-black/5"
        >
          <h1 className="text-4xl">Annexure A - Part 2</h1>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <h1 className="">Warehouse List</h1>
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
                  <TableCell>
                    <div className="flex flex-col items-center space-y-4 md:flex-row md:items-end md:space-x-4 md:justify-center">
                      <IndividualWarehouseDialog isEdit={false} />

                      <IndividualWarehouseDialog isEdit={true} />
                    </div>
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
                </TableRow>
              </Table>

              {/* <CompanyDetails /> */}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <h1 className="">Warehouse Registration</h1>
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
              <h1 className="">Contact details at the site/premises</h1>
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
              <h1 className="text-2xl ">Declaration</h1>
            </AccordionTrigger>
            <AccordionContent>
              <div className="ml-10">
                <p className="text-2xl font-bold">I / We declare that </p>
                <ol className="list-decimal ml-8 p-2 text-lg">
                  <li>
                    {" "}
                    I/We are a registered or incorporated entity in India.
                  </li>
                  <li>
                    I/We have not been declared insolvent or bankrupt by a court
                    or tribunal.
                  </li>
                  <li>
                    I/We have not been convicted for an offence under any law.
                  </li>
                  <li>
                    I/We have neither been penalized or convicted nor are being
                    prosecuted for an offence under the Customs Act, 1962 or
                    Central Excise Act, 1944 or Finance Act, 1994 or Central
                    Goods and Services Tax Act, 2017 or Integrated Goods and
                    Services Tax Act, 2017 or Goods and Services Tax
                    (Compensation to States) Act, 2017.
                  </li>
                  <li>
                    There is no bankruptcy or criminal proceedings pending
                    against me/us.
                  </li>
                  <li>
                    I/We hereby declare that the information given in this
                    application form is true, correct and complete in every
                    respect and that I am authorized to sign on behalf of the
                    Licensee. I further undertake that if any particulars
                    declared by me/us are proved to be false, the license
                    granted to me/us shall be liable to be cancelled and I/we
                    shall be liable for action under Customs Act, 1962.
                  </li>
                </ol>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              <h1 className="text-2xl ">Undertaking</h1>
            </AccordionTrigger>
            <AccordionContent>
              <div className="ml-10">
                <p className="text-2xl font-bold">I / We undertake to </p>
                <ol className="list-decimal ml-5 p-2 text-lg">
                  <li>
                    Maintain accounts of receipt and removal of goods in digital
                    form in such format as may be specified and furnish the same
                    to the bond officer on a monthly basis digitally.
                  </li>
                  <li>Execute a bond in such format as may be specified.</li>
                  <li>
                    Inform the input-output norms, wherever considered necessary
                    for raw materials and the final products and to inform the
                    revised input-output norms in case of a change therein.
                  </li>
                  <li>
                    Comply with such terms & conditions as may be specified by
                    the Principal Commissioner of Customs or the Commissioner of
                    Customs.
                  </li>
                </ol>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              <h1>Stamp</h1>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex justify-end p-5">
                <div className="flex items-center flex-col gap-4 p-10">
                  <Input
                    type="text"
                    className="w-96 border-2 border-black"
                    placeholder="Signature"
                  />
                  <p>(Signature of the applicant/authorized signatory)</p>
                </div>
              </div>
              <div>
                <div className="flex flex-row gap-4 items-center py-5">
                  <Label className="text-xl">Date:</Label>
                  <DatePicker />
                </div>
                <div className="flex flex-row gap-4 items-center py-5">
                  <Label className="text-xl">Place:</Label>
                  <Input type="text" className="ml-3 w-96" />
                </div>
              </div>
              <div className="flex justify-center p-2">
                <Button className="w-40">Submit</Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default WarehouseDetails;
