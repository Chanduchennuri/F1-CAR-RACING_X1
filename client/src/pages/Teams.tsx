import PageContainer from "../components/Layout/Pagecontainer";
import TeamCard from "../components/Teams/Teamcard";
import { teamsData } from "../data/Teams";

export default function Teams() {
  return (
    <PageContainer className="space-y-8">

      {/* ================= HEADER ================= */}

      <section>

        <p className="text-sm font-semibold uppercase tracking-wider text-red-600">
          Formula 1
        </p>

        <div className="mt-2 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

          <div>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              F1 Teams
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
              Explore the teams competing in the Formula 1 World
              Championship, their drivers and championship performance.
            </p>

          </div>

          <span className="text-sm text-gray-400">
            2026 Season
          </span>

        </div>

      </section>


      {/* ================= TEAM GRID ================= */}

      <section>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

          {teamsData.map((team) => (
            <TeamCard
              key={team.id}
              team={team}
            />
          ))}

        </div>

      </section>

    </PageContainer>
  );
}