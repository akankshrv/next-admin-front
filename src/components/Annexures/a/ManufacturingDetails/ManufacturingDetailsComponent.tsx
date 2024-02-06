"use client";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Props } from "@/index";
import { Textarea } from "@/components/ui/textarea";

const manufacturingDetailsSchema = z.object({
  location: z.string(),
  facility: z.string(),
  goodsman: z.string(),
  ic: z.string(),
});
export default function ManufacturingDetailsComponent({
  edit,
}: Props): JSX.Element {
  const form = useForm<z.infer<typeof manufacturingDetailsSchema>>({
    resolver: zodResolver(manufacturingDetailsSchema),
    defaultValues: {
      location: "",
      facility: "",
      goodsman: "",
      ic: "",
    },
  });
  if (edit) {
    return (
      <>
        <Card>
          <h2 className="text-center pt-10">Registered Office</h2>
          <Form {...form}>
            <form className=" p-20 w-full flex-flex-col gap-4 space-y-5">
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <div className="grid grid-cols-3 ">
                        <FormLabel className="text-lg flex items-center justify-start">
                          Location
                        </FormLabel>
                        <FormControl className="col-span-2">
                          <Input
                            {...field}
                            placeholder="Please provide the location "
                            type="text"
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="facility"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <div className="grid grid-cols-3">
                        <FormLabel className="text-lg flex items-center justify-start">
                          Facility:
                        </FormLabel>
                        <FormControl className="col-span-2">
                          <Input
                            {...field}
                            placeholder="Please provide the facility name"
                            type="text"
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="goodsman"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <div className="grid grid-cols-3 ">
                        <FormLabel className="text-lg flex items-center justify-start">
                          Goods Manufactured:
                        </FormLabel>
                        <FormControl className="col-span-2">
                          <Input
                            {...field}
                            placeholder="total number of goods"
                            type="text"
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="ic"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <div className="grid grid-cols-3 ">
                        <FormLabel className="text-lg flex items-center justify-start">
                          In-Charge
                        </FormLabel>
                        <FormControl className="col-span-2">
                          <Input
                            {...field}
                            placeholder="Please mention the inCharge"
                            type="text"
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <p className="font-thin text-sm">
                Details of existing manufacturing facilities in India and/or
                OverSeas of the Applicant firm and of each of its
                directors/partners/proprietor, as the case may be (please attach
                separate sheet if required){" "}
              </p>

              <Textarea placeholder="Details" />
              <Input type="file" />
              <div className="flex justify-center">
                <Button className="w-40 ">Submit</Button>
              </div>
            </form>
          </Form>
        </Card>
      </>
    );
  } else {
    return (
      <Card className="w-[700px]">
        <h2 className="text-center pt-10 mb-5">Manufacturing Details</h2>
        <div className="flex flex-col p-10 w-full flex-flex-col gap-4 space-y-5">
          <div className="grid grid-cols-2 place-items-start ">
            <div className="text-xl">Location:</div>
            <div>
              <p className="text-lg">Bangalore</p>
            </div>
          </div>
          <div className="grid grid-cols-2 place-items-start ">
            <div className="text-xl">Facility Name:</div>
            <div>
              <p className="text-lg">Instorein Technologies Private Limited </p>
            </div>
          </div>
          <div className="grid grid-cols-2 place-items-start ">
            <div className="text-xl">Good Manufactured:</div>
            <div>
              <p className="text-lg">500</p>
            </div>
          </div>
          <div className="grid grid-cols-2 place-items-start ">
            <div className="text-xl">In-charge</div>
            <div>
              <p className="text-lg">Subramanya Reddy</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-lg">Details</div>
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              numquam sequi harum architecto. Natus placeat obcaecati iusto
              distinctio delectus doloribus! Possimus cumque illo voluptatum ex
              beatae facilis libero est cupiditate.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="text-lg">File</div>
            <p className="text-sm">Attached</p>
          </div>
        </div>
      </Card>
    );
  }
}
