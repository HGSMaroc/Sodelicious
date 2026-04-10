// ============================================================
// SO DELICIOUS PASTRY — data.js
// Fichier de données centralisé — modifiez ici uniquement
// ============================================================

// ----------------------------------------------------------
// IMAGES — Remplacez les URLs par vos vraies photos
// ----------------------------------------------------------
const IMG = {
  box_cakes:   "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=600&q=80",
  pistache:    "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80",
  choco_layer: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
  rv_slice:    "https://images.unsplash.com/photo-1547414368-ac947d00b91d?w=600&q=80",
  lemon_loaf:  "https://images.unsplash.com/photo-1621891334498-7714c44e3e63?w=600&q=80",
  choco_loaf:  "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&q=80",
  cup_choco:   "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=600&q=80",
  cup_rv:      "https://images.unsplash.com/photo-1570145820259-b5b80c5c8bd6?w=600&q=80",
  can_rv:      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&q=80",
  can_fruits:  "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80"
};

// ----------------------------------------------------------
// CONFIG GÉNÉRALE
// ----------------------------------------------------------
let CONFIG = {
  shopName:  "So Delicious Pastry",
  phone:     "+212672555553",
  whatsapp:  "212672555553",
  rib: {
    bank:   "CIH Bank",
    number: "230 810 4568291057001 26"
  },
  copyright: "2026"
};

// ----------------------------------------------------------
// CATÉGORIES
// zone: "both" | "rabat" | "hors"
// ----------------------------------------------------------
let categories = [
  { id:'cat1', emoji:'🎂', nameFr:'Gâteaux',  nameAr:'كعكات',   zone:'both' },
  { id:'cat2', emoji:'🍞', nameFr:'Cakes',     nameAr:'كيكات',   zone:'both' },
  { id:'cat3', emoji:'🧁', nameFr:'Cupcakes',  nameAr:'كاب كيك', zone:'both' },
  { id:'cat4', emoji:'🥫', nameFr:'Can Cake',  nameAr:'كانكيك',  zone:'both' },
];

