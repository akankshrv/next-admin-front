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

const registerOfficeSchema = z.object({
  address: z.string(),
  tel: z.string(),
  fax: z.string(),
  email: z.string().email(),
});
export default function RegisteredOfficeComponent({
  edit,
}: Props): JSX.Element {
  const form = useForm<z.infer<typeof registerOfficeSchema>>({
    resolver: zodResolver(registerOfficeSchema),
    defaultValues: {
      address: "",
      tel: "",
      fax: "",
      email: "",
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
                name="address"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <div className="grid grid-cols-3">
                        <FormLabel className="text-lg flex items-center justify-start">
                          Address
                        </FormLabel>
                        <FormControl className="col-span-1">
                          <Input
                          className="w-full"
                            {...field}
                            placeholder="560, 3rd Floor, 9th A Main, Indiranagar, behind Coffee Day, Bengaluru, Karnataka 560038, India"
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
                name="tel"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <div className="grid grid-cols-3">
                        <FormLabel className="text-lg flex items-center justify-start">
                          Tel:
                        </FormLabel>
                        <FormControl className="col-span-2">
                          <Input
                            {...field}
                            placeholder="AAECI0133R1"
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
                name="fax"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <div className="grid grid-cols-3 ">
                        <FormLabel className="text-lg flex items-center justify-start">
                          Fax:
                        </FormLabel>
                        <FormControl className="col-span-2">
                          <Input
                            {...field}
                            placeholder="29AAECI0133R1Z5"
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
                name="email"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <div className="grid grid-cols-3 ">
                        <FormLabel className="text-lg flex items-center justify-start">
                          Email:
                        </FormLabel>
                        <FormControl className="col-span-2">
                          <Input {...field} placeholder="IEC" type="text" />
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
      <Card className="w-[700px]">
        <h2 className="text-center pt-10 mb-5">Registered Office</h2>
        <div className="flex flex-col p-10 w-full flex-flex-col gap-4 space-y-5">
          <div className="grid grid-cols-2 place-items-start ">
            <div className="text-xl">
              Address:
            </div>
            <div>
              <p className="text-lg">
                Singapore GardenSgublala Cross, Kanakapura Main Road,
                DoddaKalaSandraBangalore NO.19 Karnataka Bengaluru Urban
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 place-items-start ">
            <div className="text-xl">
              Telephone:
            </div>
            <div>
              <p className="text-lg">9090090909</p>
            </div>
          </div>
          <div className="grid grid-cols-2 place-items-start ">
            <div className="text-xl">Fax:</div>
            <div>
              <p className="text-lg">044 123 4567</p>
            </div>
          </div>
          <div className="grid grid-cols-2 place-items-start ">
            <div className="text-xl">
              E-mail:
            </div>
            <div>
              <p className="text-lg">company@email.com</p>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}
