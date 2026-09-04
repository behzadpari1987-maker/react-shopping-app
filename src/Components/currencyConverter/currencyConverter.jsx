import { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const CurrencyConverter = () => {

  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("EUR");
  const [to, setTo] = useState("USD");

 const { data, isLoading, isError } = useQuery({
  queryKey: ["exchangeRate", from, to],
  queryFn: () => {
    return axios
      .get(`https://api.frankfurter.dev/v2/rate/${from}/${to}`)
      .then((res) => res.data);
  },
});
 

 const result =
  amount && data
    ? (Number(amount) * data.rate).toFixed(2)
    : "";

  return (

  <div className="card shadow p-4 mx-auto" style={{ maxWidth: "450px" }}>
  <h3>Currency Converter</h3>

      <input
        type="number"
        className="form-control mx-auto mt-3"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <div className="mt-3">

        <select
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="form-select mx-auto"
          style={{ maxWidth: "400px" }}
        >
          <option value="EUR">Euro</option>
          <option value="USD">US Dollar</option>
        </select>

      </div>

      <div className="mt-3">

        <select
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="form-select mx-auto"
          style={{ maxWidth: "400px" }}
        >
          <option value="USD">US Dollar</option>
          <option value="EUR">Euro</option>
        </select>

      </div>

      {isLoading && <p className="mt-3">Loading...</p>}

      {isError && (
        <p className="text-danger mt-3">
          Error loading exchange rate
        </p>
      )}

      {result && (
        <h4 className="mt-4">
          {amount} {from} = {result} {to}
        </h4>
      )}

    </div>
  );
};