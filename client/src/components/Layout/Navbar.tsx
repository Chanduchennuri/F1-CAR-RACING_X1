import { useState } from "react";
import {
  NavLink,
  Link,
  type NavLinkRenderProps,
} from "react-router-dom";

import { teamsData } from "../../data/Teams";
import ProfileDropdown from "../Profile/Profiledrop";
import f1logo from "../../assets/f1-logo.png";
const navItems = [
  { label: "Live", path: "/" },
  { label: "Schedule", path: "/schedule" },
  { label: "Results", path: "/results" },
  { label: "Standings", path: "/standings" },
  { label: "News", path: "/news" },
  { label: "Teams", path: "/teams" },
  { label: "Videos", path: "/videos" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [teamsOpen, setTeamsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">

      {/* ================= MAIN NAVBAR ================= */}

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">

        {/* ================= BRAND ================= */}

        <Link
          to="/"
          onClick={() => {
            setMobileMenuOpen(false);
            setTeamsOpen(false);
          }}
          className="flex items-center gap-3"
        ></Link>
          <img
             src={f1logo}
             alt="Formula 1"
            className="h-12 w-auto object-contain"
            />


        {/* ================= DESKTOP NAV ================= */}

        <nav className="hidden items-center gap-6 md:flex">

          {navItems.map((item) => {
/* ================= TEAMS ================= */

if (item.label === "Teams") {
  return (
    <div
      key={item.path}
      className="group relative flex items-center"
    >

      {/* Teams Link */}

      <NavLink
        to={item.path}
        className={({ isActive }: NavLinkRenderProps) =>
          `relative py-5 text-sm font-semibold transition ${
            isActive
              ? "text-red-600"
              : "text-gray-600 hover:text-gray-900"
          }`
        }
      >
        {({ isActive }: NavLinkRenderProps) => (
          <>
            <span className="flex items-center gap-1">
              Teams

              <span className="text-[9px] text-gray-400 transition-transform duration-200 group-hover:rotate-180">
                ▼
              </span>
            </span>

            {/* Active underline */}

            <span
              className={`absolute bottom-0 left-0 right-0 mx-auto h-0.5 rounded-full bg-red-600 transition ${
                isActive
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            />
          </>
        )}
      </NavLink>


      {/* ================= TEAMS DROPDOWN ================= */}

      <div
        className="
          invisible
          absolute
          left-1/2
          top-full
          z-50
          w-80
          -translate-x-1/2
          rounded-lg
          border
          border-gray-200
          bg-white
          p-5
          opacity-0
          shadow-xl
          transition-all
          duration-200

          group-hover:visible
          group-hover:opacity-100
        "
      >

        {/* Header */}

        <div className="mb-4">

          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            2026 Teams
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Explore the current F1 teams
          </p>

        </div>


        {/* Teams */}

        <div className="grid grid-cols-2 gap-1">

          {teamsData.map((team) => (
            <Link
              key={team.id}
              to={`/teams/${team.slug}`}
              className="
                rounded-md
                px-3
                py-2.5
                text-sm
                font-medium
                text-gray-700
                transition
                hover:bg-gray-50
                hover:text-red-600
              "
            >
              {team.name}
            </Link>
          ))}

        </div>


        {/* View All Teams */}

        <div className="mt-4 border-t border-gray-100 pt-4">

          <Link
            to="/teams"
            className="text-sm font-semibold text-red-600 transition hover:text-red-700"
          >
            View All Teams →
          </Link>

        </div>

      </div>

    </div>
  );
}


            /* ================= NORMAL NAV ITEMS ================= */

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }: NavLinkRenderProps) =>
                  `relative py-5 text-sm font-semibold transition ${
                    isActive
                      ? "text-red-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`
                }
              >
                {({ isActive }: NavLinkRenderProps) => (
                  <>
                    {item.label}

                    <span
                      className={`absolute bottom-0 left-0 right-0 mx-auto h-0.5 rounded-full bg-red-600 transition ${
                        isActive
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            );
          })}

        </nav>


        {/* ================= DESKTOP PROFILE ================= */}

        {/* ================= DESKTOP PROFILE ================= */}

<div className="group relative hidden md:block">

  <Link
    to="/profile"
    className="
      flex
      items-center
      gap-2
      rounded-md
      border
      border-gray-200
      px-4
      py-2
      text-sm
      font-semibold
      text-gray-700
      transition
      hover:border-red-600
      hover:text-red-600
    "
  >
    <span className="text-base">
      👤
    </span>

    Profile
  </Link>

  <ProfileDropdown />

</div>

        {/* ================= MOBILE BUTTON ================= */}

        <button
          type="button"
          onClick={() =>
            setMobileMenuOpen((previous) => !previous)
          }
          className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 text-gray-700 transition hover:border-gray-300 hover:bg-gray-50 md:hidden"
          aria-label={
            mobileMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <span className="text-xl leading-none">
              ×
            </span>
          ) : (
            <div className="flex flex-col gap-1">
              <span className="block h-0.5 w-5 bg-gray-700" />
              <span className="block h-0.5 w-5 bg-gray-700" />
              <span className="block h-0.5 w-5 bg-gray-700" />
            </div>
          )}
        </button>

      </div>


      {/* ================= MOBILE MENU ================= */}

      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">

          <nav className="mx-auto max-w-7xl px-4 py-3 sm:px-6">

            <div className="flex flex-col">

              {navItems.map((item) => {

                /* ================= MOBILE TEAMS ================= */

                if (item.label === "Teams") {
                  return (
                    <div key={item.path}>

                      <div className="flex items-center border-b border-gray-100">

                        <NavLink
                          to="/teams"
                          onClick={() =>
                            setMobileMenuOpen(false)
                          }
                          className={({ isActive }: NavLinkRenderProps) =>
                            `flex-1 px-2 py-4 text-sm font-semibold transition ${
                              isActive
                                ? "text-red-600"
                                : "text-gray-600 hover:text-gray-900"
                            }`
                          }
                        >
                          Teams
                        </NavLink>


                        <button
                          type="button"
                          onClick={() =>
                            setTeamsOpen(
                              (previous) => !previous
                            )
                          }
                          className="px-4 py-4 text-gray-500"
                          aria-label="Open teams menu"
                        >
                          <span
                            className={`inline-block text-xs transition-transform ${
                              teamsOpen
                                ? "rotate-180"
                                : ""
                            }`}
                          >
                            ▼
                          </span>
                        </button>

                      </div>


                      {/* Mobile Teams Dropdown */}

                      {teamsOpen && (
                        <div className="bg-gray-50 px-4 py-2">

                          {teamsData.map((team) => (
                            <Link
                              key={team.id}
                              to={`/teams/${team.slug}`}
                              onClick={() => {
                                setTeamsOpen(false);
                                setMobileMenuOpen(false);
                              }}
                              className="block border-b border-gray-100 px-3 py-3 text-sm text-gray-600 last:border-0 hover:text-red-600"
                            >
                              {team.name}
                            </Link>
                          ))}

                        </div>
                      )}

                    </div>
                  );
                }


                /* ================= NORMAL MOBILE ITEMS ================= */

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() =>
                      setMobileMenuOpen(false)
                    }
                    className={({ isActive }: NavLinkRenderProps) =>
                      `border-b border-gray-100 px-2 py-4 text-sm font-semibold transition ${
                        isActive
                          ? "border-l-2 border-l-red-600 bg-red-50 pl-4 text-red-600"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                );
              })}


              {/* Profile */}

              <NavLink
                to="/profile"
                onClick={() =>
                  setMobileMenuOpen(false)
                }
                className={({ isActive }: NavLinkRenderProps) =>
                  `mt-2 px-2 py-4 text-sm font-semibold transition ${
                    isActive
                      ? "text-red-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`
                }
              >
                Profile
              </NavLink>

            </div>

          </nav>

        </div>
      )}

    </header>
  );
}