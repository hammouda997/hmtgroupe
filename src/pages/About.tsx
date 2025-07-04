
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, Globe, TrendingUp } from "lucide-react";

const About = () => {
  const milestones = [
    { year: "2008", event: "Création de HMT Sarl" },
    { year: "2012", event: "Partenariat avec GBOS" },
    { year: "2016", event: "Expansion vers l'impression numérique" },
    { year: "2020", event: "Partenariat MAYA et FLORA" },
    { year: "2024", event: "Leader du marché tunisien" }
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque projet et chaque relation client."
    },
    {
      icon: Users,
      title: "Expertise",
      description: "Notre équipe d'experts vous accompagne avec professionnalisme."
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "Nous restons à la pointe de la technologie pour vous offrir le meilleur."
    },
    {
      icon: TrendingUp,
      title: "Croissance",
      description: "Nous grandissons avec nos clients pour un succès partagé."
    }
  ];

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-red-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">À Propos de HMT Sarl</h1>
            <p className="text-xl leading-relaxed opacity-90">
              Depuis plus de 15 ans, HMT Sarl s'impose comme le leader tunisien des solutions de marquage laser, 
              découpe laser et impression numérique. Notre mission : transformer vos défis industriels en succès technologiques.
            </p>
          </div>
        </div>
      </section>

      {/* Manager Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Leadership</h2>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-red-600 mb-2">Zied Hamouda</h3>
                <p className="text-lg text-gray-700 mb-4">Directeur Général</p>
                <blockquote className="text-gray-600 italic text-lg leading-relaxed">
                  "Chez HMT, nous croyons que l'innovation technologique doit servir l'excellence industrielle. 
                  Chaque solution que nous proposons est pensée pour propulser nos clients vers de nouveaux sommets 
                  de performance et de qualité."
                </blockquote>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Vision</h4>
                <p className="text-gray-700">
                  Devenir la référence incontournable en Afrique du Nord pour les solutions 
                  laser et d'impression numérique industrielle.
                </p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Mission</h4>
                <p className="text-gray-700">
                  Accompagner nos clients dans leur transformation digitale en proposant 
                  des technologies de pointe et un service d'exception.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Notre Parcours d'Excellence
            </h2>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-6">
                  <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold min-w-[80px] text-center">
                    {milestone.year}
                  </div>
                  <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
                    <p className="text-gray-800 font-medium">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ces valeurs guident chacune de nos actions et définissent notre approche unique du service client.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-red-600" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
