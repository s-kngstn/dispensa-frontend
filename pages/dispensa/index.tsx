import PageWrapper from "../../src/components/PageWrapper/PageWrapper";

export default function DispensaPage() {
  return (
    <PageWrapper>
      <div className="sm:flex sm:items-center mb-4">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Dispena</h1>
          <p className="mt-2 text-sm text-gray-700">
            Links to your fridge, pantry, fruitbowl, and spice rack!
          </p>
        </div>
      </div>
      <div>
        <div className="border-black border-3 rounded-md">
          <div className="p-4">Some content</div>
        </div>
      </div>
    </PageWrapper>
  );
}
