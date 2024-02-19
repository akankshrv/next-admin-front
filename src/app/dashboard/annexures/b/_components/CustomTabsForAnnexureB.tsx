"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";

const CustomTabsForAnnexureB = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };
  return (
    <div>
      <div className="flex list-reset gap-2 ml-4 mt-4">
        <div
          className={activeTab === 0 ? "active" : ""}
          onClick={() => handleTabClick(0)}
        >
          <Link href="/dashboard/annexures/b" passHref>
            <Button
              className={
                activeTab === 0
                  ? "active-link text-sm font-mono bg-blue-500 transition-colors hover:bg-blue-500 hover:text-white "
                  : "text-sm font-mono"
              }
            >
              Main
            </Button>
          </Link>
        </div>
        <div
          className={activeTab === 1 ? "active" : ""}
          onClick={() => handleTabClick(1)}
        >
          <Link href="/dashboard/annexures/b/receipts" passHref>
            <Button
              className={
                activeTab === 1
                  ? "active-link text-sm font-mono bg-blue-500 transition-colors hover:bg-blue-500 hover:text-white "
                  : "text-sm font-mono"
              }
            >
              Receipts (Imports)
            </Button>
          </Link>
        </div>
        <div
          className={activeTab === 2 ? "active" : ""}
          onClick={() => handleTabClick(2)}
        >
          <Link href="/dashboard/annexures/b/receipts-dta" passHref>
            <Button
              className={
                activeTab === 2
                  ? "active-link text-sm font-mono bg-blue-500 transition-colors hover:bg-blue-500 hover:text-white "
                  : "text-sm font-mono"
              }
            >
              Reciepts(dta)
            </Button>
          </Link>
        </div>
        <div
          className={activeTab === 3 ? "active" : ""}
          onClick={() => handleTabClick(3)}
        >
          <Link href="/dashboard/annexures/b/processing" passHref>
            <Button
              className={
                activeTab === 3
                  ? "active-link text-sm font-mono bg-blue-500 transition-colors hover:bg-blue-500 hover:text-white "
                  : "text-sm font-mono"
              }
            >
              Processing
            </Button>
          </Link>
        </div>
        <div
          className={activeTab === 4 ? "active" : ""}
          onClick={() => handleTabClick(4)}
        >
          <Link href="/dashboard/annexures/b/returns-to-unit" passHref>
            <Button
              className={
                activeTab === 4
                  ? "active-link text-sm font-mono bg-blue-500 transition-colors hover:bg-blue-500 hover:text-white "
                  : "text-sm font-mono"
              }
            >
              Returns to unit
            </Button>
          </Link>
        </div>
        <div
          className={activeTab === 5 ? "active" : ""}
          onClick={() => handleTabClick(5)}
        >
          <Link href="/dashboard/annexures/b/export-clearance/imported-goods-clearance" passHref>
            <Button
              className={
                activeTab === 5
                  ? "active-link text-sm font-mono bg-blue-500 transition-colors hover:bg-blue-500 hover:text-white "
                  : "text-sm font-mono"
              }
            >
              Clearance of Export
            </Button>
          </Link>
        </div>
        <div
          className={activeTab === 6 ? "active" : ""}
          onClick={() => handleTabClick(6)}
        >
          <Link href="/dashboard/annexures/b/home-consumption-clearance/imported-goods" passHref>
            <Button
              className={
                activeTab === 6
                  ? "active-link text-sm bg-blue-500 transition-colors hover:bg-blue-500 hover:text-white "
                  : "text-sm font-mono"
              }
            >
              Clearance of Home Consumption Goods
            </Button>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default CustomTabsForAnnexureB;
