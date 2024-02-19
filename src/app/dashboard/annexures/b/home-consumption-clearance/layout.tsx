import React, { ReactNode } from "react";
import CustomTabsForHomeConsumption from "../_components/CustomTabsForHomeConsumption";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Your layout code here */}
      <div className=" absolute ">
        <CustomTabsForHomeConsumption />
      </div>
      <div className="z-0">{children}</div>
    </div>
  );
};

export default Layout;
