export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-12 px-6 lg:px-12 py-10">
      {/* Main Content (appears second on desktop) */}
      <div className="flex-1 min-w-0 md:order-2">
        <div className="max-w-5xl mx-auto">{children}</div>
      </div>
    </div>
  );
}
