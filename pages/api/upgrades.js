export default function ClickerUpgrades(req, res) {
  console.log("API route called");
  if (req.method === "GET") {
    const upgrades = [
      { id: 1, name: "Auto-Clicker", cost: 100, increase: 1 },
      { id: 2, name: "Enhanced Oven", cost: 500, increase: 5 },
      { id: 3, name: "Cookie Farm", cost: 1000, increase: 10 },
    ];

    res.status(200).json(upgrades);
  }
}
