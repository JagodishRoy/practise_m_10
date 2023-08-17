import React from "react";
async function getData() {
  const data = await fetch("https://dummyjson.com/products");
  const json = await data.json();
  return json["products"];
}
const page = async () => {
  const data = await getData();
  return (
    <div>
      {data.map((item, index) => {
        return <p>{item["price"]}</p>;
      })}
      <h1>This is Product Page</h1>
    </div>
  );
};

export default page;
