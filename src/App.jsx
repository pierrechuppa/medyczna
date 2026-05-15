import React, { cloneElement, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  ClipboardList,
  Heart,
  Mail,
  Package,
  Ruler,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Vote,
  WashingMachine,
} from "lucide-react";

const cx = (...classes) => classes.filter(Boolean).join(" ");

function Button({ children, className = "", variant = "default", size = "default", asChild = false, type = "button" }) {
  const base = "inline-flex items-center justify-center whitespace-nowrap font-semibold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-zinc-950/10 disabled:pointer-events-none disabled:opacity-50";
  const variants = {
    default: "bg-zinc-950 text-white hover:bg-zinc-800",
    outline: "border border-zinc-300 bg-white text-zinc-950 hover:bg-zinc-50",
  };
  const sizes = {
    default: "h-10 px-4 py-2 text-sm",
    lg: "px-7 py-6 text-base",
  };
  const classes = cx(base, variants[variant], sizes[size], className);

  if (asChild && React.isValidElement(children)) {
    return cloneElement(children, {
      className: cx(classes, children.props.className),
    });
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}

function Card({ children, className = "", id }) {
  return <div id={id} className={className}>{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

const images = {
  hero: "/images/scrubee/lookbook-navy.png",

  top: "/images/scrubee/product-top-navy.png",
  pants: "/images/scrubee/product-pants-navy.png",

  topNavy: "/images/scrubee/product-top-navy.png",
  pantsNavy: "/images/scrubee/product-pants-navy.png",
  topSage: "/images/scrubee/product-top-sage.png",
  pantsSage: "/images/scrubee/product-pants-sage.png",
  topGraphite: "/images/scrubee/product-top-graphite.png",
  pantsGraphite: "/images/scrubee/product-pants-graphite.png",
  topRose: "/images/scrubee/product-top-dusty-rose.png",
  pantsRose: "/images/scrubee/product-pants-dusty-rose.png",

  navy: "/images/scrubee/lookbook-navy.png",
  sage: "/images/scrubee/lookbook-sage.png",
  graphite: "/images/scrubee/lookbook-graphite.png",
  rose: "/images/scrubee/lookbook-dusty-rose.png",
};

const colors = [
  {
    id: "navy",
    name: "Granat kliniczny",
    description: "bezpieczny wybór na uczelnię, praktyki i pierwsze dyżury",
    className: "bg-slate-900",
    image: images.navy,
    topImage: images.topNavy,
    pantsImage: images.pantsNavy,
  },
  {
    id: "sage",
    name: "Sage green",
    description: "spokojny kolor do gabinetu, fizjo, beauty i stomatologii",
    className: "bg-emerald-200",
    image: images.sage,
    topImage: images.topSage,
    pantsImage: images.pantsSage,
  },
  {
    id: "graphite",
    name: "Grafit",
    description: "profesjonalny basic na co dzień, który pasuje do wielu miejsc pracy",
    className: "bg-zinc-700",
    image: images.graphite,
    topImage: images.topGraphite,
    pantsImage: images.pantsGraphite,
  },
  {
    id: "rose",
    name: "Dusty rose",
    description: "kobiece, miękkie wizualnie, ale nadal profesjonalne",
    className: "bg-rose-200",
    image: images.rose,
    topImage: images.topRose,
    pantsImage: images.pantsRose,
  },
];

const colorProductImages = colors.map((color) => ({
  color: color.name,
  description: color.description,
  swatch: color.className,
  topImage: color.topImage,
  pantsImage: color.pantsImage,
}));

const products = [
  {
    title: "Bluza medyczna",
    tag: "góra",
    image: images.top,
    text: "Fitted basic z krótkim rękawem, czystą linią dekoltu, modelującymi przeszyciami i subtelnymi kieszeniami z przodu.",
    points: ["notch neckline", "krój pod sylwetkę", "lekki, profesjonalny wygląd"],
  },
  {
    title: "Spodnie medyczne",
    tag: "dół",
    image: images.pants,
    text: "Spodnie o prostym, lekko rozszerzanym kroju z wygodnym pasem, kieszeniami i rozcięciem przy dole nogawki.",
    points: ["wygodny pas", "lekka flara", "rozcięcie przy nogawce"],
  },
  {
    title: "Komplet startowy",
    tag: "najlepszy wybór",
    image: images.hero,
    text: "Bluza + spodnie w gotowym zestawie. Najprostszy wybór na pierwsze praktyki, gabinet lub start pracy.",
    points: ["jeden spójny look", "rabat w zestawie", "na praktyki i gabinet"],
  },
];

const directions = [
  ["Medycyna", "pierwsze zajęcia kliniczne, praktyki wakacyjne i dyżury"],
  ["Pielęgniarstwo", "wygodny komplet na ćwiczenia, praktyki i pierwszą pracę"],
  ["Fizjoterapia", "krój do ruchu, schylania, pracy z pacjentem i gabinetu"],
  ["Kosmetologia", "estetyczny wygląd do gabinetu beauty i medycyny estetycznej"],
  ["Stomatologia", "profesjonalny komplet do gabinetu i zajęć praktycznych"],
  ["Weterynaria", "praktyczny scrub na zajęcia, kliniki i pracę ze zwierzętami"],
];

const faqs = [
  {
    q: "Czy scrub nadaje się na pierwsze praktyki?",
    a: "Tak — kolekcja startowa powstaje z myślą o studentkach i młodych kobietach, które potrzebują pierwszego kompletu na uczelnię, praktyki, gabinet lub pierwsze dyżury. Przed zakupem warto tylko sprawdzić wymagania kolorystyczne swojej uczelni albo placówki.",
  },
  {
    q: "Jaki rozmiar wybrać?",
    a: "Na stronie znajdziesz tabelę wymiarów produktu oraz prostą instrukcję, jak porównać je z ubraniem, które już masz. Przy premierze pokażemy też zdjęcia na różnych wzrostach i sylwetkach.",
  },
  {
    q: "Czy będzie można wymienić rozmiar?",
    a: "Tak, łatwa wymiana rozmiaru jest jednym z założeń marki. Dokładne zasady wymiany i zwrotów pojawią się przed startem sprzedaży.",
  },
  {
    q: "Czy można kupić bluzę i spodnie osobno?",
    a: "Tak. Plan zakłada sprzedaż bluzy, spodni oraz kompletu w lepszej cenie. Dzięki temu możesz dobrać inny rozmiar góry i dołu.",
  },
  {
    q: "Czy będzie rabat studencki?",
    a: "Tak. Osoby zapisane na listę otrzymają wcześniejszy dostęp do kolekcji i kod rabatowy na pierwszy komplet.",
  },
  {
    q: "Czy mogę zamówić komplety z grupą z uczelni?",
    a: "Tak — planujemy zestawy grupowe dla studentek i zespołów gabinetowych. Zapisz się na listę i zaznacz, że interesuje Cię zamówienie grupowe.",
  },
  {
    q: "Czy to jest sklep czy lista oczekujących?",
    a: "Na tym etapie to landing MVP z listą oczekujących. Celem jest zebranie zainteresowania, preferowanych kolorów i rozmiarów przed większą produkcją. Sprzedaż może ruszyć później jako limitowany pre-order.",
  },
];

function SectionLabel({ children, dark = false }) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium shadow-sm ${
        dark
          ? "border border-white/15 bg-white/10 text-rose-100"
          : "border border-rose-200 bg-white/80 text-rose-700"
      }`}
    >
      <Sparkles className="h-4 w-4" />
      {children}
    </div>
  );
}

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-semibold text-zinc-950">{item.q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-zinc-500 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="px-5 pb-5 text-sm leading-7 text-zinc-600">{item.a}</p>}
    </div>
  );
}

function ImageBadge({ children }) {
  return (
    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-zinc-950 shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-[#fbf7f4] text-zinc-950">
      <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-[#fbf7f4]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-zinc-950 text-white">
              <Heart className="h-4 w-4" />
            </div>
            <span className="text-xl font-bold tracking-tight">Scrubee</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-600 md:flex">
            <a href="#jak-dziala" className="hover:text-zinc-950">Jak działa</a>
            <a href="#kolekcja" className="hover:text-zinc-950">Kolekcja</a>
            <a href="#lookbook" className="hover:text-zinc-950">Lookbook</a>
            <a href="#dla-kogo" className="hover:text-zinc-950">Dla kogo</a>
            <a href="#faq" className="hover:text-zinc-950">FAQ</a>
          </nav>
          <Button asChild className="rounded-full bg-zinc-950 px-5 text-white hover:bg-zinc-800">
            <a href="#lista">Dołącz do listy</a>
          </Button>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-rose-200/35 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[.95fr_1.05fr] lg:px-8 lg:py-24">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="relative z-10">
            <SectionLabel>Pierwsza kolekcja startowa · lista VIP</SectionLabel>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1.02] tracking-tight text-zinc-950 md:text-7xl">
              Twój pierwszy scrub na praktyki — bez stresu z rozmiarem.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-650 md:text-xl">
              Wygodne komplety medyczne dla studentek i młodych kobiet w medycynie. Na uczelnię, praktyki, gabinet i pierwsze dyżury — bez kroju, który wygląda jak worek.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full bg-zinc-950 px-7 py-6 text-base text-white hover:bg-zinc-800">
                <a href="#lista">Odbierz wcześniejszy dostęp <ArrowRight className="ml-2 h-5 w-5" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-zinc-300 bg-white px-7 py-6 text-base hover:bg-zinc-50">
                <a href="#kolekcja">Zobacz kolekcję</a>
              </Button>
            </div>
            <p className="mt-4 text-sm font-medium text-zinc-500">
              Bluza + spodnie · 3–4 kolory · rabat dla zapisanych · możliwość zamówień grupowych
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm text-zinc-600">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm"><Check className="h-4 w-4" /> Rabat studencki</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm"><Check className="h-4 w-4" /> Pomoc z rozmiarem</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm"><Check className="h-4 w-4" /> Głosowanie na kolory</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.1 }} className="relative z-10">
            <div className="relative rounded-[2.25rem] bg-white p-3 shadow-2xl shadow-zinc-900/10">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem]">
                <img src={images.hero} alt="Dwie modelki w granatowych kompletach medycznych Scrubee" className="h-full w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/75 to-transparent p-6 text-white">
                  <p className="text-sm text-white/75">Kolekcja startowa</p>
                  <h3 className="mt-1 text-2xl font-black">Granat kliniczny</h3>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-white/85">Najbezpieczniejszy kolor na uczelnię, praktyki i pierwsze dni pracy.</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-4 max-w-xs rounded-3xl bg-zinc-950 p-5 text-white shadow-xl">
                <p className="text-sm text-zinc-300">Najważniejsze założenie</p>
                <p className="mt-1 font-semibold">Scrub ma działać w realnym ruchu: przy schylaniu, chodzeniu, siedzeniu i długim dniu poza domem.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 md:grid-cols-4">
            {[
              [ShieldCheck, "Bez pustych obietnic", "Na stronie pokazujemy realny skład, wymiary i zasady wymiany."],
              [Ruler, "Rozmiar bez zgadywania", "Tabela produktu, zdjęcia na sylwetkach i poradnik wyboru."],
              [Package, "MVP bez nadmiaru", "Jedna dopracowana kolekcja zamiast chaotycznego sklepu."],
              [Users, "Dla studentek i grup", "Rabat studencki oraz opcja zamówień grupowych."],
            ].map(([Icon, title, text]) => (
              <Card key={title} className="rounded-3xl border-zinc-200 bg-white/80 shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-rose-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <SectionLabel>Problem</SectionLabel>
            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">Pierwszy scrub nie powinien być kolejnym stresem.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Nie wiesz, jaki rozmiar wybrać online.",
              "Boisz się, że spodnie będą źle leżeć w pasie albo biodrach.",
              "Nie chcesz wyglądać jak w przypadkowym, sztywnym uniformie.",
              "Potrzebujesz koloru, który sprawdzi się na uczelni i w gabinecie.",
            ].map((text) => (
              <div key={text} className="rounded-3xl bg-[#fbf7f4] p-6 text-lg font-semibold leading-7 text-zinc-800">{text}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="jak-dziala" className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <SectionLabel>Jak działa lista oczekujących?</SectionLabel>
            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">Najpierw zapis, potem limitowany pre-order.</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-600">To nie jest jeszcze ogromny sklep. To MVP, które pomaga sprawdzić realne zainteresowanie, rozmiary i kolory przed większą produkcją.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {[
              ["01", "Zapisujesz się", "Zostawiasz e-mail, kierunek, rozmiar i preferowany kolor."],
              ["02", "Głosujesz", "Pomagasz wybrać kolory i rozmiary pierwszej produkcji."],
              ["03", "Dostajesz kod", "Osoby z listy otrzymają wcześniejszy dostęp i rabat startowy."],
              ["04", "Zamawiasz w pre-orderze", "Jeśli kolekcja ruszy, kupujesz jako jedna z pierwszych."],
            ].map(([step, title, text]) => (
              <div key={step} className="rounded-[2rem] bg-white p-6 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950 text-sm font-black text-white">{step}</div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kolekcja" className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <SectionLabel>Kolekcja MVP</SectionLabel>
            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">Jedna kolekcja startowa. Prosty wybór.</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-600">Na start: bluza medyczna, spodnie i komplet w bazowych kolorach. Mniej chaosu, więcej pewności, że wybierasz coś, co naprawdę ma sens na praktyki i pierwsze dni pracy.</p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {products.map((product) => (
              <Card key={product.title} className="overflow-hidden rounded-[2rem] border-zinc-200 bg-white shadow-sm">
                <div className="relative h-80 overflow-hidden bg-zinc-100">
                  <img src={product.image} alt={product.title} className="h-full w-full object-cover" />
                  <ImageBadge>{product.tag}</ImageBadge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold">{product.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-600">{product.text}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {product.points.map((point) => (
                      <span key={point} className="rounded-full bg-[#fbf7f4] px-3 py-1 text-xs font-semibold text-zinc-700">{point}</span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-14">
            <div className="max-w-3xl">
              <h3 className="text-3xl font-black tracking-tight md:text-4xl">Zdjęcia poglądowe każdego koloru</h3>
              <p className="mt-4 text-lg leading-8 text-zinc-600">Każdy kolor ma osobne zdjęcie góry i spodni, żeby łatwiej porównać odcień, krój i detale przed produkcją.</p>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {colorProductImages.map((item) => (
                <div key={item.color} className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm">
                  <div className="grid grid-cols-2 gap-px bg-zinc-200">
                    <div className="relative h-72 bg-zinc-100">
                      <img src={item.topImage} alt={`${item.color} — bluza medyczna Scrubee`} className="h-full w-full object-cover" />
                      <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold shadow-sm">góra</span>
                    </div>
                    <div className="relative h-72 bg-zinc-100">
                      <img src={item.pantsImage} alt={`${item.color} — spodnie medyczne Scrubee`} className="h-full w-full object-cover" />
                      <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold shadow-sm">spodnie</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3">
                      <div className={`h-6 w-6 rounded-full border border-zinc-200 ${item.swatch}`} />
                      <h4 className="text-xl font-bold">{item.color}</h4>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="lookbook" className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <SectionLabel>Lookbook kolorów</SectionLabel>
              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">Zobacz Scrubee w różnych odsłonach.</h2>
              <p className="mt-5 text-lg leading-8 text-zinc-600">Kolory startowe dobrane tak, żeby działały na uczelni, w gabinecie i w codziennej pracy — od bezpiecznego granatu po bardziej lifestyle’owe odcienie. Niżej są zdjęcia poglądowe pełnych kompletów w użyciu.</p>
            </div>
            <Button asChild variant="outline" className="w-fit rounded-full border-zinc-300 bg-white px-6 py-5">
              <a href="#lista">Zagłosuj na kolor</a>
            </Button>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {colors.map((color) => (
              <div key={color.name} className="group overflow-hidden rounded-[2rem] bg-white shadow-sm">
                <div className="relative h-[420px] overflow-hidden">
                  <img src={color.image} alt={color.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/80 to-transparent p-5 text-white">
                    <div className={`mb-3 h-6 w-6 rounded-full border border-white/60 ${color.className}`} />
                    <h3 className="text-xl font-bold">{color.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/80">{color.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="dla-kogo" className="bg-zinc-950 px-5 py-20 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <SectionLabel dark>Dla kogo</SectionLabel>
            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">Dla dziewczyn, które zaczynają swoją drogę w medycynie.</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-300">Nie tworzymy kolejnego ogólnego sklepu. Scrubee startuje z myślą o konkretnym momencie: pierwsze praktyki, pierwsze wejście do gabinetu, pierwsze dni w pracy.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {directions.map(([title, text]) => (
                <div key={title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/5 p-3">
            <img src={images.hero} alt="Komplety medyczne Scrubee w nowoczesnym wnętrzu" className="h-[620px] w-full rounded-[1.75rem] object-cover" />
          </div>
        </div>
      </section>

      <section id="material" className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <SectionLabel>Materiał i jakość</SectionLabel>
            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">Tu nie ma miejsca na puste „premium”.</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-600">W finalnej wersji ta sekcja powinna pokazywać konkret: skład, gramaturę, elastan, instrukcję prania i zdjęcia detali. Jeśli czegoś jeszcze nie wiesz — lepiej napisać „w trakcie testów” niż obiecywać bez dowodu.</p>
            <div className="mt-7 space-y-3">
              {[
                [WashingMachine, "Test po praniu", "Pokaż, jak materiał wygląda po kilku praniach i czy zachowuje formę."],
                [ClipboardList, "Skład materiału", "Wpisz realny skład, gramaturę i zalecenia pielęgnacji."],
                [ShieldCheck, "Nieprześwitywanie", "Dodaj zdjęcia w świetle dziennym i opis, dla których kolorów było testowane."],
                [Ruler, "Krój w ruchu", "Pokaż siedzenie, schylanie, podnoszenie rąk i pracę przy gabinecie."],
              ].map(([Icon, title, text]) => (
                <div key={title} className="flex gap-4 rounded-3xl bg-white p-5 shadow-sm">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700"><Icon className="h-5 w-5" /></div>
                  <div>
                    <h3 className="font-bold">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-zinc-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm">
              <img src={images.top} alt="Detal bluzy medycznej Scrubee" className="h-[520px] w-full object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-bold">Detal bluzy</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">Dekolt, przeszycia, kieszenie i dopasowanie góry.</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm sm:mt-10">
              <img src={images.pants} alt="Detal spodni medycznych Scrubee" className="h-[520px] w-full object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-bold">Detal spodni</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">Pas, kieszenie, linia nogawki i rozcięcie przy dole.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="rozmiary" className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <SectionLabel>Rozmiary i zaufanie</SectionLabel>
            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">Kup online spokojniej.</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-600">Największa obawa przy pierwszym scrubsie to rozmiar. Dlatego landing nie może tylko „ładnie wyglądać” — musi pomagać wybrać dobrze i zmniejszać ryzyko wymiany.</p>
            <div className="mt-7 space-y-3">
              {["Tabela wymiarów ciała i produktu", "Zdjęcia na różnych wzrostach i sylwetkach", "Informacja o modelce i noszonym rozmiarze", "Jasne zasady wymiany i zwrotu", "Transparentny skład materiału i pielęgnacja"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-[#fbf7f4] p-4 shadow-sm">
                  <Check className="h-5 w-5 text-emerald-600" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] bg-[#fbf7f4] p-6 shadow-sm">
            <h3 className="text-2xl font-bold">Przykład tabeli rozmiarów</h3>
            <p className="mt-2 text-sm text-zinc-500">W finalnej wersji wpisz realne wymiary produktu po odszyciu próbek.</p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-white text-zinc-600">
                  <tr>
                    <th className="p-4">Rozmiar</th>
                    <th className="p-4">Biust</th>
                    <th className="p-4">Talia</th>
                    <th className="p-4">Biodra</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 bg-white/70">
                  {["XS", "S", "M", "L", "XL"].map((size) => (
                    <tr key={size}>
                      <td className="p-4 font-bold">{size}</td>
                      <td className="p-4 text-zinc-600">uzupełnij</td>
                      <td className="p-4 text-zinc-600">uzupełnij</td>
                      <td className="p-4 text-zinc-600">uzupełnij</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <SectionLabel>Budujemy zaufanie od zera</SectionLabel>
            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">Social proof bez udawanych opinii.</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-600">Na starcie nie trzeba pisać „tysiące klientek”. Lepiej pokazać proces: testy kroju, ankiety kolorów, zgłoszenia testerek i realne zdjęcia próbek.</p>
          </div>
          <div className="rounded-[2rem] bg-white p-7 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-3">
              {[[Vote, "ankieta kolorów"], [Users, "testy na sylwetkach"], [Star, "UGC od pierwszych klientek"]].map(([Icon, title]) => (
                <div key={title} className="rounded-3xl bg-[#fbf7f4] p-5 text-center">
                  <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-100 text-rose-700"><Icon className="h-5 w-5" /></div>
                  <p className="font-bold">{title}</p>
                </div>
              ))}
            </div>
            <blockquote className="mt-6 rounded-3xl border-l-4 border-zinc-950 bg-[#fbf7f4] p-6 text-lg font-semibold leading-8">
              „Szukamy pierwszych testerek kolekcji. Chcesz przymierzyć prototyp, pomóc wybrać kolor i dostać kod na premierę?”
            </blockquote>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[#fbf7f4] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div>
              <SectionLabel>W przyszłości</SectionLabel>
              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">Nie tylko scrub. Cały start w medycynie.</h2>
              <p className="mt-5 text-lg leading-8 text-zinc-600">Scrubee może rozwijać się też jako miejsce z materiałami dla studentek: checklisty na praktyki, fiszki, mini kursy z anatomii i proste poradniki na pierwszy rok.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[[BookOpen, "Mini kursy", "anatomia, podstawy, plan nauki"], [ClipboardList, "Checklisty", "pierwsze praktyki i rzeczy do torby"], [Star, "Starter pack", "scrub + materiały + rabat"]].map(([Icon, title, text]) => (
                <div key={title} className="rounded-[2rem] bg-white p-6 shadow-sm">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950 text-white"><Icon className="h-6 w-6" /></div>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div>
              <SectionLabel>Rabat studencki</SectionLabel>
              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">Studiujesz kierunek medyczny lub okołomedyczny?</h2>
              <p className="mt-5 text-lg leading-8 text-zinc-600">Dołącz do listy i odbierz wcześniejszy dostęp do kolekcji startowej, kod rabatowy na pierwszy komplet oraz możliwość głosowania na kolory pierwszej produkcji.</p>
              <div className="mt-7 rounded-3xl bg-[#fbf7f4] p-5 text-sm leading-6 text-zinc-600">
                <strong className="text-zinc-950">Po co tyle pytań w formularzu?</strong> Dzięki temu przed produkcją widać, jakie rozmiary, kolory i grupy klientek mają największy potencjał. To zmniejsza ryzyko nietrafionego stocku.
              </div>
            </div>
            <Card id="lista" className="rounded-[2rem] border-zinc-200 bg-[#fbf7f4] shadow-sm">
              <CardContent className="p-7 md:p-8">
                <h3 className="text-2xl font-bold">Dołącz do listy oczekujących</h3>
                <p className="mt-2 leading-7 text-zinc-600">Zapisz się po kod startowy i wcześniejszy dostęp. Bez spamu — tylko premiera, kolory, rozmiary i pre-order.</p>
                <form className="mt-6 space-y-4">
                  <input className="w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 outline-none ring-zinc-950/10 focus:ring-4" placeholder="Imię" />
                  <input className="w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 outline-none ring-zinc-950/10 focus:ring-4" placeholder="E-mail" type="email" />
                  <select className="w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-zinc-500 outline-none ring-zinc-950/10 focus:ring-4">
                    <option>Kierunek / branża</option><option>Medycyna</option><option>Pielęgniarstwo / położnictwo</option><option>Fizjoterapia</option><option>Kosmetologia / beauty</option><option>Stomatologia</option><option>Weterynaria</option><option>Inne</option>
                  </select>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <select className="w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-zinc-500 outline-none ring-zinc-950/10 focus:ring-4">
                      <option>Preferowany rozmiar</option><option>XS</option><option>S</option><option>M</option><option>L</option><option>XL</option><option>XXL</option><option>Nie wiem</option>
                    </select>
                    <select className="w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-zinc-500 outline-none ring-zinc-950/10 focus:ring-4">
                      <option>Preferowany kolor</option><option>Granat</option><option>Sage green</option><option>Grafit</option><option>Dusty rose</option><option>Inny</option>
                    </select>
                  </div>
                  <select className="w-full rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-zinc-500 outline-none ring-zinc-950/10 focus:ring-4">
                    <option>Co najbardziej Cię interesuje?</option><option>Jeden komplet dla mnie</option><option>Komplet + drugi kolor później</option><option>Zamówienie grupowe ze studiów</option><option>Zamówienie dla gabinetu / zespołu</option><option>Chcę zostać testerką / UGC</option><option>Materiały do nauki / Scrubee Academy</option>
                  </select>
                  <Button type="button" className="w-full rounded-full bg-zinc-950 py-6 text-base text-white hover:bg-zinc-800">
                    Odbierz wcześniejszy dostęp <Mail className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-xs leading-5 text-zinc-500">Klikając przycisk, zapisujesz się na listę informacji o premierze. W finalnej wersji dodaj checkbox zgody marketingowej, zgodę RODO i link do polityki prywatności.</p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">Najczęstsze pytania przed zakupem.</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-600">Ta sekcja ma usuwać obiekcje: rozmiar, wymiana, pre-order, kolory, zamówienia grupowe i zastosowanie na praktykach.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((item, index) => <FAQItem key={item.q} item={item} index={index} />)}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-zinc-950 p-8 text-white md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-4xl font-black tracking-tight md:text-5xl">Zacznij praktyki w scrubsie, w którym czujesz się pewnie.</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-300">Dołącz do listy, odbierz wcześniejszy dostęp i pomóż wybrać kolory pierwszej kolekcji Scrubee.</p>
            </div>
            <Button asChild size="lg" className="rounded-full bg-white px-7 py-6 text-base text-zinc-950 hover:bg-zinc-100">
              <a href="#lista">Dołącz do listy <ArrowRight className="ml-2 h-5 w-5" /></a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200 px-5 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>© Scrubee — landing page MVP</p>
          <p>W finalnej wersji dodaj: regulamin, politykę prywatności, zwroty, kontakt i dane firmy.</p>
        </div>
      </footer>
    </main>
  );
}
