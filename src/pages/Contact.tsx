
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Votre demande a été envoyée avec succès ! Nous vous recontacterons sous 24h.");
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      product: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      details: ["+216 36 264 380", "+216 22 721 372"],
      link: "tel:+21636264380"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["rematex@gnet.tn"],
      link: "mailto:rematex@gnet.tn"
    },
    {
      icon: MapPin,
      title: "Adresse",
      details: ["Avenue de l'Environnement", "5070 Ksar Hellal, TUNISIA"],
      link: "https://maps.google.com/?q=Ksar+Hellal+Tunisia"
    },
    {
      icon: Clock,
      title: "Horaires",
      details: ["Lun-Ven: 8h00-17h30", "Sam: 8h00-12h00"],
      link: null
    }
  ];

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-red-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Contactez-Nous</h1>
            <p className="text-xl leading-relaxed opacity-90">
              Prêt à transformer votre production ? Nos experts sont là pour vous accompagner. 
              Contactez-nous pour une consultation personnalisée et un devis gratuit.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Demander un Devis</CardTitle>
                  <CardDescription>
                    Remplissez ce formulaire et recevez une réponse personnalisée sous 24h.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nom complet *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Entreprise</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="product">Produit d'intérêt</Label>
                      <Select onValueChange={(value) => handleInputChange('product', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez un produit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="marquage-laser">Marquage Laser</SelectItem>
                          <SelectItem value="decoupe-laser">Découpe Laser</SelectItem>
                          <SelectItem value="impression-numerique">Impression Numérique</SelectItem>
                          <SelectItem value="maintenance">Service de Maintenance</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        rows={6}
                        placeholder="Décrivez votre projet, vos besoins ou vos questions..."
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-lg py-3">
                      <Send className="mr-2 h-5 w-5" />
                      Envoyer ma Demande
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Informations de Contact</h2>
                <p className="text-gray-600 mb-8">
                  Notre équipe est disponible pour répondre à toutes vos questions et vous accompagner dans vos projets.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-red-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600 mb-1">
                              {info.link && idx === 0 ? (
                                <a href={info.link} className="hover:text-red-600 transition-colors" target="_blank" rel="noopener noreferrer">
                                  {detail}
                                </a>
                              ) : (
                                detail
                              )}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Contact Buttons */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <Button className="bg-green-600 hover:bg-green-700" asChild>
                  <a href="https://wa.me/21622721372" target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </Button>
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white" asChild>
                  <a href="tel:+21636264380">
                    Appeler Maintenant
                  </a>
                </Button>
              </div>

              {/* Map */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p className="font-medium">Carte Interactive</p>
                      <p className="text-sm">Ksar Hellal, Monastir, Tunisie</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
