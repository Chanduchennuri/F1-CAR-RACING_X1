import { Link } from "react-router-dom";
import { teamsData } from "../../data/Teams";

interface TeamsDropdownProps {
  isOpen: boolean;
}

export default function TeamsDropdown({
  isOpen,
}: TeamsDropdownProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="absolute left-1/2 top-full z-50 mt-3 w-72 -translate-x-1/2 rounded-lg border border-gray-200 bg-white p-4 shadow-lg">

      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
        2026 Teams
      </h3>

      <div className="grid grid-cols-2 gap-x-6 gap-y-2">

        {teamsData.map((team) => (
          <Link
            key={team.id}
            to={`/teams/${team.slug}`}
            className="rounded px-2 py-2 text-sm text-gray-700 transition hover:bg-gray-50 hover:text-red-600"
          >
            {team.name}
          </Link>
        ))}

      </div>

      <div className="mt-4 border-t border-gray-100 pt-3">

        <Link
          to="/teams"
          className="text-sm font-semibold text-red-600 hover:text-red-700"
        >
          View All Teams →
        </Link>

      </div>

    </div>
  );
}