import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Annexures } from "@/index";
import Link from "next/link";


const AnnexuresCompanies = async () => {
    async function getAnnexures(): Promise<Annexures> {
        const annexureResult = await fetch(`${process.env.BASE_URL}/api/annexures`);
        return annexureResult.json();
      }
      const annexures = await getAnnexures();
  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-5">
        {annexures.annexures.map((annexure: any) => (
          <Card key={annexure.id} className="flex flex-row justify-between">
            <CardHeader className="flex-row gap-4 items-center">
              <div>
                <div className="flex flex-row items-center gap-5 mb-5">
                  <Avatar>
                    {/* <AvatarImage alt="Avatar" src=""/> */}
                    <AvatarFallback>
                      {`${annexure.name[0]}
                      `}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle>{annexure.name}</CardTitle>
                </div>
                <div className="ml-5">
                  <CardDescription className="mb-10">
                    {annexure.header}
                  </CardDescription>
                  <CardContent>{annexure.description}</CardContent>
                  <CardFooter>
                    <Link href={annexure.link}>
                      <Button>View Annexure</Button>
                    </Link>
                  </CardFooter>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default AnnexuresCompanies;
