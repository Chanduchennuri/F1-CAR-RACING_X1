import { Link } from "react-router-dom";
import PageContainer from "../components/Layout/Pagecontainer";
import FormInput from "../components/FormInput";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <PageContainer className="flex min-h-[calc(100vh-160px)] items-center justify-center py-10">

      <div className="w-full max-w-md">

        {/* HEADER */}
        <div className="mb-8 text-center">

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-sm font-bold text-white">
            F1
          </div>

          <h1 className="mt-5 text-2xl font-bold tracking-tight text-gray-900">
            Welcome back
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Sign in to continue to F1 Racer
          </p>

        </div>

        {/* LOGIN CARD */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

          {/* GOOGLE */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
          >
            <span className="font-bold">
              G
            </span>

            Continue with Google
          </button>

          {/* OTHER OAUTH */}
          <button
            type="button"
            className="mt-3 flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
          >
            <span className="font-bold">
              O
            </span>

            Continue with another account
          </button>

          {/* DIVIDER */}
          <div className="my-6 flex items-center gap-4">

            <div className="h-px flex-1 bg-gray-200" />

            <span className="text-xs font-medium uppercase tracking-wide text-gray-400">
              or
            </span>

            <div className="h-px flex-1 bg-gray-200" />

          </div>

          {/* FORM */}
          <form className="space-y-4">

            <FormInput
              type="email"
              name="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div>

              <FormInput
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="mt-2 text-right">
                <Link
                  to="/forgot-password"
                  className="text-xs font-medium text-red-600 hover:text-red-700"
                >
                  Forgot password?
                </Link>
              </div>

            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full rounded-lg bg-red-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Sign in
            </button>

          </form>

          {/* REGISTER */}
          <div className="mt-6 border-t border-gray-100 pt-6 text-center">

            <p className="text-sm text-gray-500">
              Don't have an account?{" "}

              <Link
                to="/register"
                className="font-semibold text-red-600 hover:text-red-700"
              >
                Create an account
              </Link>
            </p>

          </div>

        </div>

        {/* BACK TO HOME */}
        <div className="mt-6 text-center">

          <Link
            to="/"
            className="text-sm text-gray-500 transition hover:text-gray-900"
          >
            ← Back to F1 Racer
          </Link>

        </div>

      </div>

    </PageContainer>
  );
}