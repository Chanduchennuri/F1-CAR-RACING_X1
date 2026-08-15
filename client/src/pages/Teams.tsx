import PageContainer from "../components/Layout/Pagecontainer";

export default function Teams() {
  return (
    <PageContainer className="py-8">

      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-red-600">
          Constructors
        </p>

        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          F1 Teams
        </h1>

        <p className="mt-2 text-gray-500">
          Explore the Formula 1 constructors and their drivers.
        </p>
      </div>

    </PageContainer>
  );
}