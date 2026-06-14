import Link from "next/link";
import PackageCard from "@/components/ui/PackageCard";
import { getFeaturedPackages } from "@/data/packages";

export default function FeaturedPackages() {
  const featured = getFeaturedPackages();

  return (
    <section className="bg-white py-24 lg:py-36">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="eyebrow">Explore os caminhos</span>
          <h2 className="section-title mt-5">
            Roteiros com significado,
            <br />
            desenhados nos detalhes.
          </h2>
          <p className="mt-6 text-sm text-dark/55 leading-7 max-w-xl mx-auto">
            Uma curadoria de experiências bíblicas, culturais e espirituais
            conduzidas com excelência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {featured.slice(0, 6).map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/roteiros"
            className="lux-button border border-dark/35 text-dark hover:bg-navy hover:border-navy hover:text-white"
          >
            Ver todos os roteiros
          </Link>
        </div>
      </div>
    </section>
  );
}
