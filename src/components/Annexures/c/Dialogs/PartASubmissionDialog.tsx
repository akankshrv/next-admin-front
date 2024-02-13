import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Props } from "@/index";
import { DialogTrigger } from "@radix-ui/react-dialog";
import ViewProse from "../AnnexureCComponents/ViewProse";
import AddDetailToProse from "../AnnexureCComponents/AddDetailToProse";

export default function PartASubmissionDialog({ isEdit }: Props): JSX.Element {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button variant="default" className="">
            {isEdit ? "Provide Details" : "View"}
          </Button>
        </DialogTrigger>
        <DialogContent
          className={
            isEdit
              ? "min-w-[1000px]  max-h-[800px] overflow-y-scroll"
              : "min-w-[1000px] max-h-[800px] overflow-y-scroll "
          }
        >
          <div>
            <DialogHeader>
              <DialogTitle className="text-4xl">General Bonds</DialogTitle>
              {isEdit ? (
                <DialogDescription>
                  Please provide the necessary details for the General bond
                  which will be executed under section 59 of the Customs Acts,
                  1962 and MOOWR, 2019 by a unit operating under section 65 of
                  the Customs Acts, 1962. This bond will be between you and the
                  President of India.
                </DialogDescription>
              ) : (
                <DialogDescription>
                  A General Bond to be executed under Section 59 of the Customs
                  Act, 1962, and MOOWR, 2019 by a unit operating under Section
                  65 of the Customs Act, 1962. The bond is between M/s.
                  [Importer's Name and Details] and the President of India.
                </DialogDescription>
              )}
            </DialogHeader>
          </div>
          <div className="">
            <div className="">
              {isEdit ? (
                <>
                  <AddDetailToProse />
                </>
              ) : (
                <>
                  <ViewProse />
                </>
              )}
            </div>
            <div className="mt-10">
              {isEdit ? (
                <Button className="w-96 p-1 mb-10 mr-10">Submit</Button>
              ) : (
                <div className="hidden">
                  <Button className="w-96 p-1 mb-10 mr-10">Submit</Button>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
