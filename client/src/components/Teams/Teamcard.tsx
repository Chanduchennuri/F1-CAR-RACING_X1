import { Link } from "react-router-dom";

interface TeamCardProps {
  team: {
    id: number;
    name: string;
    slug: string;
    country: string;
    position: number;
    points: number;
    drivers: string[];
    image: string;
    logo: string;
  };
}

export default function TeamCard({ team }: TeamCardProps) {
  return (
    <Link
      to={`/teams/${team.slug}`}
      className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl"
    >

      {/* Team Image */}

      <div className="relative h-48 overflow-hidden bg-gray-100">

        <img
          src={team.image}
          alt={`${team.name} Formula 1 team`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Image overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />


        {/* Position */}

        <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-sm font-bold text-white backdrop-blur-sm">
          {team.position}
        </div>


        {/* Logo */}

        <div className="absolute bottom-4 left-4 flex h-14 w-14 items-center justify-center rounded-lg bg-white p-2 shadow-lg">

          <img
            src={team.logo}
            alt={`${team.name} logo`}
            className="max-h-full max-w-full object-contain"
          />

        </div>

      </div>


      {/* Content */}

      <div className="p-5">

        <div className="flex items-start justify-between gap-4">

          <div>

            <h2 className="text-lg font-bold text-gray-900 transition-colors group-hover:text-red-600">
              {team.name}
            </h2>

            <p className="mt-1 text-xs text-gray-500">
              {team.country}
            </p>

          </div>


          <div className="text-right">

            <p className="text-lg font-bold text-gray-900">
              {team.points}
            </p>

            <p className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
              Points
            </p>

          </div>

        </div>


        {/* Drivers */}

        <div className="mt-5 border-t border-gray-100 pt-4">

          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Drivers
          </p>

          <div className="mt-2 space-y-1">

            {team.drivers.map((driver) => (

              <p
                key={driver}
                className="text-sm font-medium text-gray-700"
              >
                {driver}
              </p>

            ))}

          </div>

        </div>

      </div>

    </Link>
  );
}