
const Partners = () => {
  const partners = [
    {
      name: "GBOS",
      description: "Spécialiste en découpe laser",
      logo: "GBOS"
    },
    {
      name: "MAYA",
      description: "Solutions d'impression",
      logo: "MAYA"
    },
    {
      name: "FLORA",
      description: "Systèmes d'impression numérique",
      logo: "FLORA"
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Nos Partenaires de Confiance
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nous travaillons avec les leaders mondiaux de la technologie pour vous offrir 
            les meilleures solutions du marché.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-lg p-8 mb-4 hover:shadow-xl transition-shadow">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {partner.logo}
                </div>
                <div className="text-red-600 font-semibold">Premium Partner</div>
              </div>
              <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
              <p className="text-gray-400">{partner.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">Certification Qualité</h3>
            <p className="text-gray-300 mb-6">
              Nos partenariats nous permettent de garantir des standards de qualité internationaux 
              et un support technique de premier niveau.
            </p>
            <div className="flex justify-center items-center space-x-8">
              <div className="bg-white/20 px-6 py-3 rounded-lg">
                <span className="font-bold">ISO 9001</span>
              </div>
              <div className="bg-white/20 px-6 py-3 rounded-lg">
                <span className="font-bold">CE Certified</span>
              </div>
              <div className="bg-white/20 px-6 py-3 rounded-lg">
                <span className="font-bold">Made in Europe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
