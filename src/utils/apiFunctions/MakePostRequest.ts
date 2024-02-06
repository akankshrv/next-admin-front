"use client";
export const makePostRequest = async () => {
  const res = await fetch("/api/companies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: 5,
      name: "Sample Corp2",
      panNumber: "PQR65432101",
      gstin: "76PQRA0987B2C3D41",
      iec: "IEC456789012",
      constitution: "Gov Limited",
    }),
  });
  const data = await res.json();
  console.log(data);
};
