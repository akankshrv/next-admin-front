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

const bankAccountDetailsSchema = z.object({
  bankName: z.string(),
  branch: z.string(),
  accno: z.string(),
});
export default function BankAccountDetailsComponent({
  edit,
}: Props): JSX.Element {
  const form = useForm<z.infer<typeof bankAccountDetailsSchema>>({
    resolver: zodResolver(bankAccountDetailsSchema),
    defaultValues: {
      bankName: "",
      branch: "",
      accno: "",
    },
  });

  if (edit) {
    return (
      <>
        <Card>
          <h2 className="text-center pt-10">Bank Account Details</h2>
          <Form {...form}>
            <form className=" p-20 w-full flex flex-col gap-4 space-y-5">
              <FormField
                control={form.control}
                name="bankName"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <div className="grid grid-cols-3 ">
                        <FormLabel className="text-lg flex items-center justify-start">
                          Name of the bank:
                        </FormLabel>
                        <FormControl className="col-span-2">
                          <Input {...field} placeholder="Name" type="text" />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="branch"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <div className="grid grid-cols-3 ">
                        <FormLabel className="text-lg flex items-center justify-start">
                          Branch Name:
                        </FormLabel>
                        <FormControl className="col-span-2">
                          <Input
                            {...field}
                            placeholder="branch name"
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
                name="accno"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <div className="grid grid-cols-3 ">
                        <FormLabel className="text-lg flex items-center justify-start">
                          Account Number:
                        </FormLabel>
                        <FormControl className="col-span-2">
                          <Input {...field} placeholder="acc no" type="text" />
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
      <Card className="p-20">
        <h2 className="text-center pt-10 mb-5">Bank Account Details</h2>
        <div className="flex flex-col p-10 w-full flex-flex-col gap-4 space-y-5">
          <div className="grid grid-cols-2 place-items-start">
            <div className="text-xl ">Name of the Bank:</div>
            <div>
              <p className="text-lg">Axis Bank</p>
            </div>
          </div>
          <div className="grid grid-cols-2 place-items-start">
            <div className="text-xl">Branch Name:</div>
            <div>
              <p className="text-lg">Bangalore</p>
            </div>
          </div>
          <div className="grid grid-cols-2 place-items-start">
            <div className="text-xl">Account Number:</div>
            <div>
              <p className="text-lg">87421590634218</p>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}
