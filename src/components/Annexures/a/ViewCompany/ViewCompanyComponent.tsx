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

const companyRegisterSchema = z.object({
  name: z.string(),
  panNo: z.string(),
  gstin: z.string(),
  iec: z.string(),
  cob: z.string(),
});
export default function ViewCompanyComponent({ edit }: Props): JSX.Element {
  const form = useForm<z.infer<typeof companyRegisterSchema>>({
    resolver: zodResolver(companyRegisterSchema),
    defaultValues: {
      name: "",
      panNo: "",
      gstin: "",
      iec: "",
      cob: "",
    },
  });

  if (edit) {
    return (
      <>
        <Card>
          <h2 className="text-center pt-10">Company Registration</h2>
          <Form {...form}>
            <form className=" p-20 w-full flex flex-col gap-4 space-y-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <div className="grid grid-cols-3 ">
                        <FormLabel className="text-lg flex items-center justify-start">
                          Name of the Applicant:
                        </FormLabel>
                        <FormControl className="col-span-2">
                          <Input
                            {...field}
                            placeholder="INSTOREIN TECHNOLOGIES PRIVATE LIMITED"
                            readOnly
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
                name="panNo"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <div className="grid grid-cols-3 ">
                        <FormLabel className="text-lg flex items-center justify-start">
                          Pan. No:
                        </FormLabel>
                        <FormControl className="col-span-2">
                          <Input
                            {...field}
                            placeholder="AAECI0133R1"
                            readOnly
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
                name="gstin"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <div className="grid grid-cols-3 ">
                        <FormLabel className="text-lg flex items-center justify-start">
                          GSTIN:
                        </FormLabel>
                        <FormControl className="col-span-2">
                          <Input
                            {...field}
                            placeholder="29AAECI0133R1Z5"
                            readOnly
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
                name="iec"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <div className="grid grid-cols-3 ">
                        <FormLabel className="text-lg flex items-center justify-start">
                          IEC:
                        </FormLabel>
                        <FormControl className="col-span-2">
                          <Input
                            {...field}
                            placeholder="IEC"
                            readOnly
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
                name="cob"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <div className="grid grid-cols-3 ">
                        <FormLabel className="text-lg flex items-center justify-start">
                          Constitution of Business:
                        </FormLabel>
                        <FormControl className="col-span-2">
                          <Input
                            {...field}
                            placeholder="Private Limited Company"
                            readOnly
                            type="text"
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
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
      <Card>
        <h2 className="text-center pt-10 mb-5">Company Details</h2>
        <div className="flex flex-col p-10 w-full flex-flex-col gap-4 space-y-5">
          <div className="grid grid-cols-2 place-items-start">
            <div className="text-xl ">Name of the Applicant:</div>
            <div>
              <p className="text-lg">Instorein Technologies Private Limited</p>
            </div>
          </div>
          <div className="grid grid-cols-2 place-items-start">
            <div className="text-xl">Pan No:</div>
            <div>
              <p className="text-lg">AAECIO133R1</p>
            </div>
          </div>
          <div className="grid grid-cols-2 place-items-start">
            <div className="text-xl">GSTIN:</div>
            <div>
              <p className="text-lg">29AAECIO133R1</p>
            </div>
          </div>
          <div className="grid grid-cols-2 place-items-start">
            <div className="text-xl">IEC:</div>
            <div>
              <p className="text-lg">IEC</p>
            </div>
          </div>
          <div className="grid grid-cols-2 place-items-start">
            <div className="text-xl ">Constitution of Business:</div>
            <div>
              <p className="text-lg">Private Limited Company</p>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}
