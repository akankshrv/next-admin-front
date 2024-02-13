
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export default function AnnexureBLayout(props: {
    children: React.ReactNode;
    modal: React.ReactNode;
  }) {
    return <>
    <Link href="/dashboard/annexures" className="z-10">
        <Button className="w-12 h-12  ">
          <BsFillArrowLeftCircleFill className="w-24 h-24" />
        </Button>
      </Link>
      <div className="z-0 -mt-20 ml-4">

    {props.children}
      </div>
    
    </>;
  }
  