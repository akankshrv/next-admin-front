import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function FormAnnexureB() {
  return (
    <>
      <Card className="mx-20 my-10">
        <CardHeader>
          <CardTitle>
            <h1 className="text-3xl">Annexure B</h1>
          </CardTitle>
          <CardDescription className="">
            Forms to be maintained by a unit of operating under section 65 of
            the customs Act for the recpt, processingstoms Act and removal of
            goods
          </CardDescription>

        <CardContent>
          <form className="">
            <div>
            <Label>Name of the Unit</Label>
            <Input />

            </div>
            <div>
            <Label>Address</Label>
            <Textarea />
            </div>
          </form>
        </CardContent>
        </CardHeader>
      </Card>
    </>
  );
}
