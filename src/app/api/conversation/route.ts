import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { mfirestore_db } from "@/shared/firestore-handlers/firestore-config";
import { ObjectId } from "mongodb";
import { ALLOWED_ORIGIN } from "@/shared/constants";

export const POST = async (req: Request) => {
  const token = req.headers.get("authentication");
  if (!token) return NextResponse.json({ status: 401 });

  const check_validity = jwt.verify(
    token as string,
    process.env.JWT_SECRET as string
  );
  if (!check_validity) {
    return NextResponse.json({ status: 401 });
  }
  const req_user = jwt.decode(token as string) as any;

  //
  console.log("auth_tokenauth_token", typeof req_user, req);

  const req_data = await req.formData();

  const conversation_table = mfirestore_db.collection("conversations");
  if (req_data.get("action") == "start-conversation") {
    const insert = await conversation_table.insertOne({
      title: req_data.get("title"),
      created_at: new Date(Date.now()),
      updated_at: new Date(Date.now()),
      user_id: req_user.data.user.id,
    });
    if (!insert.acknowledged) {
      return NextResponse.json(
        { message: "Could not insert data" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { conversation_id: insert.insertedId },
      { status: 201 }
    );
  } else if (req_data.get("action") == "add-chat") {
    const chat_data = JSON.parse(req_data.get("chat_data") as string).map(
      (chat: any) => ({ ...chat, created_at: new Date(Date.now()) })
    );
    const get_data = await conversation_table.findOne({
      _id: new ObjectId(req_data.get("conversation_id") as string),
    });
    console.log("get_dataget_data", get_data, get_data?.chats, chat_data);
    /* const update_insert = await conversation_table.updateOne(
            {_id: new ObjectId(req_data.get("conversation_id") as string)}, 
            {
                $set: {
                    chats: [
                        ...(get_data?.chats || []),
                        ...chat_data
                    ],
                    updated_at: new Date(Date.now())
                }
            }) */
  }

  return NextResponse.json({ save: true }, { status: 200 });
};

export const GET = (/* req: Request */) => {
  console.log("I am in the get route");

  return NextResponse.json({});
};

