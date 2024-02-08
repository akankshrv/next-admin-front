import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import aurigraphLogo from "@/assets/aurigraphLogo.jpg";

export default function Header({ admin }: { admin: boolean }) {
  return (
    <>
      <div className="flex justify-between px-4 items-center mx-10">
        <Link href="/dashboard/annexures">
          <div className="flex items-center">
            <Image src={aurigraphLogo} width={100} height={56} alt="Logo" />
            <h1 className="text-center ml-5 items-center ">CBW</h1>
          </div>
        </Link>

        <div className="space-x-10">
          <Link href="/dashboard">
            <Button className="font-bold py-2 px-4 rounded ">Admin View</Button>
          </Link>
          <Link href="/dashboard/annexures">
            <Button className="font-bold py-2 px-4 rounded ">Annexures</Button>
          </Link>
          <Link href="/">
            <Button className="ml-auto font-bold py-2 px-4 rounded ">
              Logout
            </Button>
          </Link>
        </div>
      </div>
      <hr />
    </>
  );
}
