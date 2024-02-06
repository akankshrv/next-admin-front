import RegisteredOfficeComponent from "@/components/Annexures/a/RegisteredOffice/RegisteredOfficeComponent";
import { Button } from "@/components/ui/button";

export default function EditAuthorizedPerson() {
    return (
        <main>
            <RegisteredOfficeComponent edit={true} />
            <div className="flex justify-end">
                <Button className="w-96 mt-10">Submit</Button>
            </div>
        </main>
    );
} 