// ----------------------------------------------------------
// PRODUITS
// promoRabat / promoHors : null = pas de promo
// bestSeller : true = section Best Sellers
// isNew      : true = section Nouveautés
// ----------------------------------------------------------
let products = [

  // ---- GÂTEAUX ----
  {
    id:'p1', image:IMG.box_cakes,
    nameFr:'Box Cakes', nameAr:'بوكس كيك',
    descFr:'Choisissez votre saveur parmi nos délicieuses créations en box individuelle.',
    descAr:'اختر نكهتك من بين إبداعاتنا الشهية في علبة فردية.',
    category:'cat1', zone:'both',
    priceRabat:55, priceHors:65, promoRabat:45, promoHors:55,
    flavors:['Manguier','Tiramisu','Tres Leches','Fraisier','Lemon'],
    tag:'Box', rabatOnly:false, bestSeller:true, isNew:false
  },
  {
    id:'p2', image:IMG.pistache,
    nameFr:'Cake Pistache', nameAr:'كيك الفستق',
    descFr:'Moelleux au cœur fondant de pistache, élégant, onctueux et parfumé.',
    descAr:'طري بقلب فستق ذائب، أنيق وعطري.',
    category:'cat1', zone:'both',
    priceRabat:180, priceHors:210, promoRabat:null, promoHors:null,
    flavors:[], tag:'⭐ Best', rabatOnly:false, bestSeller:true, isNew:true
  },
  {
    id:'p3', image:IMG.choco_layer,
    nameFr:'Gâteau Chocolat', nameAr:'كعكة الشوكولاتة',
    descFr:'Généreux gâteau au chocolat avec crème onctueuse et copeaux de chocolat noir.',
    descAr:'كعكة شوكولاتة سخية مع كريمة ناعمة وبراعم الشوكولاتة الداكنة.',
    category:'cat1', zone:'both',
    priceRabat:90, priceHors:110, promoRabat:75, promoHors:null,
    flavors:[], tag:'🍫', rabatOnly:false, bestSeller:false, isNew:false
  },
  {
    id:'p4', image:IMG.rv_slice,
    nameFr:'Red Velvet', nameAr:'ريد فيلفيت',
    descFr:'Part de gâteau Red Velvet moelleux avec crème cheese onctueuse.',
    descAr:'كعكة ريد فيلفيت طرية مع كريمة الجبن الناعمة.',
    category:'cat1', zone:'rabat',
    priceRabat:75, priceHors:null, promoRabat:null, promoHors:null,
    flavors:[], tag:'❤️ Fav', rabatOnly:true, bestSeller:true, isNew:false
  },

  // ---- CAKES ----
  {
    id:'p5', image:IMG.lemon_loaf,
    nameFr:'Cake Citron Pavot', nameAr:'كيك الليمون بالخشخاش',
    descFr:'Cake moelleux au citron avec graines de pavot et glaçage acidulé.',
    descAr:'كيك طري بالليمون مع بذور الخشخاش وتزجيج منعش.',
    category:'cat2', zone:'both',
    priceRabat:85, priceHors:100, promoRabat:null, promoHors:null,
    flavors:[], tag:'🍋', rabatOnly:false, bestSeller:false, isNew:true
  },
  {
    id:'p6', image:IMG.choco_loaf,
    nameFr:'Cake Chocolat Marbré', nameAr:'كيك الشوكولاتة الرخامي',
    descFr:'Cake marbré au chocolat intense avec nappage brillant.',
    descAr:'كيك رخامي بالشوكولاتة المكثفة مع طلاء لامع.',
    category:'cat2', zone:'both',
    priceRabat:80, priceHors:95, promoRabat:65, promoHors:80,
    flavors:[], tag:'', rabatOnly:false, bestSeller:false, isNew:false
  },

  // ---- CUPCAKES ----
  {
    id:'p7', image:IMG.cup_choco,
    nameFr:'Cupcake Chocolat', nameAr:'كاب كيك شوكولاتة',
    descFr:'Cupcake garni de crème vanille onctueuse et copeaux de chocolat noir.',
    descAr:'كاب كيك بكريمة الفانيليا الناعمة وبراعم الشوكولاتة الداكنة.',
    category:'cat3', zone:'rabat',
    priceRabat:30, priceHors:null, promoRabat:null, promoHors:null,
    flavors:[], tag:'', rabatOnly:true, bestSeller:false, isNew:false
  },
  {
    id:'p8', image:IMG.cup_rv,
    nameFr:'Cupcake Red Velvet', nameAr:'كاب كيك ريد فيلفيت',
    descFr:'Cupcake Red Velvet avec crème cheese et miettes de velours rouge.',
    descAr:'كاب كيك ريد فيلفيت مع كريمة الجبن وفتات المخمل الأحمر.',
    category:'cat3', zone:'rabat',
    priceRabat:30, priceHors:null, promoRabat:null, promoHors:null,
    flavors:[], tag:'❤️', rabatOnly:true, bestSeller:false, isNew:false
  },

  // ---- CAN CAKE ----
  {
    id:'p9', image:IMG.can_rv,
    nameFr:'Can Cake Red Velvet', nameAr:'كانكيك ريد فيلفيت',
    descFr:'Red Velvet & crème cheese onctueuse en canette individuelle.',
    descAr:'ريد فيلفيت وكريمة جبن ناعمة في علبة فردية.',
    category:'cat4', zone:'both',
    priceRabat:50, priceHors:60, promoRabat:null, promoHors:null,
    flavors:[], tag:'', rabatOnly:false, bestSeller:true, isNew:false
  },
  {
    id:'p10', image:IMG.can_fruits,
    nameFr:'Can Cake Fruits Rouges', nameAr:'كانكيك الفواكه الحمراء',
    descFr:'Frais, fruité & parfaitement équilibré. Génoise, crème et fruits rouges.',
    descAr:'طازج، فاكهي ومتوازن تماماً. جنوا وكريمة وفواكه حمراء.',
    category:'cat4', zone:'both',
    priceRabat:50, priceHors:60, promoRabat:null, promoHors:null,
    flavors:[], tag:'', rabatOnly:false, bestSeller:false, isNew:true
  },
];
