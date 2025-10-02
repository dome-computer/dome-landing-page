/* import type { NextApiRequest, NextApiResponse } from 'next'
 */ import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: Request) => {
  // if (req.method == "post") {
  // }
  const f_data = await req.formData();

  console.log("tokentokentoken", f_data);

  if (!f_data.get("token")) {
    return NextResponse.json({}, { status: 400 });
  }

  const check_validity = jwt.verify(
    f_data.get("token") as string,
    process.env.JWT_SECRET as string
  );

  return NextResponse.json({ is_valid: check_validity }, { status: 200 });
};

export const GET = (/* req: Request */) => {
  console.log("I am in the get route");

  return NextResponse.json({});
};

export const OPTIONS = async (request: NextRequest) => {
  return new NextResponse('', {
    status: 200
  })
}
