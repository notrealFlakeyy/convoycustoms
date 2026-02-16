import Image from "next/image";

const projectImages = [
  "/images/branding/IMG_2658.jpeg",
  "/images/branding/IMG_2950.jpeg",
  "/images/branding/IMG_2996.jpeg",
  "/images/branding/IMG_2999.jpeg",
  "/images/branding/IMG_3054.jpeg",
  "/images/branding/IMG_3057.jpeg",
];

export default function AboutPage() {
  return (
    <main className="page-section">
      <div className="container space-y-4">
        <h1 className="text-4xl md:text-5xl">Tidigare projekt</h1>
        <p className="text-lg text-[#34413c]">
          Här är några exempel på tidigare projekt.
        </p>
      </div>

      <div className="container mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projectImages.map((imagePath) => (
          <article
            key={imagePath}
            className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-lg shadow-[#212a2520]"
          >
            <Image
              src={imagePath}
              alt="Tidigare projektbild"
              width={1200}
              height={900}
              className="h-64 w-full object-cover md:h-72"
            />
          </article>
        ))}
      </div>
    </main>
  );
}

