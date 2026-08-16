import PageContainer from "../components/Layout/PageContainer";
import { Link } from "react-router-dom";
import { useAuth } from "../context/Authcontext";

export default function Profile() {
  const { user, loading, logout } = useAuth();

  // Loading state
  if (loading) {
    return (
      <PageContainer className="py-8">

        <div className="mx-auto max-w-2xl">

          <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">

            <p className="text-sm text-gray-500">
              Loading your profile...
            </p>

          </div>

        </div>

      </PageContainer>
    );
  }

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
            {user
              ? "Manage your F1 Racer account and preferences."
              : "Sign in to personalize your F1 experience."}
          </p>

        </div>


        {/* ACCOUNT CARD */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

          {/* PROFILE HEADER */}
          <div className="border-b border-gray-100 px-6 py-6 sm:px-8">

            <div className="flex items-center justify-between gap-4">

              <div className="flex items-center gap-4">

                {/* AVATAR */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-red-100 text-xl font-bold text-red-600">

                  {user
                    ? user.username.charAt(0).toUpperCase()
                    : "?"}

                </div>


                {/* USER INFORMATION */}
                <div>

                  <h2 className="text-lg font-semibold text-gray-900">

                    {user
                      ? user.username
                      : "Welcome to F1 Racer"}

                  </h2>

                  <p className="mt-1 text-sm text-gray-500">

                    {user
                      ? user.email
                      : "You're currently not signed in."}

                  </p>

                </div>

              </div>


              {/* STATUS */}
              {user && (
                <div className="hidden sm:block">

                  <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">

                    <span className="h-2 w-2 rounded-full bg-green-500" />

                    Signed in

                  </span>

                </div>
              )}

            </div>

          </div>


          {/* AUTH / ACCOUNT SECTION */}

          {!user ? (

            /* =========================
               LOGGED OUT
            ========================== */

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

          ) : (

            /* =========================
               LOGGED IN
            ========================== */

            <div className="px-6 py-6 sm:px-8">

              <div>

                <h3 className="font-semibold text-gray-900">
                  Welcome back, {user.username}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Your F1 Racer account is ready. More profile features
                  will be added here later.
                </p>

              </div>


              {/* ACCOUNT DETAILS */}

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">

                <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">

                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    Username
                  </p>

                  <p className="mt-2 text-sm font-semibold text-gray-900">
                    {user.username}
                  </p>

                </div>


                <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">

                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    Email
                  </p>

                  <p className="mt-2 break-all text-sm font-semibold text-gray-900">
                    {user.email}
                  </p>

                </div>

              </div>


              {/* FUTURE PROFILE */}

              <div className="mt-6 rounded-xl border border-dashed border-gray-200 p-5">

                <p className="text-sm font-semibold text-gray-900">
                  Your F1 profile
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Favorite drivers, teams, races, watch history and other
                  personalization features will appear here.
                </p>

              </div>


              {/* LOGOUT */}

              <button
                type="button"
                onClick={logout}
                className="mt-6 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-red-600 hover:text-red-600"
              >
                Sign Out
              </button>

            </div>

          )}

        </div>


        {/* BENEFITS */}

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">

          <div className="rounded-xl border border-gray-200 bg-white p-5">

            <div className="text-xl">
              🏁
            </div>

            <h3 className="mt-3 text-sm font-semibold text-gray-900">
              Follow races
            </h3>

            <p className="mt-1 text-xs leading-5 text-gray-500">
              Keep track of the races and sessions you care about.
            </p>

          </div>


          <div className="rounded-xl border border-gray-200 bg-white p-5">

            <div className="text-xl">
              ⭐
            </div>

            <h3 className="mt-3 text-sm font-semibold text-gray-900">
              Save favorites
            </h3>

            <p className="mt-1 text-xs leading-5 text-gray-500">
              Follow your favorite drivers and teams.
            </p>

          </div>


          <div className="rounded-xl border border-gray-200 bg-white p-5">

            <div className="text-xl">
              ⚙️
            </div>

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