import PageContainer from "../components/Layout/PageContainer";
import { scheduleData } from "../data/Schedule";
import scheduleVideo from "../assets/f1-schedule.mp4";

export default function Schedule() {
  return (
    <PageContainer className="space-y-8">

      {/* ================= HERO VIDEO ================= */}

      <section className="relative h-64 overflow-hidden rounded-xl bg-black sm:h-80 lg:h-96">

        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={scheduleVideo} type="video/mp4" />
        </video>

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/55" />

        {/* Hero Content */}

        <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-8">

          <p className="text-sm font-semibold uppercase tracking-widest text-red-500">
            Formula 1 · {scheduleData.season}
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Race Schedule
          </h1>

          <p className="mt-2 max-w-xl text-sm text-gray-200 sm:text-base">
            Explore the Formula 1 race calendar, circuits and upcoming
            Grand Prix weekends.
          </p>

        </div>

      </section>


      {/* ================= PAGE HEADER ================= */}

      <section>

        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

          <div>
            <p className="text-sm font-semibold text-red-600">
              {scheduleData.season} Season
            </p>

            <h2 className="mt-1 text-2xl font-bold tracking-tight text-gray-900">
              Race Calendar
            </h2>
          </div>

          <span className="text-sm text-gray-500">
            {scheduleData.upcoming.length} races
          </span>

        </div>

      </section>


      {/* ================= SCHEDULE ================= */}

      <section className="overflow-hidden rounded-xl border border-gray-200 bg-white">

        {/* Header */}

        <div className="border-b border-gray-200 px-5 py-4 sm:px-6">

          <h3 className="font-semibold text-gray-900">
            Grand Prix Schedule
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Race weekends and circuit information
          </p>

        </div>


        {/* Races */}

        <div>

          {scheduleData.upcoming.map((race) => (

            <div
              key={race.round}
              className="border-b border-gray-100 px-5 py-5 last:border-b-0 transition-colors hover:bg-gray-50 sm:px-6"
            >

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                {/* Round */}

                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-sm font-bold text-gray-700">
                    {race.round}
                  </div>

                  <div>

                    <div className="flex items-center gap-2">

                      <span className="text-lg">
                        {race.flag}
                      </span>

                      <h4 className="font-semibold text-gray-900">
                        {race.name}
                      </h4>

                    </div>

                    <p className="mt-1 text-sm text-gray-500">
                      {race.circuit} · {race.city}
                    </p>

                  </div>

                </div>


                {/* Date / Status */}

                <div className="flex items-center justify-between gap-6 sm:justify-end">

                  <div className="text-left sm:text-right">

                    <p className="text-sm font-medium text-gray-900">
                      {race.date}
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      {race.status}
                    </p>

                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      race.status === "Upcoming"
                        ? "bg-red-50 text-red-600"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {race.status}
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

    </PageContainer>
  );
}