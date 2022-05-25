import React from "react";

export default function App() {
  var myHeaders = new Headers();
  myHeaders.append("apikey", "fkXP6uAr5b1K6WKV5teKHnDYX1OzyK6W");
  myHeaders.append("date", "2013-01-01");
  const from = "EUR";
  const to = "INR";
  const amount = 500;
  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
    // date: "2013-01-01",
  };
  fetch(
    `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
  return <div>App</div>;
}
