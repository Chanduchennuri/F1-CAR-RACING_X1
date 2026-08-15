import { Link } from "react-router-dom";
import f1Logo from "../../assets/f1-logo.png";
import footerImage from "../../assets/racers.png";

const footerLinks = {
  platform: [
    { label: "Live", path: "/" },
    { label: "Schedule", path: "/schedule" },
    { label: "Results", path: "/results" },
    { label: "Standings", path: "/standings" },
  ],

  information: [
    { label: "News", path: "/news" },
    { label: "Teams", path: "/teams" },
    { label: "Videos", path: "/videos" },
    { label: "Profile", path: "/profile" },
  ],
};

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-gray-950 text-white">

      {/* =====================================================
          RACING IMAGE SECTION
      ====================================================== */}

      <section className="relative overflow-hidden">

        {/* Background Image */}

        <img
          src={footerImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-black/75" />

        {/* Subtle Red Gradient */}

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-red-950/40" />


        {/* Content */}

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">

            {/* ================= BRAND ================= */}

            <div className="md:col-span-1">

              <Link
                to="/"
                className="group inline-flex items-center"
              >

                <img
                  src={f1Logo}
                  alt="Formula 1"
                  className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />

              </Link>


              <p className="mt-5 max-w-sm text-sm leading-7 text-gray-300">
                Your home for live F1 race timing, results, standings,
                schedules and motorsport updates.
              </p>


              {/* Small Red Accent */}

              <div className="mt-6 h-0.5 w-12 bg-red-600 transition-all duration-300 hover:w-20" />

            </div>


            {/* ================= PLATFORM ================= */}

            <div>

              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Platform
              </h3>

              <div className="mt-5 space-y-3">

                {footerLinks.platform.map((link) => (

                  <Link
                    key={link.path}
                    to={link.path}
                    className="group flex w-fit items-center text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                  >

                    <span className="mr-0 w-0 overflow-hidden text-red-500 transition-all duration-200 group-hover:mr-2 group-hover:w-3">
                      →
                    </span>

                    {link.label}

                  </Link>

                ))}

              </div>

            </div>


            {/* ================= EXPLORE ================= */}

            <div>

              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Explore
              </h3>

              <div className="mt-5 space-y-3">

                {footerLinks.information.map((link) => (

                  <Link
                    key={link.path}
                    to={link.path}
                    className="group flex w-fit items-center text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                  >

                    <span className="mr-0 w-0 overflow-hidden text-red-500 transition-all duration-200 group-hover:mr-2 group-hover:w-3">
                      →
                    </span>

                    {link.label}

                  </Link>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM FOOTER
      ====================================================== */}

      <div className="border-t border-white/10 bg-black">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-xs text-gray-500 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">

          <p>
            © 2026 F1 Racer. All rights reserved.
          </p>


          <div className="flex gap-6">

            <Link
              to="/privacy"
              className="transition-colors duration-200 hover:text-white"
            >
              Privacy
            </Link>

            <Link
              to="/terms"
              className="transition-colors duration-200 hover:text-white"
            >
              Terms
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}