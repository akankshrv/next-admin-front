import ViewCompanyComponent from "@/components/Annexures/a/ViewCompany/ViewCompanyComponent";
import { Button } from "@/components/ui/button";

export default function EditAuthorizedPerson() {
    return (
        <main>
            hello
            <ViewCompanyComponent edit={true} />
            <div className="flex justify-end">
                <Button className="w-96 mt-10">Submit</Button>
            </div>
        </main>
    );
} 