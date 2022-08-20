import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home/Home";
import PokemonList from "./routes/Pokemon/PokemonList";
import PokemonShow from "./routes/Pokemon/PokemonShow";

import Nav from "./components/Nav/Nav";

import "./styles.css";

export default function App() {
  const routes = {
    home: {
      to: "/",
      title: "Home"
    },
    pokemon: {
      to: "/pokemon",
      title: "Pokemon"
    }
  };

  return (
    <div className="App">
      <Nav items={[routes.home, routes.pokemon]} />
      <Routes>
        <Route path={routes.home.to} element={<Home />} />
        <Route path={routes.pokemon.to} element={<PokemonList />} />
        <Route path="/pokemon/:name" element={<PokemonShow />} />
      </Routes>
    </div>
  );
}
