import { NextResponse } from "next/server";

//USANDO MOCKAPI
export async function GET() {
  const res = await fetch(
    "https://663e399fe1913c476796fd5b.mockapi.io/comments"
  );
  const data = await res.json();
  
  return Response.json({ data });
}
//SE AGREGAN COSAS RANDOM
export async function POST(request: Request) {
  const requestData = await request.json();
  const newComment = {
    name: requestData.name,
    comment: requestData.comment,
  };
  const res = await fetch(
    "https://663e399fe1913c476796fd5b.mockapi.io/comments",
    {
      method: "POST",
      headers: {
        "Content-Type": "'application/json",
      },
      body: JSON.stringify(newComment),
    }
  );
  const data = await res.json();
  return NextResponse.json(data);
}