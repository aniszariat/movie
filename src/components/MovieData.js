const labels = [
  { 0.5: "Useless" },
  { 1: "Useless+" },
  { 1.5: "Poor" },
  { 2: "Poor+" },
  { 2.5: "Ok" },
  { 3: "Ok+" },
  { 3.5: "Good" },
  { 4: "Good+" },
  { 4.5: "Excellent" },
  { 5: "Excellent+" }
];
const MovieData = [
  {
    id: 1,
    title: "TITANIC",
    rate: 3.5,
    description: "Romatic film : Jack& Rose loves each other",
    // description: (labels.filter(e => e.key == 5).value) ,
    affiche: "https://m.media-amazon.com/images/I/71kfzNYWKxL._AC_SL1191_.jpg"
  },
  {
    id: 2,
    title: "ESCAPE PLAN",
    description: "good movie",
    rate: 3,
    affiche:"https://resizing.flixster.com/neWlRHqzUrMTSHs8vM8mzT15mRc:/206x305/v2/https://flxt.tmsimg.com/assets/p9911264_p_v10_ap.jpg"
  },
  {
    id: 3,
    title: "JUMANJI",
    description: "good movie",
    rate: 4,
    affiche: "https://fr.web.img6.acsta.net/pictures/17/11/07/13/40/0517792.jpg"
  },
  {
    id: 4,
    title: "PREDESTINATION",
    description: "good movie",
    rate: 2.5,
    affiche: "https://image.tmdb.org/t/p/w500/sYjpJZEdwELjdHy4OVzazeJVT0z.jpg"
  },
  {
    id: 5,
    title: "TOGO",
    rate: 3.5,
    description: `L'histoire du chien de traîneau Togo, qui a mené la course au sérum de 1925,
    mais qui était aussi considéré par la plupart comme trop petit et trop faible 
    pour mener une course aussi intense.`,
    affiche: "https://fr.web.img4.acsta.net/pictures/20/03/18/11/52/4165951.jpg"
  }
 ];
export default MovieData;
