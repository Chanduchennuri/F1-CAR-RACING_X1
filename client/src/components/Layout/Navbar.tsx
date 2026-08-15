import { useState } from "react";
import { NavLink, Link ,
   type NavLinkRenderProps
} from "react-router-dom";

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

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">

      {/* Main Navbar */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* ================= BRAND ================= */}

        <Link
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-3"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-red-600 text-sm font-black text-white">
            F1
          </div>

          <div>
            <p className="text-sm font-black tracking-tight text-gray-900">
              F1 RACER
            </p>

            <p className="hidden text-[9px] font-medium uppercase tracking-[0.2em] text-gray-400 sm:block">
              Live Motorsport
            </p>
          </div>
        </Link>


        {/* ================= DESKTOP NAV ================= */}
<nav className="hidden items-center gap-6 md:flex">

  {navItems.map((item) => (
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
              isActive ? "opacity-100" : "opacity-0"
            }`}
          />
        </>
      )}
    </NavLink>
  ))}

</nav>


        {/* ================= DESKTOP PROFILE ================= */}

        <Link
          to="/profile"
          className="hidden rounded-md border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-red-600 hover:text-red-600 md:block"
        >
          Profile
        </Link>


        {/* ================= MOBILE BUTTON ================= */}

        <button
  type="button"
  onClick={() => setMobileMenuOpen((previous) => !previous)}
  className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 text-gray-700 transition hover:border-gray-300 hover:bg-gray-50 md:hidden"
  aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
  aria-expanded={mobileMenuOpen}
>
  {mobileMenuOpen ? (
    <span className="text-xl leading-none">×</span>
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

        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }:NavLinkRenderProps) =>
              `border-b border-gray-100 px-2 py-4 text-sm font-semibold transition ${
                isActive
                  ? "border-l-2 border-l-red-600 bg-red-50 pl-4 text-red-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}

        {/* Profile */}

        <NavLink
          to="/profile"
          onClick={() => setMobileMenuOpen(false)}
          className={({ isActive }:NavLinkRenderProps) =>
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