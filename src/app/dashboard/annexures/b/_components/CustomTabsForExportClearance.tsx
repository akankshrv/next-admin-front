"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CustomTabsForExportClearance = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };
  return (
    <>
      <div>
        <div className="flex flex-col list-reset gap-2 ml-4 mt-1">
          <div
            className={activeTab === 0 ? "active" : ""}
            onClick={() => handleTabClick(0)}
          >
            <Link
              href="/dashboard/annexures/b/export-clearance/resultant-product"
              passHref
            >
              <Button
                className={` w-56
                  ${
                    activeTab === 0
                      ? "active-link text-sm font-mono bg-blue-500 transition-colors hover:bg-blue-500 hover:text-white "
                      : "text-sm font-mono"
                  }`}
              >
                Resultant Product
              </Button>
            </Link>
          </div>
          <div
            className={activeTab === 1 ? "active" : ""}
            onClick={() => handleTabClick(1)}
          >
            <Link
              href="/dashboard/annexures/b/export-clearance/imported-goods-clearance"
              passHref
            >
              <Button
                className={` w-56
                ${
                  activeTab === 1
                    ? "active-link text-sm font-mono bg-blue-500 transition-colors hover:bg-blue-500 hover:text-white "
                    : "text-sm font-mono"
                }`}
              >
                Import Goods Clearance
              </Button>
            </Link>
          </div>
          <div
            className={activeTab === 2 ? "active" : ""}
            onClick={() => handleTabClick(2)}
          >
            <Link
              href="/dashboard/annexures/b/export-clearance/treatment-of-waste"
              passHref
            >
              <Button
                className={` w-56
                ${
                  activeTab === 2
                    ? "active-link text-sm font-mono bg-blue-500 transition-colors hover:bg-blue-500 hover:text-white "
                    : "text-sm font-mono"
                }`}
              >
                Treatment of Waste
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomTabsForExportClearance;
