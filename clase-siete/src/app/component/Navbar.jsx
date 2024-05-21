import { redirect } from "next/navigation";
import { createClient } from "@/app/utils/supabase/server";

const Navbar = async () => {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const handleLogout = async () => {
    "use server";
    const supabase = createClient();
    await supabase.auth.signOut();
    redirect("/login");
  };

  return (
    session && (
      <div className="bg-transparent flex justify-around items-center p-5
      
      ">
        <h1> {session.user.email} </h1>
        <form action={handleLogout}>
          <button className="border-2 border-cyan-900 rounded-lg w-32 h-9 bg-cyan-600 hover:bg-cyan-700">Logout</button>
        </form>
      </div>
    )
  );
};

export default Navbar;
