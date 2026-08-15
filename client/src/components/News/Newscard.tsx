interface NewsCardProps {
  article: {
    id: number;
    category: string;
    title: string;
    description: string;
    source: string;
    publishedAt: string;
    image: string;
  };
}

export default function NewsCard({ article }: NewsCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Image */}

      <div className="aspect-video overflow-hidden bg-gray-100">

        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

      </div>


      {/* Content */}

      <div className="p-5">

        <div className="flex items-center justify-between gap-3">

          <span className="text-xs font-semibold uppercase tracking-wider text-red-600">
            {article.category}
          </span>

          <span className="text-xs text-gray-400">
            {article.publishedAt}
          </span>

        </div>


        <h2 className="mt-3 line-clamp-2 text-lg font-bold leading-7 text-gray-900 transition-colors group-hover:text-red-600">
          {article.title}
        </h2>


        <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-500">
          {article.description}
        </p>


        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">

          <span className="text-xs font-medium text-gray-400">
            {article.source}
          </span>

          <button className="text-sm font-semibold text-red-600 transition hover:text-red-700">
            Read more →
          </button>

        </div>

      </div>

    </article>
  );
}