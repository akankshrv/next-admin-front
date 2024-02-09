"use client";
import React, { useState } from "react";
import { Button } from "../../ui/button";
import CompanyDetails from "./CompanyDetails";
import WarehouseDetails from "./WarehouseDetails";
import Link from "next/link";
import classnames from "classnames";
import CustomOnlySection from "./CustomOnlySection";

const TopTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index : number) => {
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
              Company Registration
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
              Warehouse
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
              Customs Only
            </Button>
          </Link>
        </div>
      </div>

      <div>
        {activeTab === 0 && (
          <div>
            <CompanyDetails />
          </div>
        )}
        {activeTab === 1 && (
          <div>
            <WarehouseDetails />
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <CustomOnlySection />
          </div>
        )}
      </div>
    </div>
  );
};

export default TopTabs;
