"use client";
import React, { useState } from "react";
import { Button } from "../../../ui/button";
import Link from "next/link";
import PartA from "../PartAComponents/PartA";
import PartB from "../PartBComponents/PartB";
import { AnnexureD } from "@/index";

const CustomsTabs = ({ isDispatch }: AnnexureD): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);
  const [showPartB, setShowPartB] = useState(false); // Add state for controlling Part B visibility

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const handleTogglePartB = () => {
    setShowPartB(!showPartB); // Toggle Part B visibility
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
            <div className="flex justify-end pr-10">
              <div className="">
                {showPartB ? (
                  <h3 className="text-green-600">
                    The Goods has been dispatched, Part B is now available
                  </h3>
                ) : (
                  <Button className="w-96" onClick={handleTogglePartB}>
                    Confirm the dispatch
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}

        {isDispatch &&
          activeTab === 1 &&
          showPartB && ( // Check if isDispatch is true and showPartB is true
            <div>
              <PartB />
              <div className="flex justify-end pr-10">
                <div className="">
                  <Button className="w-96" >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default CustomsTabs;
