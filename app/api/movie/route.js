import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    console.log("kajfnvnal");
    return NextResponse.json({ message: "sucess" });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Internal server error" });
  }
}
