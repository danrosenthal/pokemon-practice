import React from "react";

import { Page, Layout, Card } from "@shopify/polaris";
import { Link } from "react-router-dom";

import { useAllPokemon } from "../../../api/usePokemon";

export default function PokemonList() {
  const { loading, data } = useAllPokemon();

  const dataMarkup = (
    <Page narrowWidth title="Pokemon">
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <ul>
              {data.map((item) => {
                return (
                  <li key={item.name}>
                    <Link to={item.name}>{item.name}</Link>
                  </li>
                );
              })}
            </ul>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
  const loadingMarkup = <span>Loading...</span>;

  const displayMarkup = loading ? loadingMarkup : dataMarkup;

  return <>{displayMarkup}</>;
}
