
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Zap, Scissors, Printer, Download, Eye, X as CloseIcon } from "lucide-react";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input"
import {
  Search,
  Tag,
  SlidersHorizontal
} from "lucide-react";





const Products = () => {
  const [openVideo, setOpenVideo] = useState<string | null>(null);
   const [filterOpen, setFilterOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [appFilter, setAppFilter] = useState<string | null>(null); 
  const productCategories = [
    {
      id: "laser-marking",
      title: "Machine à broderie",
      icon: Zap,
      products: [
        {
  name: "Machine à broder à tête mixte chaîne et plate",
  power: "Configuration 6 ou 9 aiguilles",
  description: `
  Machine combinée à tête chaîne (point chenille ou boucle) et tête plate, avec ou sans paillettes. 
  Permet toutes les combinaisons de points : point chaîne, point serviette et point plat. 
  Le choix du mode de broderie se fait facilement via le panneau de commande.

  <br/><br/>
  <strong style="display: block; font-size: 1.1rem; margin-bottom: 0.5rem;">Tableau des espacements minimaux entre têtes :</strong>
  <div style="overflow-x: auto;">
    <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem; border-radius: 8px; overflow: hidden; box-shadow: 0 0 8px rgba(0,0,0,0.05);">
      <thead style="background-color: #f44336; color: white;">
        <tr>
          <th style="padding: 12px; text-align: left;">Configuration</th>
          <th style="padding: 12px; text-align: center;">6 aiguilles</th>
          <th style="padding: 12px; text-align: center;">9 aiguilles</th>
        </tr>
      </thead>
      <tbody>
        <tr style="background-color: #fafafa;">
          <td style="padding: 10px;">Chargement frontal gauche (Seq. simple + plate + chaîne)</td>
          <td style="padding: 10px; text-align: center;">460 mm (230 mm)</td>
          <td style="padding: 10px; text-align: center;">465 mm (230 mm)</td>
        </tr>
        <tr>
          <td style="padding: 10px;">Chargement frontal double (Seq. double + plate + chaîne)</td>
          <td style="padding: 10px; text-align: center;">460 mm (230 mm)</td>
          <td style="padding: 10px; text-align: center;">470 mm (235 mm)</td>
        </tr>
        <tr style="background-color: #fafafa;">
          <td style="padding: 10px;">Chargement latéral gauche (Seq. simple + plate + chaîne)</td>
          <td style="padding: 10px; text-align: center;">460 mm (230 mm)</td>
          <td style="padding: 10px; text-align: center;">500 mm (230 mm)</td>
        </tr>
        <tr>
          <td style="padding: 10px;">Chargement latéral double (Seq. double + plate + chaîne)</td>
          <td style="padding: 10px; text-align: center;">460 mm (230 mm)</td>
          <td style="padding: 10px; text-align: center;">540 mm (270 mm)</td>
        </tr>
      </tbody>
    </table>
  </div>
  `,
  features: [
    "Tête mixte : chaîne + plate (avec ou sans paillettes)",
    "Commutation facile entre points plats et points chaîne/serviette",
    "Chargement frontal ou latéral disponible",
    "Disponible en configurations simple ou double paillette",
    "Espacement minimum entre têtes optimisé selon les aiguilles"
  ],
  applications: [
    "Broderie mode",
    "Textile personnalisé",
    "Broderie haut de gamme",
    "Accessoires avec effets mixtes (paillettes, chenille...)"
  ],
  image: "/mixed_head.jpg",
  resultImages: [
  "/images/final_result1.jpg",
  "/images/final_result2.jpg",
  "/images/final_result3.jpg"
],
demoVideo: "/images/Machine1.mp4"
},

{
  name: "Machine à broder simple",
  power: "De 4 à 12 têtes – jusqu’à 12 aiguilles",
  description: `
    Machine à broder industrielle dotée d’un système de rail en aluminium et d’un pantographe haute performance, adaptée à une grande variété de matériaux.

    <br/><br/>

    <strong style="display:block; font-size: 1.1rem; margin-bottom: 0.5rem;">Tableau des modèles disponibles :</strong>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem; border-radius: 8px; overflow: hidden; box-shadow: 0 0 8px rgba(0,0,0,0.05);">
        <thead style="background-color: #f44336; color: white;">
          <tr>
            <th style="padding: 10px;">Modèle</th>
            <th style="padding: 10px;">Nombre de têtes</th>
            <th style="padding: 10px;">Aiguilles (option)</th>
            <th style="padding: 10px;">Zone de broderie</th>
            <th style="padding: 10px;">Dimensions (mm)</th>
          </tr>
        </thead>
        <tbody>
          <tr style="background-color: #fafafa;">
            <td style="padding: 10px;">PX604</td>
            <td style="padding: 10px;">4</td>
            <td style="padding: 10px;">4, 6, 9, 12</td>
            <td style="padding: 10px;">400×680~1200</td>
            <td style="padding: 10px;">2920×1810×1700</td>
          </tr>
          <tr>
            <td style="padding: 10px;">PX606</td>
            <td style="padding: 10px;">6</td>
            <td style="padding: 10px;">4, 6, 9, 12</td>
            <td style="padding: 10px;">400×680~1200</td>
            <td style="padding: 10px;">3700×1810×1700</td>
          </tr>
          <tr style="background-color: #fafafa;">
            <td style="padding: 10px;">PX608</td>
            <td style="padding: 10px;">8</td>
            <td style="padding: 10px;">4, 6, 9, 12</td>
            <td style="padding: 10px;">400×680~1200</td>
            <td style="padding: 10px;">4500×1810×1700</td>
          </tr>
          <tr>
            <td style="padding: 10px;">PX610</td>
            <td style="padding: 10px;">10</td>
            <td style="padding: 10px;">4, 6, 9, 12</td>
            <td style="padding: 10px;">400×680~1200</td>
            <td style="padding: 10px;">5300×1810×1700</td>
          </tr>
          <tr style="background-color: #fafafa;">
            <td style="padding: 10px;">PX612</td>
            <td style="padding: 10px;">12</td>
            <td style="padding: 10px;">4, 6, 9, 12</td>
            <td style="padding: 10px;">300×680~1200</td>
            <td style="padding: 10px;">4900×1810×1700</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
features: [
  "Système de rails linéaires en aluminium stabilisé pour une longue durée de vie",
  "Pantographe unique assurant une broderie plus précise",
  "Système de coupe centralisé assurant une finition parfaite après la coupe du fil",
  "Peinture automobile importée offrant un design élégant",
  "Composants de haute qualité d'origine japonaise : roulements, crochet rotatif, moteur servo principal",
  "Technologie avancée de subdivision triphasée",
  "Compatible avec divers matériaux de différentes épaisseurs",
],
  applications: [
    "Vêtements personnalisés",
    "Broderie industrielle",
    "Textiles décoratifs",
    "Articles promotionnels"
  ],
  image: "/embroidery-simple.jpg",
    resultImages: [
  "/images/flat-machine3.jpg",
  "/images/flat-machine6.jpg",
  "/images/flat-machine4.jpg"
],

},

      ]
    },
    {
      id: "laser-cutting",
      title: "Découpe Laser",
      icon: Scissors,
      products: [
        {
          name: "Machine de gravure et de découpe laser pour l'industrie du vêtement",
          power: "50 W, 60 W, 80 W, 100 W",

          description: "Solution compacte pour la gravure et la découpe précises sur textiles et matériaux souples.",
          features: [ "Zone de gravure : 1300×900 mm, 1500×900 mm",
                      "Puissance du laser : 50 W, 60 W, 80 W, 100 W",
                      "Vitesse de gravure : 1000 mm/s",
                      "Vitesse de découpe : 600 mm/s",
                      "Caractère minimal façonnable : Caractère chinois 2×2 mm, lettre 1×1 mm",
                      "Résolution : ≤ 4000 dpi",
                      "Alimentation électrique : AC 220V ±10 %, 50Hz",
                     "Précision de positionnement : < 0,01 mm",
                      "Puissance totale : < 1500 W",
                     "Température de fonctionnement : 5–95 %",
                    "Formats graphiques pris en charge : BMP, GIF, JPEG, PCX, TGA, TIFF, PLT, CDR, DMG, DXF",
                     "Connexion directe possible avec le logiciel de CAO pour vêtements (Garment CAD)"
                    ],
          applications: ["Textile", "Métal", "Plastique"],

          image: "lazervetement0.jpg",
            resultImages: [
  "/images/echant1.jpg",
  "/images/echant2.jpg"
],
        },
{
  name: "Machine de gravure laser pour tampons",
  power: "40 W",
  description: "Graveuse laser compacte idéale pour la fabrication de tampons, objets artisanaux et petites pièces décoratives sur matériaux non métalliques.",
  features: [
    "Modèles disponibles : BARUTEX-40A (150×200 mm), BARUTEX-40B (220×200 mm)",
    "Puissance du laser : 40 W",
    "Type de laser : Tube laser CO2 scellé",
    "Vitesse de gravure : 0–200 mm/s",
    "Vitesse de découpe : 0–300 mm/s",
    "Répétabilité : ≤ 0,015 mm",
    "Profondeur de coupe sur matériaux organiques : 0–3 mm",
    "Caractère minimal : 1,5 × 1,5 mm",
    "Alimentation : 220V ±10 % 50Hz ou 110V ±10 % 60Hz",
    "Puissance totale : 200 W",
    "Température de fonctionnement : 0–45 ℃"
  ],
  applications: [
    "Timbres et tampons",
    "Objets artisanaux",
    "Bois fin",
    "Carton",
    "Cuir",
    "Plastique",
    "Caoutchouc",
    "Verre organique (plexiglas)",
    "Textile"
  ],
  image: "/laserstamp.jpeg",
  resultImages: [
  "/images/laser-engraving-acrylic-stamps.jpg",
  "/images/images.jpeg"
],
},

      ]
    },
    {
      id: "digital-printing",
      title: "Machine d’impression",
      icon: Printer,
      products: [
{
  name: "Imprimante textile manuelle",
  power: "–",
  description: `
    Équipement manuel adapté à l'impression sur tous types de matériaux plats : t-shirt, tissu, chaussettes, parapluie, plaque PVC, étiquette, sac, etc.

    <br/><br/>
    <strong style="display:block; font-size:1.1rem; margin-bottom:0.5rem;">Modèles et tailles d'impression :</strong>
    <div style="overflow-x:auto;">
      <table style="width:100%; border-collapse:collapse; font-size:0.95rem; border-radius:8px; overflow:hidden; box-shadow:0 0 8px rgba(0,0,0,0.05);">
        <thead style="background-color:#f44336; color:#fff;">
          <tr>
            <th style="padding:10px; text-align:left;">Modèle (C = couleurs • S = stations)</th>
            <th style="padding:10px; text-align:center;">Taille d'impression</th>
          </tr>
        </thead>
        <tbody>
          <tr style="background-color:#fafafa;">
            <td style="padding:10px;">4C / 4S</td>
            <td style="padding:10px; text-align:center;">350 × 450 mm</td>
          </tr>
          <tr>
            <td style="padding:10px;">6C / 6S</td>
            <td style="padding:10px; text-align:center;">350 × 450 mm</td>
          </tr>
          <tr style="background-color:#fafafa;">
            <td style="padding:10px;">8C / 8S</td>
            <td style="padding:10px; text-align:center;">350 × 450 mm</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  features: [
    "Structure en acier heavy-duty avec système de pinces résistantes pour un maintien parfait à l’horizontale et à la verticale",
    "Réglage de hauteur de palette 4 points pour une registration couleur à ±0,10 mm",
    "Système de verrouillage de la tête d’impression pour une précision maximale",
    "Roulements coniques intégrés pour une production élevée et une manipulation simplifiée",
    "Zone d'impression : 350 × 450 mm",
    "Palette : 400 × 500 mm (ou sur demande client)",
    "Séchoir mobile : 6 kW, 200 V, 50 Hz, monophasé",
    "Conditionnement : 1 set en caisse bois (non fumigée) — Dim. 1200 × 1200 × 1300 mm",
    "MOQ : 1 set"
  ],
  applications: [
    "T-shirt",
    "Tissu",
    "Chaussettes",
    "Parapluie",
    "Plaque PVC",
    "Étiquette",
    "Sac"
  ],
  image: "/manual-machine-printing.jpg",
    resultImages: [
  "/images/4-1300x867.jpg",
  "/images/Vastex-V1000-1.jpg",
  "/images/1-Station-1-Color-_V1000-11-T_lg.jpg"
],
},
{
  name: "Imprimante textile rouleau à rouleau MT-TXI3200",
  Power: "220 V, 50 Hz, 3 phases",
  modelNo: "MT-TXI3200",
  description: "Imprimante automatique Roll-to-Roll pour impression directe sur tissu, conçue pour la production industrielle de haute qualité.",
  features: [
    "Impression directe sur tissu",
    "Structure Roll-to-Roll robuste",
    "6 couleurs : CMJN + Orange + Bleu",
    "Usage : impression sur textiles (vêtements, linge de maison…)",
    "Grade : automatique",
    "Interface : USB 2.0",
    "Vitesse : 22 m²/h",
    "Systèmes supportés : Windows XP, Windows 7",
    "Tête d’impression : Epson dernière technologie",
    "Largeur max. d’impression : 1,8 m ou 2,2 m (en option)",
    "Résolution : 1440 × 1440 dpi",
    "Emballage : caisse en bois",
    "Certifications : CE & SGS",
    "Marque : Meitu (MT)",
    "Origine : Shanghai, Chine",
    "Code HS : 84431980",
    "Capacité de production : 3000 sets/an"
  ],
  applications: [
    "Production industrielle textile"
  ],
  image: "/textile.jpg",
      resultImages: [
  "/images/Digital.jpeg",
  "/images/digital2.jpeg",
  "/images/TextilePrinting1200x627.jpg"
],
}

      ]
    }
  ];
    const allApplications = useMemo(
    () =>
      Array.from(
        new Set(
          productCategories.flatMap(c =>
            c.products.flatMap(p => p.applications)
          )
        )
      ),
    [productCategories]
  );

  return (
    <div className="min-h-screen pt-8">
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-red-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Nos Produits</h1>
            <p className="text-xl leading-relaxed opacity-90">
              Découvrez notre gamme complète de solutions technologiques avancées, 
              conçues pour répondre aux exigences les plus strictes de l'industrie moderne.
            </p>
          </div>
        </div>
      </section>

  

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
                    {/* Header: Title + Filter Toggle */}
          <div className="flex flex-col lg:flex-row justify-between items-center mb-8 gap-4">
            <h2 className="text-3xl font-bold">Catalogue Machines</h2>
            <Button
  onClick={() => setFilterOpen(o => !o)}
  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-white shadow-lg transition-transform
    bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700
    ${filterOpen ? "scale-105" : ""}`}
>
  <SlidersHorizontal className="w-5 h-5" />
  <span className="font-medium">
    {filterOpen ? "Fermer les filtres" : "Afficher les filtres"}
  </span>
</Button>
          </div>
  {/* Tabs */}
          <Tabs defaultValue="laser-marking" className="max-w-7xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              {productCategories.map(cat => (
                <TabsTrigger key={cat.id} value={cat.id} className="flex items-center space-x-2">
                  <cat.icon className="h-5 w-5" /> <span>{cat.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

 {productCategories.map(cat => (
              <TabsContent key={cat.id} value={cat.id}>
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold flex items-center space-x-2">
                    <cat.icon className="text-red-600" /> <span>{cat.title}</span>
                  </h3>
                  <p className="text-gray-600">Solutions professionnelles de {cat.title.toLowerCase()} à la pointe de la technologie.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {cat.products
                    .filter(p =>
                      p.name.toLowerCase().includes(searchText.toLowerCase()) &&
                      (!appFilter || p.applications.includes(appFilter))
                    ).map((product, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="aspect-video overflow-hidden">
                         <img
                           src={
                            product.image.startsWith("http") || product.image.includes("unsplash.com")
                            ? product.image
                            : `/images/${product.image}`
                             }
                           alt={product.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />

                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl text-gray-900">{product.name}</CardTitle>
                            <Badge variant="secondary" className="mt-2">{product.power}</Badge>
                          </div>
                        </div>
                       <CardDescription
                      className="text-gray-600"
                             dangerouslySetInnerHTML={{ __html: product.description }}
                          />

                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Caractéristiques :</h4>
                          <ul className="space-y-2">
                            {product.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center text-sm text-gray-700">
                                <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Applications :</h4>
                          <div className="flex flex-wrap gap-2">
                            {product.applications.map((app, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {app}
                              </Badge>
                            ))}
                          </div>
                        </div>
                       {product.resultImages && product.resultImages.length > 0 && (
                       <div className="pt-6">
                        <h4 className="text-base font-semibold text-gray-800 mb-4 uppercase tracking-wide border-b pb-1">
                          Exemples de réalisation
                           </h4>
                         <PhotoProvider>
                        <div className="grid grid-cols-3 gap-4">
                       {product.resultImages.map((imgUrl, idx) => (
                         <PhotoView key={idx} src={imgUrl}>
                        <div className="relative group cursor-zoom-in rounded-lg overflow-hidden shadow-sm">
                           <img
                         src={imgUrl}
                         alt={`Exemple ${idx + 1}`}
                      className="w-full h-24 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white text-sm font-medium">Aperçu</span>
                          </div>
                            </div>
                         </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  </div>
)}
{openVideo && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
    <div
      className="bg-white rounded-xl overflow-hidden shadow-xl max-w-3xl w-full mx-4"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close button */}
      <div className="flex justify-end p-2">
        <button
          onClick={() => setOpenVideo(null)}
          className="text-gray-600 hover:text-gray-800 transition"
        >
          ×
        </button>
      </div>

      {/* Video */}
      <div className="px-4 pb-4">
        <video
          src={openVideo}
          controls
          autoPlay
          className="w-full rounded-md"
        />
      </div>
    </div>
  </div>
)}




                        <div className="flex space-x-3 pt-4">
                          <Button className="flex-1 bg-red-600 hover:bg-red-700">
                            <Download className="mr-2 h-4 w-4" />
                            Fiche Technique
                          </Button>
  {"demoVideo" in product && product.demoVideo && (
     <Button
       variant="outline"
       className="flex-1"
       onClick={() => setOpenVideo(product.demoVideo!)}
     >
       <Eye className="mr-2 h-4 w-4" />
       Démonstration
     </Button>
   )}

                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
 {/* OVERLAY */}
<div
  className={`fixed inset-0 bg-black transition-opacity duration-300 ${
    filterOpen ? "opacity-40 pointer-events-auto" : "opacity-0 pointer-events-none"
  }`}
  onClick={() => setFilterOpen(false)}
/>

{/* SIDEBAR */}
<aside
  className={`fixed top-0 left-0 bottom-0 w-80 bg-gray-50 shadow-2xl transform transition-transform duration-300 z-50
    ${filterOpen ? "translate-x-0" : "-translate-x-full"}`}
>
  {/* HEADER */}
  <div className="sticky top-0 z-10 bg-gradient-to-r from-red-600 to-red-500 px-6 py-4 flex items-center justify-between text-white">
    <div className="flex items-center space-x-2">
      <SlidersHorizontal className="h-5 w-5" />
      <h4 className="text-lg font-semibold">Filtrer les produits</h4>
    </div>
    <button onClick={() => setFilterOpen(false)}>
      <CloseIcon className="h-5 w-5" />
    </button>
  </div>

  {/* CONTENT */}
  <div className="overflow-y-auto h-full px-6 py-6 space-y-6">
    
    {/* — Search Card — */}
    <section className="bg-white p-4 rounded-xl shadow">
      <div className="flex items-center mb-3">
        <span className="border-l-4 border-red-600 pl-2 flex items-center space-x-2">
          <Search className="h-5 w-5 text-red-600" />
          <h5 className="text-sm font-semibold text-gray-700 uppercase">Recherche</h5>
        </span>
      </div>
      <Input
        value={searchText}
        onChange={e => setSearchText(e.currentTarget.value)}
        placeholder="Type a product name…"
        className="bg-gray-50 border-gray-200 focus:border-red-500"
      />
    </section>

    {/* — Application Tags Card — */}
    <section className="bg-white p-4 rounded-xl shadow">
      <div className="flex items-center mb-3">
        <span className="border-l-4 border-red-600 pl-2 flex items-center space-x-2">
          <Tag className="h-5 w-5 text-red-600" />
          <h5 className="text-sm font-semibold text-gray-700 uppercase">Application</h5>
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {allApplications.map(app => (
          <button
            key={app}
            onClick={() => setAppFilter(a => (a === app ? null : app))}
            className={`
              flex items-center justify-center px-4 py-1 rounded-lg text-sm font-medium transition
              ${appFilter === app
                ? "bg-red-600 text-white shadow-md"
                : "bg-white text-gray-800 border border-gray-200 hover:bg-gray-50"}
            `}
          >
            {app}
          </button>
        ))}
      </div>
    </section>

    {/* — Clear All — */}
    <section className="text-center">
      <Button
        variant="ghost"
        className="text-gray-600 hover:text-gray-800"
        onClick={() => {
          setSearchText("");
          setAppFilter(null);
        }}
      >
        Clear All Filters
      </Button>
    </section>
  </div>
</aside>
    </div>
  );
};

export default Products;
