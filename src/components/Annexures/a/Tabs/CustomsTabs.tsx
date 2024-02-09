"use client";
import React, { useState } from "react";
import { Button } from "../../../ui/button";
import CompanyDetails from "../CompanyDetails";
import WarehouseDetails from "../WarehouseDetails";
import Link from "next/link";
import classnames from "classnames";
import CustomOnlySection from "../CustomOnlySection";
import CompanyApproval from "../CustomsComponents/CompanyApproval";
import WareHouseApproval from "../CustomsComponents/WareHouseApproval";
import IssueOfLicence from "../CustomsComponents/IssueOfLicence";

const CustomsTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="flex list-reset gap-2 ml-10 mt-10">
        <div
          className={activeTab === 0 ? "active" : ""}
          onClick={() => handleTabClick(0)}
        >
          <Link href="#" passHref>
            <Button
              className={
                activeTab === 0
                  ? "active-link text-2xl bg-blue-500 transition-colors hover:bg-blue-800"
                  : "text-2xl"
              }
            >
              Company Approval
            </Button>
          </Link>
        </div>
        <div
          className={activeTab === 1 ? "active" : ""}
          onClick={() => handleTabClick(1)}
        >
          <Link href="#" passHref>
            <Button
              className={
                activeTab === 1
                  ? "active-link text-2xl bg-blue-500 transition-colors hover:bg-blue-800"
                  : "text-2xl"
              }
            >
              Warehouse Approval
            </Button>
          </Link>
        </div>
        <div
          className={activeTab === 2 ? "active" : ""}
          onClick={() => handleTabClick(2)}
        >
          <Link href="#" passHref>
            <Button
              className={
                activeTab === 2
                  ? "active-link text-2xl bg-blue-500 transition-colors hover:bg-blue-800"
                  : "text-2xl"
              }
            >
              Issue of License
            </Button>
          </Link>
        </div>
      </div>

      <div>
        {activeTab === 0 && (
          <div>
            <CompanyApproval />
          </div>
        )}
        {activeTab === 1 && (
          <div>
            <WareHouseApproval />
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <IssueOfLicence />
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomsTabs;
