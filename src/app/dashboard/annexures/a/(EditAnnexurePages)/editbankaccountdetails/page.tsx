import BankAccountDetailsComponent from "@/components/Annexures/a/BankAccountDetails/BankAccountDetailsComponent";
import { Button } from "@/components/ui/button";

export default function EditBankAccountDetails() {
    return (
        <main>
            <BankAccountDetailsComponent edit={true} />
            <div className="flex justify-end">
                <Button className="w-96 mt-10">Submit</Button>
            </div>
        </main>
    );
} 