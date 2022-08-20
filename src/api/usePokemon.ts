import { useEffect, useState } from "react";

import { getPokemon } from "./utils";

type Pokemon = {
  types: [{ type: { name: string } }];
  sprites: { other: { home: { front_shiny: string } } };
  weight: number;
  height: number;
  name: string;
  any;
};

export function useAllPokemon(): {
  loading: boolean;
  data: Pokemon[];
  error: any;
} {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await getPokemon();

        // map over array of pokemon names and get full details
        // before setting state
        //
        // const setPokemon = (results) => {
        //   results.forEach(async (pokemon, i) => {
        //     const pokemonDetailsResponse = await getPokemon(pokemon.name);
        //     setData((current) => {
        //       const unsortedPokemon = [...current, pokemonDetailsResponse];
        //       const sortedPokemon = unsortedPokemon.sort((a, b) =>
        //         a.id > b.id ? 1 : -1
        //       );
        //       return sortedPokemon;
        //     });
        //   });
        // };

        setData(response.results);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, data, error };
}

export function useSinglePokemon(
  name: string
): {
  loading: boolean;
  data: Pokemon;
  error: any;
} {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await getPokemon(name);
        setData(response);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [name]);

  return { loading, data, error };
}
