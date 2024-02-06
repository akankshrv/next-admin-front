import DirectorsComponent from "@/components/Annexures/a/Directors/DirectorsComponent";
import { Button } from "@/components/ui/button";


export default function EditDirector() {
  return (
    <main>
      <DirectorsComponent edit={true} />
      <div className="flex justify-end">
        <Button className="w-96 mt-10">Submit</Button>
      </div>
    </main>
  );
}
