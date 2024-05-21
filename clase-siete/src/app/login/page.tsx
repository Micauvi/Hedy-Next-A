
import Link from "next/link";

import { createClient } from "../utils/supabase/server";
import { redirect } from 'next/navigation';

export default async function LoginPage({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  console.log(searchParams);
  
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    return redirect('/');
  }

  const handleSignIn = async (formData: FormData) => {
    'use server';

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect('/login?message=Could not authenticate user');
    }

    return redirect('/');
  };


  return (
  
     <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-cyan-900 p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">Sign In</h2>
      <form
          className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground mb-4"
          action={handleSignIn}
        >
        <div className="mb-4">
          <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
           
            required
            className="shadow appearance-none border-2 rounded-lg w-full py-2 px-3 text-gray-200 bg-transparent leading-tight focus:outline-none focus:shadow-outline focus:border-cyan-600 border-cyan-950"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            
            required
            className="shadow appearance-none border-2 rounded-lg w-full py-2 px-3 text-gray-200 bg-transparent mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-cyan-600 border-cyan-950"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 text-gray-200 font-bold w-full py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
     
          >
            Sign In
          </button>
        </div>
          {searchParams?.message && (
            <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
              {searchParams.message}
            </p>
          )}
 </form>
      <p className="mt-6 text-center">
        Don't have an account?{' '}
        <Link
          href={"/register"}
          className="text-cyan-500 hover:text-cyan-600 font-bold"
        >
          Register
        </Link>
      </p>
    </div>
  </div>
  );
}
