import Bulbusaur from "./images/bulbasaur.jpg";
import "./Showcase.css";
function Showcase() {
  const favPokemon = "pikachu";
  const pokeCharacteristics = {
    move: "thunderbolt",
    type: "electric",
  };
  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img
        style={{
          width: 300,
          height: 300,
          borderRadius: 150,
          objectFit: "center",
        }}
        src={Bulbusaur}
        alt={favPokemon}
      />
      <h2>
        {favPokemon}'s type is{" "}
        <span className="span1">{pokeCharacteristics.type}</span>
        and one of their moves is{" "}
        <span className="span2">{pokeCharacteristics.move}</span>
      </h2>
    </div>
  );
}

export default Showcase;
