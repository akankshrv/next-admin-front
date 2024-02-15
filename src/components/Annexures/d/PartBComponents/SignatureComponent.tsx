import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

type Role = "customs" | "warehouse" | "licensee";

interface SignatureComponentProps {
  role: Role;
}

const SignatureComponent: React.FC<SignatureComponentProps> = ({ role }) => {
  let signatureText = "";

  switch (role) {
    case "customs":
      signatureText =
        "Signature of the proper officer at the customs station of export with date.";
      break;
    case "warehouse":
      signatureText =
        "The warehouse keeper at the warehouse of receipt with date.";
      break;
    case "licensee":
      signatureText = "Signature of the licensee ";
      break;
    default:
      signatureText = "Invalid role";
  }

  return (
    <div>
      <h2 className="pt-5">{signatureText}</h2>
      <div className="flex flex-col border border-gray-300 w-[800px] space-y-2 p-1 gap-1 border-none ">
        <div className="flex flex-row items-center ">
          <Label className="label-primary">Signature:</Label>
          <Input
            type="text"
            placeholder="Please provide your full name"
            className="flex-1"
          />
        </div>
        <div className="flex flex-row items-center">
          <Label className="label-primary">Date:</Label>
          <Input type="date" className="flex-1" />
        </div>
        <div className="flex flex-row items-center">
          <Label className="label-primary">Signature:</Label>
          <Input
            type="file"
            placeholder="Please provide the signature"
            className="flex-1"
          />
        </div>
        <div className="flex flex-row items-center">
          <Label className="label-primary">Address:</Label>
          <Textarea
            placeholder="Please provide the address"
            className="flex-1"
          />
        </div>
      </div>
    </div>
  );
};

export default SignatureComponent;
