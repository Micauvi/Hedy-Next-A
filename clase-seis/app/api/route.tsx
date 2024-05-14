
import { NextResponse } from "next/server";
import { comments } from "../data";


// //USANDO MOCKAPI
export async function GET() {
  const res = await fetch(
    "https://663e399fe1913c476796fd5b.mockapi.io/comments"
  );
  const dataComments = await res.json();
  

  return Response.json({dataComments})
}

export async function POST(request: Request) {
  const requestData = await request.json();
  const newComment = {
    name: requestData.name,
    id: comments.length + 1,
    comment: requestData.comment,
  };

  comments.push(newComment);

  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}

//POST A MOCKAPI, PERO SE AGREGAN COSAS RANDOM

// export async function POST(request: Request) {
//   const requestData = await request.json();
//   const newComment = {
//     name: requestData.name,
//     comment: requestData.comment,
//   };
//   const res = await fetch(
//     "https://663e399fe1913c476796fd5b.mockapi.io/comments",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "'application/json",
//       },
//       body: JSON.stringify(newComment),
//     }
//   )
  
    
//   const data = await res.json();
//   return NextResponse.json(data);
// }

// export async function GET() {
//   return Response.json({ comments });
// }