
import BankAccountDetailsComponent from "@/components/Annexures/a/componentsForA/BankAccountDetails/BankAccountDetailsComponent";
import { Button } from "@/components/ui/button";
import React from "react";

const EditOfficeInfo = () => {
  return (
    <main>
      <BankAccountDetailsComponent edit={true} />
      <div className="flex justify-end">
        <Button className="w-96 mt-10">Submit</Button>
      </div>
    </main>
  );
};

export default EditOfficeInfo;
