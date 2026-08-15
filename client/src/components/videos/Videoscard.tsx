import { Link } from "react-router-dom";
import type { VideoData } from "../../data/Videos";

interface VideoCardProps {
  video: VideoData;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <Link
      to={`/videos/${video.id}`}
      className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Thumbnail */}

      <div className="relative aspect-video overflow-hidden bg-gray-100">

        <img
          src={video.thumbnail}
          alt={video.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Dark overlay */}

        <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />

        {/* Play button */}

        <div className="absolute inset-0 flex items-center justify-center">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-red-600 shadow-lg transition-transform duration-300 group-hover:scale-110">
            <span className="ml-1 text-lg">
              ▶
            </span>
          </div>

        </div>

        {/* Duration */}

        <span className="absolute bottom-3 right-3 rounded bg-black/80 px-2 py-1 text-xs font-semibold text-white">
          {video.duration}
        </span>

      </div>


      {/* Content */}

      <div className="p-4">

        <div className="flex items-center justify-between gap-3">

          <span className="text-xs font-semibold uppercase tracking-wider text-red-600">
            {video.category}
          </span>

          <span className="text-xs text-gray-400">
            {video.publishedAt}
          </span>

        </div>


        <h2 className="mt-2 line-clamp-2 text-base font-bold leading-6 text-gray-900 transition-colors group-hover:text-red-600">
          {video.title}
        </h2>


        <p className="mt-2 line-clamp-2 text-sm leading-5 text-gray-500">
          {video.description}
        </p>

      </div>

    </Link>
  );
}