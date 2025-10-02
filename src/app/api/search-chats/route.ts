import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { mfirestore_db } from "@/shared/firestore-handlers/firestore-config";
import { ALLOWED_ORIGIN } from "@/shared/constants";
/* import { ObjectId } from 'mongodb';
 */
export const POST = async (req: Request) => {
  console.log("got to the search chat route");
  const token = req.headers.get("authentication");
  if (!token) return NextResponse.json({ status: 401 });

  const check_validity = jwt.verify(
    token as string,
    process.env.JWT_SECRET as string
  );
  if (!check_validity) {
    return NextResponse.json({ status: 401 });
  }
  // const req_user = jwt.decode(token as string) as any

  const req_data = await req.formData();

  const conversation_table = mfirestore_db.collection("conversations");

  const matches = await conversation_table
    .find({
      $or: [
        {
          "chats.content": {
            $regex: req_data.get("search_value"),
            $options: "i",
          },
        },
        {
          "chats.title": {
            $regex: req_data.get("search_value"),
            $options: "i",
          },
        },
      ],
    })
    .toArray();

  console.log("matchesmatches", matches);

  return NextResponse.json({ matches }, { status: 200 });
};

export const GET = (/* req: Request */) => {
  console.log("I am in the get route");

  return NextResponse.json({});
};
