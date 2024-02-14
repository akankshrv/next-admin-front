"use client";
import React, { useState } from "react";
import { Button } from "../../../ui/button";

import Link from "next/link";
import PartA from "../PartAComponents/PartA";
import PartB from "../PartBComponents/PartB";

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
                  ? "active-link text-md bg-blue-500 transition-colors hover:bg-blue-800"
                  : "text-md"
              }
            >
              Part A
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
                  ? "active-link text-md bg-blue-500 transition-colors hover:bg-blue-800"
                  : "text-md"
              }
            >
              Part B
            </Button>
          </Link>
        </div>
      </div>

      <div>
        {activeTab === 0 && (
          <div>
            <PartA />
          </div>
        )}
        {activeTab === 1 && <div><PartB /></div>}
      </div>
    </div>
  );
};

export default CustomsTabs;
