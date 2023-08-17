"use client";
import React from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

const page = () => {
  const route = useRouter();
  const Go = () => {
    route.push("/about");
  };
  return (
    <div>
      <h1 className={styles.module}>This is Home Page</h1>
      <button onClick={Go}>Click Here to go about</button>
    </div>
  );
};

export default page;
