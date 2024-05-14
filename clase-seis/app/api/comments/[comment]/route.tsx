// import { comments } from "@/app/data";
import { NextResponse } from "next/server";

// export async function GET(request, { params }) {
//   const commentId = parseInt(params.comment, 10);
//   const comment = comments.find((comment) => comment.id === commentId);
  
//   return NextResponse.json(comment);
// }
//CON MOCKAPI
export async function GET(request, { params }) {
    const res = await fetch(
        `https://663e399fe1913c476796fd5b.mockapi.io/comments/${params.comment}`
    );
  const data = await res.json();
  return NextResponse.json(data);
}
