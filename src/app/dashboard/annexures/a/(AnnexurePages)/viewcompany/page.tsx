import ViewCompanyComponent from "@/components/Annexures/a/ViewCompany/ViewCompanyComponent";
import { Button } from "react-admin";

export default function ViewCompany() {
  return (
    <main>
      <ViewCompanyComponent edit={false}/>
    </main>
  );
}
