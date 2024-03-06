import { NextResponse } from "next/server";
import { ConnectDb } from "@/helper/db";

export function GET() {
  ConnectDb();
  const user = [
    {
      name: "joker",
      address: "hhjjj",
    },
    {
      name: "noker",
      address: "hhjjj",
    },
    {
      name: "toker",
      address: "hhjjj",
    },
    {
      name: "poker",
      address: "hhjjj",
    },
  ];

  return NextResponse.json(user);
}

