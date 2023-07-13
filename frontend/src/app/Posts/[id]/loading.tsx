export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 md:px-12 animate-pulse">
      <div className="max-w-3xl mx-auto rounded-xl bg-gray-800 p-8 space-y-8 shadow-lg">
        <div className="h-12 bg-gray-700 rounded"></div>
        <div className="h-48 bg-gray-700 rounded"></div>
      </div>
    </div>
  );
}
