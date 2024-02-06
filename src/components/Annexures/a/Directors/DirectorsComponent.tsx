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

const directorsSchema = z.object({
  directorname: z.string(),
  dtono: z.string(),
});
export default function DirectorsComponent({
  edit,
}: Props): JSX.Element {
  const form = useForm<z.infer<typeof directorsSchema>>({
    resolver: zodResolver(directorsSchema),
    defaultValues: {
      directorname: "",
      dtono: "",
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
                name="directorname"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <div className="grid grid-cols-3 ">
                        <FormLabel className="text-lg flex items-center justify-start">
                          Name of the Director:
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
                name="dtono"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <div className="grid grid-cols-3 ">
                        <FormLabel className="text-lg flex items-center justify-start">
                          DTO No:
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
            </form>
          </Form>
        </Card>
      </>
    );
  } else {
    return (
      <Card className="p-20">
        <h2 className="text-center pt-10 mb-5">Directors</h2>
        <div className="flex flex-col p-10 w-full flex-flex-col gap-4 space-y-5">
          <div className="grid grid-cols-3 place-items-start">
            <div className="text-xl col-span-2">Name of the Director:</div>
            <div>
              <p className="text-lg">Puneeth Rajkumar</p>
            </div>
          </div>
          <div className="grid grid-cols-3 place-items-start">
            <div className="text-xl col-span-2">DTO No.</div>
            <div>
              <p className="text-lg">901993992</p>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}
