import PageContainer from "../components/Layout/Pagecontainer";
import { scoreboardData } from "../data/Scoreboard";
import heroImage from "../assets/F1_the.jpg"
export default function Scoreboard() {
  const { race } = scoreboardData;

  return (
    <PageContainer className="space-y-6">


  {/* Hero */}

  <section className="relative h-105 overflow-hidden rounded-xl">

    <img
      src={heroImage}
      alt="Formula One"
      className="absolute inset-0 h-full w-full object-cover blur-[1px] scale-105"
    />

    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/50" />

    {/* Content */}
    <div className="relative z-10 flex h-full items-center px-8 sm:px-12">

      <div className="max-w-lg text-white">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
          Welcome to F1 Racer
        </p>

        <h1 className="mt-4 text-5xl font-black uppercase leading-none sm:text-7xl">
          Formula
          <br />
          One
        </h1>

        <div className="mt-5 h-1 w-16 bg-red-600" />

        <p className="mt-5 text-base text-gray-200 sm:text-lg">
          The world's fastest sport.
          <br />
          The passion. The precision. The glory.
        </p>

      </div>

    </div>

  </section>


  {/* Race Header */}

  <section className="border-b border-gray-200 pb-6"></section>
      {/* Race Header */}

      <section className="border-b border-gray-200 pb-6">

        <div className="flex items-center gap-3">
          <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-600">
            LIVE
          </span>

          <span className="text-sm text-gray-500">
            ROUND {race.round}
          </span>
        </div>

        <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row">

          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {race.name}
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              {race.circuit}
            </p>
          </div>

          <div className="flex gap-8">

            <div>
              <p className="text-xs uppercase text-gray-400">
                Lap
              </p>

              <p className="text-xl font-bold">
                {race.currentLap}/{race.totalLaps}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase text-gray-400">
                Leader
              </p>

              <p className="text-xl font-bold text-red-600">
                {race.leader}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase text-gray-400">
                Fastest
              </p>

              <p className="text-xl font-bold">
                {race.fastestLap}
              </p>
            </div>

          </div>

        </div>

        {/* Race progress */}

        <div className="mt-6">

          <div className="mb-2 flex justify-between text-xs text-gray-500">
            <span>Race Progress</span>
            <span>{race.progress}%</span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-red-600"
              style={{ width: `${race.progress}%` }}
            />
          </div>

        </div>

      </section>


      {/* Scoreboard */}

      <section>

        <div className="flex border-b border-gray-200">

          <button className="border-b-2 border-red-600 px-5 py-3 text-sm font-semibold text-gray-900">
            Race
          </button>

          <button className="px-5 py-3 text-sm text-gray-500 hover:text-gray-900">
            Lap Times
          </button>

          <button className="px-5 py-3 text-sm text-gray-500 hover:text-gray-900">
            Pit Stops
          </button>

        </div>


        <div className="mt-4 overflow-hidden rounded-lg border border-gray-200 bg-white">

          <div className="border-b border-gray-200 px-5 py-4">

            <h2 className="font-semibold text-gray-900">
              Live Classification
            </h2>

            <p className="mt-1 text-xs text-gray-500">
              Updated 3 seconds ago
            </p>

          </div>


          {/* Header */}

          <div className="grid grid-cols-12 border-b border-gray-200 bg-gray-50 px-5 py-3 text-xs font-medium uppercase text-gray-500">

            <div className="col-span-1">
              Pos
            </div>

            <div className="col-span-4">
              Driver
            </div>

            <div className="col-span-2">
              Tyre
            </div>

            <div className="col-span-2">
              Last Lap
            </div>

            <div className="col-span-2">
              Gap
            </div>

            <div className="col-span-1 text-right">
              Pit
            </div>

          </div>


          {/* Drivers */}

          {scoreboardData.drivers.map((driver) => (

            <div
              key={driver.driverNumber}
              className="grid grid-cols-12 items-center border-b border-gray-100 px-5 py-4 last:border-b-0"
            >

              <div className="col-span-1 font-semibold">
                {driver.position}
              </div>


              <div className="col-span-4 flex items-center gap-3">

                <div className="flex h-8 w-10 items-center justify-center rounded bg-gray-100 text-xs font-bold">
                  {driver.code}
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {driver.name}
                  </p>

                  <p className="text-xs text-gray-500">
                    {driver.team}
                  </p>
                </div>

              </div>


              <div className="col-span-2 flex items-center gap-2 text-xs font-medium">

                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    driver.tire === "SOFT"
                      ? "bg-red-500"
                      : driver.tire === "MEDIUM"
                        ? "bg-yellow-400"
                        : "bg-gray-300"
                  }`}
                />

                {driver.tire}

              </div>


              <div className="col-span-2 text-sm font-medium">
                {driver.lastLap}
              </div>


              <div className="col-span-2 text-sm">
                {driver.gap === "LEADER" ? (
                  <span className="font-semibold text-red-600">
                    LEADER
                  </span>
                ) : (
                  driver.gap
                )}
              </div>


              <div className="col-span-1 text-right text-sm">
                {driver.pitStops}
              </div>

            </div>

          ))}

        </div>

      </section>

    </PageContainer>
  );
}