"use client";
import React, { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch("https://dummyjson.com/products");
      const json = await res.json();
      setData(json["products"]);
    })();
  }, []);
  return (
    <div>
      {data.map((item, index) => {
        return <p>{item["title"]}</p>;
      })}
      <h1>This is About Page</h1>
    </div>
  );
};

export default page;
