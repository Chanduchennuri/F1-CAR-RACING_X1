import PageContainer from "../components/Layout/Pagecontainer";

export default function Videos() {
  return (
    <PageContainer className="py-8">

      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-red-600">
          Media
        </p>

        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          F1 Videos
        </h1>

        <p className="mt-2 text-gray-500">
          Watch race highlights, interviews and Formula 1 content.
        </p>
      </div>

    </PageContainer>
  );
}