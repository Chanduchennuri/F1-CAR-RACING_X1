const raceResults = [
  {
    position: 1,
    driver: "Max Verstappen",
    team: "Red Bull Racing",
    time: "1:32:45.281",
    points: 25,
  },
  {
    position: 2,
    driver: "Lando Norris",
    team: "McLaren",
    time: "+4.382s",
    points: 18,
  },
  {
    position: 3,
    driver: "Charles Leclerc",
    team: "Ferrari",
    time: "+8.914s",
    points: 15,
  },
  {
    position: 4,
    driver: "Oscar Piastri",
    team: "McLaren",
    time: "+12.421s",
    points: 12,
  },
  {
    position: 5,
    driver: "Lewis Hamilton",
    team: "Ferrari",
    time: "+18.702s",
    points: 10,
  },
];

export default function Results() {
  return (
    
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10">

        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-red-600">
            Race Results
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            Latest Results
          </h1>

          <p className="mt-2 text-gray-500">
            View the finishing order and championship points from the latest
            race.
          </p>
        </div>

        {/* Race Header */}
        <div className="mb-6 rounded-xl bg-gray-900 p-6 text-white">
          <p className="text-sm text-gray-400">
            Round 5
          </p>

          <h2 className="mt-1 text-2xl font-bold">
            Saudi Arabian Grand Prix
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Jeddah Corniche Circuit · Race
          </p>
        </div>

        {/* Results */}
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

          <div className="grid grid-cols-12 border-b bg-gray-50 px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
            <div className="col-span-1">Pos</div>
            <div className="col-span-4">Driver</div>
            <div className="col-span-3">Team</div>
            <div className="col-span-2">Time</div>
            <div className="col-span-2 text-right">Points</div>
          </div>

          {raceResults.map((result) => (
            <div
              key={result.position}
              className="grid grid-cols-12 items-center border-b border-gray-100 px-6 py-5 last:border-b-0 hover:bg-gray-50"
            >
              <div className="col-span-1 font-bold text-gray-400">
                {result.position}
              </div>

              <div className="col-span-4">
                <p className="font-semibold text-gray-900">
                  {result.driver}
                </p>
              </div>

              <div className="col-span-3 text-sm text-gray-500">
                {result.team}
              </div>

              <div className="col-span-2 text-sm text-gray-600">
                {result.time}
              </div>

              <div className="col-span-2 text-right font-bold text-gray-900">
                {result.points}
              </div>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
}