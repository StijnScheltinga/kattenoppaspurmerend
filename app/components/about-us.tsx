import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            {/* Image – left on desktop, top on mobile */}
            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[360px] rounded-xl overflow-hidden bg-gray-100">
              <Image
                src="/32860c06-0438-45d7-b8dd-0aac8eac8bf4.JPG"
                alt="Over ons"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
            <p className="text-gray-500 pt-2">
              v.l.n.r Mandy, Bram, Denise en Ilona
            </p>

          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Over ons
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Ons team bestaat uit 4 medewerkers onder leiding van{" "}
              <strong className="text-brand">Bram Bonhof</strong>. Bram
              heeft al <strong className="text-brand">25 jaar ervaring</strong>{" "}
              in het verzorgen van katten en andere kleine huisdieren aan huis.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Wij zijn uitsluitend werkzaam in de plaatsen Purmerend, Zuidoostbeemster en Kwadijk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
