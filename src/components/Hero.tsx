
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Award, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Powering Precision with
                <span className="text-red-500 block">Innovation</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                HMT Sarl, votre partenaire de confiance pour les solutions de marquage laser, 
                découpe laser et impression numérique en Tunisie. Excellence technique garantie.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-red-600 rounded-lg mx-auto mb-2">
                  <Zap className="h-6 w-6" />
                </div>
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm text-gray-400">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-red-600 rounded-lg mx-auto mb-2">
                  <Users className="h-6 w-6" />
                </div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-gray-400">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-red-600 rounded-lg mx-auto mb-2">
                  <Award className="h-6 w-6" />
                </div>
                <div className="text-2xl font-bold">3</div>
                <div className="text-sm text-gray-400">Partenaires premium</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white" asChild>
                <Link to="/products">
                  Nos Produits
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900" asChild>
                <Link to="/contact">
                  Demander un Devis
                </Link>
              </Button>
            </div>
          </div>

          {/* Hero Image/Animation */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="aspect-video bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-12 w-12" />
                  </div>
                  <div className="text-2xl font-bold">HMT Technology</div>
                  <div className="text-lg opacity-90">Precision Engineering</div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-500/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
