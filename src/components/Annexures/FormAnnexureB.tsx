import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Form } from "../ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const FormAnnexureB = () => {
  return (
    <div>
      <Link href="/dashboard/annexures">
        <Button className="w-12 h-12 mt-5 ml-10">
          <BsFillArrowLeftCircleFill className="w-24 h-24" />
        </Button>
      </Link>
      <Card className="flex flex-col -mt-12 justify-between max-w-7xl  mx-auto  mb-10">
        <CardHeader>
          <CardTitle className="text-center">Annexure B - Form</CardTitle>
          <CardDescription className="text-center">
            Form to be maintained by a unit operating under section 65 of the
            Customs Act for the receipt, processing and removal of goods
          </CardDescription>
        </CardHeader>
        <CardContent>
         <form >
            <div></div>
         </form>
        </CardContent>
      </Card>
      <form action=""></form>
    </div>
  );
};

export default FormAnnexureB;
