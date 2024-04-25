"use client";

import React, { useEffect, useState } from "react";
// import "./page.module.css";

function HomePage() {
  const [upgrades, setUpgrades] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/upgrades");
      const data = await res.json();
      setUpgrades(data);
    }
    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Cost</th>
          <th>Increase</th>
        </tr>
      </thead>
      <tbody>
        {upgrades.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.cost}</td>
            <td>{item.increase}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default HomePage;
