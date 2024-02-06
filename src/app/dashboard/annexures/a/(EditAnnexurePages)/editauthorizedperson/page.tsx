import AuthorizedPersonComponent from "@/components/Annexures/a/AuthorizedPerson/AuthorizedPersonComponent";
import { Button } from "@/components/ui/button";

export default function EditAuthorizedPerson() {
    return (
        <main>
            <AuthorizedPersonComponent edit={true} />
            <div className="flex justify-end">
                <Button className="w-96 mt-10">Submit</Button>
            </div>
        </main>
    );
} 