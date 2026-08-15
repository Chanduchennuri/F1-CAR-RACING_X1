import { Link } from "react-router-dom";

export default function ProfileDropdown() {
  return (
    <div
      className="
        invisible
        absolute
        right-0
        top-full
        z-50
        w-80
        pt-3
        opacity-0
        transition-all
        duration-200
        group-hover:visible
        group-hover:opacity-100
      "
    >
      <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-xl">

        {/* Header */}

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-500">
            <span className="text-lg">👤</span>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900">
              Welcome to F1 Racer
            </p>

            <p className="mt-0.5 text-xs text-gray-500">
              Sign in to personalize your experience
            </p>
          </div>

        </div>


        {/* OAuth */}

        <button
          type="button"
          className="
            mt-5
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-md
            border
            border-gray-200
            px-4
            py-2.5
            text-sm
            font-semibold
            text-gray-700
            transition
            hover:bg-gray-50
          "
        >
          <span className="font-bold">G</span>

          Continue with Google
        </button>


        {/* Divider */}

        <div className="my-4 flex items-center gap-3">

          <div className="h-px flex-1 bg-gray-100" />

          <span className="text-xs text-gray-400">
            OR
          </span>

          <div className="h-px flex-1 bg-gray-100" />

        </div>


        {/* Authentication */}

        <div className="grid grid-cols-2 gap-2">

          <Link
            to="/login"
            className="
              rounded-md
              border
              border-gray-200
              px-4
              py-2.5
              text-center
              text-sm
              font-semibold
              text-gray-700
              transition
              hover:border-red-600
              hover:text-red-600
            "
          >
            Sign In
          </Link>

          <Link
            to="/register"
            className="
              rounded-md
              bg-red-600
              px-4
              py-2.5
              text-center
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-red-700
            "
          >
            Sign Up
          </Link>

        </div>


        {/* Profile */}

        <div className="mt-4 border-t border-gray-100 pt-4">

          <Link
            to="/profile"
            className="
              block
              text-center
              text-sm
              font-semibold
              text-red-600
              transition
              hover:text-red-700
            "
          >
            View Profile →
          </Link>

        </div>

      </div>
    </div>
  );
}