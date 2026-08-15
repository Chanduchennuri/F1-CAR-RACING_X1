import PageContainer from "../components/Layout/Pagecontainer";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <PageContainer className="py-8">

      <div className="mx-auto max-w-2xl">

        {/* HEADER */}
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-red-600">
            F1 Racer
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            Your Profile
          </h1>

          <p className="mt-2 text-gray-500">
            Sign in to personalize your F1 experience.
          </p>
        </div>

        {/* ACCOUNT CARD */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

          {/* PROFILE HEADER */}
          <div className="border-b border-gray-100 px-6 py-6 sm:px-8">

            <div className="flex items-center gap-4">

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-xl font-bold text-gray-400">
                ?
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Welcome to F1 Racer
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  You're currently not signed in.
                </p>
              </div>

            </div>

          </div>

          {/* AUTH SECTION */}
          <div className="px-6 py-6 sm:px-8">

            <div className="mb-6">
              <h3 className="font-semibold text-gray-900">
                Sign in to continue
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Save your preferences, follow your favorite drivers and
                personalize your F1 experience.
              </p>
            </div>

            {/* GOOGLE */}
            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
            >
              <span className="text-base font-bold">
                G
              </span>

              Continue with Google
            </button>

            {/* OTHER OAUTH */}
            <button
              type="button"
              className="mt-3 flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
            >
              <span className="text-base font-bold">
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

            {/* NORMAL LOGIN */}
            <Link
              to="/login"
              className="flex w-full items-center justify-center rounded-lg bg-red-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Sign in with email
            </Link>

            {/* REGISTER */}
            <p className="mt-6 text-center text-sm text-gray-500">

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

        {/* BENEFITS */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">

          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <div className="text-xl">🏁</div>

            <h3 className="mt-3 text-sm font-semibold text-gray-900">
              Follow races
            </h3>

            <p className="mt-1 text-xs leading-5 text-gray-500">
              Keep track of the races and sessions you care about.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <div className="text-xl">⭐</div>

            <h3 className="mt-3 text-sm font-semibold text-gray-900">
              Save favorites
            </h3>

            <p className="mt-1 text-xs leading-5 text-gray-500">
              Follow your favorite drivers and teams.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <div className="text-xl">⚙️</div>

            <h3 className="mt-3 text-sm font-semibold text-gray-900">
              Personalize
            </h3>

            <p className="mt-1 text-xs leading-5 text-gray-500">
              Customize your F1 Racer experience.
            </p>
          </div>

        </div>

      </div>

    </PageContainer>
  );
}