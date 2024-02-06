"use client";
export const companiesRequest = async () => {
    const res = await fetch("/api/companies")
    const data = await res.json()
    console.log(data)
  }

export const annexuresRequest = async () => {
    const res = await fetch("/api/annexures")
    const data = await res.json()
    return data
  }