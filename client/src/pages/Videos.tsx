import { useState } from "react";
import PageContainer from "../components/Layout/Pagecontainer";
import VideoCard from "../components/videos/Videoscard";
import { videosData } from "../data/Videos";

const categories = [
  "All",
  "Race Highlights",
  "Qualifying",
  "Interviews",
  "Highlights",
  "Behind the Scenes",
  "Team Radio",
];

export default function Videos() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredVideos =
    activeCategory === "All"
      ? videosData
      : videosData.filter(
          (video) => video.category === activeCategory
        );

  const featuredVideo = videosData[0];

  return (
    <PageContainer className="space-y-8">

      {/* ================= HEADER ================= */}

      <section>

        <p className="text-sm font-semibold uppercase tracking-wider text-red-600">
          F1 RACER
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Videos
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
          Watch the latest race highlights, qualifying moments,
          interviews and exclusive Formula 1 content.
        </p>

      </section>


      {/* ================= FEATURED VIDEO ================= */}

      <section className="group relative overflow-hidden rounded-2xl bg-black">

        <div className="aspect-video w-full sm:aspect-[2/1]">

          <img
            src={featuredVideo.thumbnail}
            alt={featuredVideo.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

        </div>


        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />


        {/* Play button */}

        <button
          type="button"
          className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-red-600 shadow-xl transition-transform duration-300 hover:scale-110"
          aria-label="Play featured video"
        >
          <span className="ml-1 text-xl">
            ▶
          </span>
        </button>


        {/* Featured information */}

        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">

          <span className="text-xs font-semibold uppercase tracking-wider text-red-400">
            Featured · {featuredVideo.category}
          </span>

          <h2 className="mt-2 max-w-3xl text-2xl font-bold leading-tight text-white sm:text-3xl">
            {featuredVideo.title}
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-200">
            {featuredVideo.description}
          </p>

        </div>

      </section>


      {/* ================= CATEGORIES ================= */}

      <section className="border-b border-gray-200">

        <div className="flex gap-2 overflow-x-auto pb-3">

          {categories.map((category) => {

            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-red-600 text-white"
                    : "border border-gray-200 bg-white text-gray-600 hover:border-red-200 hover:text-red-600"
                }`}
              >
                {category}
              </button>
            );
          })}

        </div>

      </section>


      {/* ================= VIDEO GRID ================= */}

      <section>

        <div className="mb-5 flex items-center justify-between">

          <div>

            <h2 className="text-xl font-bold text-gray-900">
              {activeCategory === "All"
                ? "Latest Videos"
                : activeCategory}
            </h2>

            <p className="mt-1 text-sm text-gray-400">
              {filteredVideos.length} videos
            </p>

          </div>

        </div>


        {filteredVideos.length > 0 ? (

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {filteredVideos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
              />
            ))}

          </div>

        ) : (

          <div className="rounded-xl border border-dashed border-gray-300 py-16 text-center">

            <p className="text-sm font-semibold text-gray-700">
              No videos available
            </p>

            <p className="mt-1 text-sm text-gray-400">
              Check back later for new content.
            </p>

          </div>

        )}

      </section>

    </PageContainer>
  );
}