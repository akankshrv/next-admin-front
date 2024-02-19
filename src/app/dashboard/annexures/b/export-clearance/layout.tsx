import React, { ReactNode } from "react";
import CustomTabsForExportClearance from "../_components/CustomTabsForExportClearance";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <div className=" absolute ">
        <CustomTabsForExportClearance />
      </div>
      {/* Your layout code here */}
      <div className="z-0">{children}</div>
    </div>
  );
};

export default Layout;
