"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
const page = () => {
  const param = useSearchParams();
  return (
    <div>
      <h1>{param.get("name")}</h1>
      <h1>This is Profile Page</h1>
      <h1>It is work after git push</h1>
    </div>
  );
};

export default page;
