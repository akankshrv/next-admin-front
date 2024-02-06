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

const authorizedPersonSchema = z.object({
  authorizedperson: z.string(),
  designation: z.string(),
});
export default function AuthorizedPersonComponent({
  edit,
}: Props): JSX.Element {
  const form = useForm<z.infer<typeof authorizedPersonSchema>>({
    resolver: zodResolver(authorizedPersonSchema),
    defaultValues: {
      authorizedperson: "",
      designation: "",
    },
  });

  if (edit) {
    return (
      <>
        <Card>
          <h2 className="text-center pt-10">Authorized Person</h2>
          <Form {...form}>
            <form className=" p-20 w-full flex flex-col gap-4 space-y-5">
              <FormField
                control={form.control}
                name="authorizedperson"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <div className="grid grid-cols-3 ">
                        <FormLabel className="text-lg flex items-center justify-start">
                          Name of the Authorized Person:
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
                name="designation"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <div className="grid grid-cols-3 ">
                        <FormLabel className="text-lg flex items-center justify-start">
                          Designation:
                        </FormLabel>
                        <FormControl className="col-span-2">
                          <Input
                            {...field}
                            placeholder="Provide Designation"
                            type="text"
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </form>
          </Form>
        </Card>
      </>
    );
  } else {
    return (
      <Card className="p-10">
        <h2 className="text-center pt-10 mb-5">Authorized Person</h2>
        <div className="flex flex-col p-10 w-full flex-flex-col gap-4 space-y-5">
          <div className="grid grid-cols-3 place-items-start">
            <div className="text-xl col-span-2">Authorized Person</div>
            <div>
              <p className="text-lg">Mr. Authorized Person</p>
            </div>
          </div>
          <div className="grid grid-cols-3 place-items-start">
            <div className="text-xl col-span-2">Designation</div>
            <div>
              <p className="text-lg">CEO</p>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}
