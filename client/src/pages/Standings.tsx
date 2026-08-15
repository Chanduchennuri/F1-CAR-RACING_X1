import PageContainer from "../components/Layout/PageContainer";
import { standingsData } from "../data/Standings";
import trackImage from "../assets/f1-standings.png";

export default function Standings() {
  const { season, drivers, teams } = standingsData;

  return (
    <PageContainer className="space-y-8">

      {/* ================= HERO ================= */}

      <section className="relative h-64 overflow-hidden rounded-xl bg-black sm:h-72">

        <img
          src={trackImage}
          alt="Formula 1 circuit"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

        <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-8">

          <p className="text-sm font-semibold uppercase tracking-widest text-red-500">
            Formula 1 · {season}
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Championship Standings
          </h1>

          <p className="mt-2 max-w-xl text-sm text-gray-200 sm:text-base">
            Driver and constructor championship standings for the
            {` ${season}`} Formula 1 season.
          </p>

        </div>

      </section>


      {/* ================= TABS ================= */}

      <section>

        <div className="flex border-b border-gray-200">

          <button className="border-b-2 border-red-600 px-5 py-3 text-sm font-semibold text-gray-900">
            Drivers
          </button>

          <button className="px-5 py-3 text-sm font-medium text-gray-500 transition hover:text-gray-900">
            Constructors
          </button>

        </div>

      </section>


      {/* ================= DRIVER STANDINGS ================= */}

      <section className="overflow-hidden rounded-xl border border-gray-200 bg-white">

        {/* Header */}

        <div className="border-b border-gray-200 px-5 py-5 sm:px-6">

          <h2 className="font-semibold text-gray-900">
            Driver Championship
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {season} Formula 1 World Championship
          </p>

        </div>


        {/* Table Header */}

        <div className="grid grid-cols-12 border-b border-gray-200 bg-gray-50 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:px-6">

          <div className="col-span-1">
            Pos
          </div>

          <div className="col-span-5">
            Driver
          </div>

          <div className="col-span-2">
            Team
          </div>

          <div className="col-span-2 text-center">
            Wins
          </div>

          <div className="col-span-2 text-right">
            Points
          </div>

        </div>


        {/* Drivers */}

        {drivers.map((driver) => (

          <div
            key={driver.code}
            className="grid grid-cols-12 items-center border-b border-gray-100 px-5 py-4 last:border-b-0 transition-colors hover:bg-gray-50 sm:px-6"
          >

            {/* Position */}

            <div className="col-span-1">

              <span
                className={`font-bold ${
                  driver.position <= 3
                    ? "text-red-600"
                    : "text-gray-500"
                }`}
              >
                {driver.position}
              </span>

            </div>


            {/* Driver */}

            <div className="col-span-5 flex items-center gap-3">

              <div className="flex h-9 w-10 items-center justify-center rounded bg-gray-100 text-xs font-bold text-gray-700">
                {driver.code}
              </div>

              <div>

                <p className="text-sm font-semibold text-gray-900">
                  {driver.driver}
                </p>

                <p className="text-xs text-gray-500 sm:hidden">
                  {driver.team}
                </p>

              </div>

            </div>


            {/* Team */}

            <div className="col-span-2 hidden text-sm text-gray-500 sm:block">
              {driver.team}
            </div>


            {/* Wins */}

            <div className="col-span-2 text-center text-sm text-gray-600">
              {driver.wins}
            </div>


            {/* Points */}

            <div className="col-span-2 text-right">

              <span className="text-sm font-bold text-gray-900">
                {driver.points}
              </span>

              <span className="ml-1 text-xs text-gray-400">
                PTS
              </span>

            </div>

          </div>

        ))}

      </section>


      {/* ================= CONSTRUCTOR PREVIEW ================= */}

      <section className="overflow-hidden rounded-xl border border-gray-200 bg-white">

        <div className="border-b border-gray-200 px-5 py-5 sm:px-6">

          <h2 className="font-semibold text-gray-900">
            Constructor Championship
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Team standings
          </p>

        </div>


        {teams.map((team) => (

          <div
            key={team.team}
            className="flex items-center justify-between border-b border-gray-100 px-5 py-4 last:border-b-0 sm:px-6"
          >

            <div className="flex items-center gap-4">

              <span className="w-5 text-sm font-bold text-gray-500">
                {team.position}
              </span>

              <span className="text-sm font-semibold text-gray-900">
                {team.team}
              </span>

            </div>


            <div className="flex items-center gap-6">

              <span className="text-sm text-gray-500">
                {team.wins} wins
              </span>

              <span className="min-w-16 text-right text-sm font-bold text-gray-900">
                {team.points}
              </span>

            </div>

          </div>

        ))}

      </section>

    </PageContainer>
  );
}