import ManufacturingDetailsComponent from "@/components/Annexures/a/ManufacturingDetails/ManufacturingDetailsComponent";
import { Button } from "@/components/ui/button";

export default function EditManufacturingDetails() {
    return (
        <main>
            <ManufacturingDetailsComponent edit={true} />
            <div className="flex justify-end">
                <Button className="w-96 mt-10">Submit</Button>
            </div>
        </main>
    );
} 