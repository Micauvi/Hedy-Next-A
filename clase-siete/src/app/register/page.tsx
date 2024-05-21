import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/app/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function RegisterPage({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    return redirect("/");
  }

  const signUp = async (formData: FormData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;
    const supabase = createClient();

    if (confirmPassword !== password) {
      return redirect("/register?message=Passwords do not match");
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      return redirect("/register?message=Could not authenticate user");
    }
    return redirect(
      `/register?message=Check email (${email}) to continue sign in process`
    );
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-cyan-900 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Sign Up
        </h2>
        <form action={signUp}>
          <div className="mb-4">
            <label
              className="block text-gray-200 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="shadow appearance-none border-2 rounded-lg w-full py-2 px-3 text-gray-100 bg-transparent leading-tight focus:outline-none focus:shadow-outline focus:border-cyan-600 border-cyan-950"
              placeholder="you@example.com"
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-gray-200 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="shadow appearance-none border-2 rounded-lg w-full py-2 px-3 text-gray-100 bg-transparent mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-cyan-600 border-cyan-950"
              placeholder="••••••••"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-200 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              required
              className="shadow appearance-none border-2 rounded-lg w-full py-2 px-3 text-gray-200 bg-transparent mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-cyan-600 border-cyan-950"
              placeholder="••••••••"
            />
          </div>
          {searchParams?.message && (
            <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
              {searchParams.message}
            </p>
          )}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-gray-200 font-bold w-full py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="mt-6 text-center">
          Do you have an account?{" "}
          <Link
            href={"/login"}
            className="text-cyan-500 hover:text-cyan-600 font-bold"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
