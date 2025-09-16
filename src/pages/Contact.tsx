
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useCompany } from "@/hooks/useCMS";
import { cmsAPI } from "@/lib/cms-api";
import { TranslatedText } from "@/components/TranslatedText";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    address: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.product || !formData.message) {
      toast.error("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    setIsSubmitting(true);

    try {
      const devisData = {
        clientName: formData.name,
        clientEmail: formData.email,
        clientPhone: formData.phone,
        clientCompany: formData.company,
        clientAddress: formData.address,
        projectType: formData.product,
        description: formData.message
      };

      await cmsAPI.createDevis(devisData);
      
      toast.success("Votre demande de devis a été envoyée avec succès ! Nous vous recontacterons sous 24h.");
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        product: '',
        address: '',
        message: ''
      });
    } catch (error: unknown) {
      console.error('Error creating devis:', error);
      toast.error("Une erreur s'est produite lors de l'envoi de votre demande. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const { data: company } = useCompany();
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
      details: ["contact@hmtgroupe.com"],
      link: "mailto:contact@hmtgroupe.com"
    },
    {
      icon: MapPin,
      title: "Adresse",
      details: ["Avenue de l'Environnement", "5070 Ksar Hellal, TUNISIA"],
      link: "https://maps.app.goo.gl/rWDzsgjLwfKjNCRx8?g_st=ipc"
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
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <TranslatedText as="span">{(company?.pages?.contact?.heroTitle as Record<string, string>)?.[ (navigator.language || 'fr').startsWith('en') ? 'en' : 'fr' ] || 'Contactez-Nous'}</TranslatedText>
            </h1>
            <p className="text-xl leading-relaxed opacity-90">
              <TranslatedText as="span">{(company?.pages?.contact?.heroSubtitle as Record<string, string>)?.[ (navigator.language || 'fr').startsWith('en') ? 'en' : 'fr' ] || 'Prêt à transformer votre production ? Nos experts sont là pour vous accompagner. Contactez-nous pour une consultation personnalisée et un devis gratuit.'}</TranslatedText>
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
                  <CardTitle className="text-2xl text-gray-900">
                    <TranslatedText as="span">Demander un Devis</TranslatedText>
                  </CardTitle>
                  <CardDescription>
                    <TranslatedText as="span">Remplissez ce formulaire et recevez une réponse personnalisée sous 24h.</TranslatedText>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          <TranslatedText as="span">Nom complet *</TranslatedText>
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          <TranslatedText as="span">Email *</TranslatedText>
                        </Label>
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
                        <Label htmlFor="phone">
                          <TranslatedText as="span">Téléphone</TranslatedText>
                        </Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">
                          <TranslatedText as="span">Entreprise</TranslatedText>
                        </Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="product">
                        <TranslatedText as="span">Produit d'intérêt *</TranslatedText>
                      </Label>
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
                      <Label htmlFor="address">
                        <TranslatedText as="span">Adresse</TranslatedText>
                      </Label>
                      <Textarea
                        id="address"
                        rows={3}
                        placeholder="Votre adresse complète..."
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        <TranslatedText as="span">Message *</TranslatedText>
                      </Label>
                      <Textarea
                        id="message"
                        rows={6}
                        placeholder="Décrivez votre projet, vos besoins ou vos questions..."
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-red-600 hover:bg-red-700 text-lg py-3"
                      disabled={isSubmitting}
                    >
                      <Send className="mr-2 h-5 w-5" />
                      <TranslatedText as="span">{isSubmitting ? "Envoi en cours..." : "Envoyer ma Demande"}</TranslatedText>
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  <TranslatedText as="span">Informations de Contact</TranslatedText>
                </h2>
                <p className="text-gray-600 mb-8">
                  <TranslatedText as="span">Notre équipe est disponible pour répondre à toutes vos questions et vous accompagner dans vos projets.</TranslatedText>
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
                          <h3 className="font-bold text-gray-900 mb-2">
                            <TranslatedText as="span">{info.title}</TranslatedText>
                          </h3>
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
                    <TranslatedText as="span">WhatsApp</TranslatedText>
                  </a>
                </Button>
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white" asChild>
                  <a href="tel:+21636264380">
                    <TranslatedText as="span">Appeler Maintenant</TranslatedText>
                  </a>
                </Button>
              </div>

              {/* Map */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.1234567890123!2d10.123456789012345!3d35.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDA3JzI0LjQiTiAxMMKwMDcnMjQuNCJF!5e0!3m2!1sen!2stn!4v1234567890123!5m2!1sen!2stn"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="HMT Sarl Location - Ksar Hellal, Tunisia"
                    ></iframe>
                  </div>
                  <div className="p-4 bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">HMT Sarl</p>
                        <p className="text-sm text-gray-600">Avenue de l'Environnement, Ksar Hellal</p>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                        asChild
                      >
                        <a 
                          href="https://maps.app.goo.gl/rWDzsgjLwfKjNCRx8?g_st=ipc" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <MapPin className="h-4 w-4 mr-2" />
                          <TranslatedText as="span">Ouvrir dans Maps</TranslatedText>
                        </a>
                      </Button>
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
