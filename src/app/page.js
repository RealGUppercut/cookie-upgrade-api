"use client";

import React, { useEffect, useState } from "react";

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
    <div>
      <ul>
        {upgrades.map((item) => (
          <li key={item.id}>
            Name: {item.name}, Cost: {item.cost}, Increase: {item.increase}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
