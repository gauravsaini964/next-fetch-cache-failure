export default async function getRootNavData() {
  const res = await fetch("https://mocki.io/v1/e7dc4712-6816-437e-a660-99f5477fe9f4", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  // const { data: homepageData } = await getCmsData();
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
