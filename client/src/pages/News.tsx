import PageContainer from "../components/Layout/PageContainer";
import NewsCard from "../components/News/Newscard";
import { newsData } from "../data/News";

export default function News() {
  const { articles } = newsData;

  return (
    <PageContainer className="space-y-8">

      {/* ================= HEADER ================= */}

      <section>

        <p className="text-sm font-semibold uppercase tracking-wider text-red-600">
          Motorsport
        </p>

        <div className="mt-2 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

          <div>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Latest F1 News
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
              Stay up to date with the latest Formula 1 stories,
              driver updates, team news and race analysis.
            </p>

          </div>

          <span className="text-sm text-gray-400">
            {articles.length} stories
          </span>

        </div>

      </section>


      {/* ================= CATEGORY FILTER ================= */}

      <section className="flex gap-2 overflow-x-auto border-b border-gray-200 pb-3">

        <button className="shrink-0 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white">
          All
        </button>

        <button className="shrink-0 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition hover:border-red-200 hover:text-red-600">
          Race Weekend
        </button>

        <button className="shrink-0 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition hover:border-red-200 hover:text-red-600">
          Drivers
        </button>

        <button className="shrink-0 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition hover:border-red-200 hover:text-red-600">
          Teams
        </button>

        <button className="shrink-0 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition hover:border-red-200 hover:text-red-600">
          Analysis
        </button>

      </section>


      {/* ================= FEATURED STORY ================= */}

      {articles[0] && (

        <section className="group relative overflow-hidden rounded-xl bg-black">

          <img
            src={articles[0].image}
            alt={articles[0].title}
            className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-96"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          <div className="absolute bottom-0 left-0 max-w-3xl p-6 sm:p-8">

            <span className="text-xs font-semibold uppercase tracking-wider text-red-400">
              Featured · {articles[0].category}
            </span>

            <h2 className="mt-2 text-2xl font-bold leading-tight text-white sm:text-3xl">
              {articles[0].title}
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-200">
              {articles[0].description}
            </p>

          </div>

        </section>

      )}


      {/* ================= NEWS GRID ================= */}

      <section>

        <div className="mb-5 flex items-center justify-between">

          <h2 className="text-xl font-bold text-gray-900">
            Latest Stories
          </h2>

          <span className="text-sm text-gray-400">
            Updated recently
          </span>

        </div>


        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {articles.slice(1).map((article) => (
            <NewsCard
              key={article.id}
              article={article}
            />
          ))}

        </div>

      </section>

    </PageContainer>
  );
}