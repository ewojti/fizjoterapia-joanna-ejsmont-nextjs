import images from "@/constants/images";


const services = [
  {
    id: 1,
    title: "Fizjoterapia ortopedyczna",
    image: images.balancer,
    types: [
      "dolegliwości bólowe kręgosłupa i stawów obwodowych",
      "stan po urazach narządu ruchu",
      "funkcjonalny trening medyczny",
    ],
  },
  {
    id: 2,
    title: "Fizjoterapia neurologiczna",
    image: images.neuro,
    types: [
      "rehabilitacja pacjentów z chorobami nerwowo-mięśniowymi i neurologicznymi t.j.: udar mózgu, stwardnienie rozsiane",
      "bóle głowy",
      "trening chodu, równowagi i koordynacji oraz zapobieganie upadkom",
    ],
  },
  {
    id: 3,
    title: "Fizjoterapia kobiet w trakcie i po ciąży",
    image: images.ciaza,
    types: [
      "dolegliwości bólowe w ciąży",
      "przygotowanie do porodu",
      "terapia blizn",
      "trening medyczny w rozejściu mięśni brzucha",
    ],
  },
  {
    id: 4,
    title: "Fizjoterapia dzieci",
    image: images.dzieci,
    types: [
      "badanie i terapia stóp m.in. stóp płasko-koślawych",
      "wady postawy u dzieci od 4 roku życia",
    ],
  },
];

export default services;
