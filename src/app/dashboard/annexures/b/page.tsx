"use client";
import FormAnnexureB from "@/components/Annexures/FormAnnexureB";
import React, { useState } from "react";

const AnnexureB = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [seletedTab, setSelectedTab] = useState(1);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [showTable, setShowTable] = useState(false);

  return (
    <div>
      <FormAnnexureB />
    </div>
  );
};

export default AnnexureB;
