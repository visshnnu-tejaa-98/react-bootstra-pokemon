import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import { pokimonData } from "./components/data";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState(null);
  const handleSubmit = () => {
    if (searchTerm !== "") {
      console.log(searchTerm);
      getData();
    }
  };
  const getData = async () => {
    let req = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
    let res = await req.json();
    console.log(res);
    let obj = {
      name: res.name,
      img: res?.sprites?.back_default,
      abilities: res.abilities,
      base_experience: res.base_experience,
    };
    setData(obj);
    setSearchTerm("");
  };
  return (
    <div className="App container">
      <LandingPage
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSubmit={handleSubmit}
      />
      <Cards data={data} />
      {/* <ScrapData /> */}
    </div>
  );
}

export default App;

// "charmander",
// "charmeleon",
// "charizard",
// "squirtle",
// "wartortle",
// "blastoise",
// "caterpie",
// "metapod",
// "butterfree",
// "weedle",
// "kakuna",
// "beedrill",
// "pidgey",
// "pidgeotto",
// "pidgeot",
// "rattata",
// "raticate",
// "spearow",
// "ekans",
// "arbok",
// "pikachu",
// "raichu",
// "sandshrew",
// "sandslash",
// "nidoran-f",
// "nidorina",
// "nidoqueen",
// "nidoran-m",
// "nidorino",
// "nidoking",
// "clefairy",
// "clefable",
// "vulpix",
// "ninetales",
// "jigglypuff",
// "wigglytuff",
