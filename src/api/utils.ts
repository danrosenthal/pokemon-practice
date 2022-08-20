export async function fetchPokeAPIGraphQL(query, variables, operationName) {
  const result = await fetch("https://beta.pokeapi.co/graphql/v1beta", {
    method: "POST",
    body: JSON.stringify({
      query: query,
      variables: variables,
      operationName: operationName
    })
  });

  return await result.json();
}

export async function getPokemon(name: string = null) {
  if (name != null) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
    return response.json();
  } else {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
    return response.json();
  }
}

export function capitalize(word: string) {
  return word ? `${word.charAt(0).toUpperCase()}${word.slice(1)}` : "";
}
