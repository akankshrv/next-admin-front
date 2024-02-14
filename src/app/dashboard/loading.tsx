import Spinner from "@/components/ui/spinner";
import React from "react";

function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Spinner />
    </div>
  );
}

export default Loading;
