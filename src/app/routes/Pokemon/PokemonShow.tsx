import React from "react";

import {
  Page,
  Layout,
  Card,
  Thumbnail,
  Stack,
  Badge,
  TextContainer
} from "@shopify/polaris";
import { useParams } from "react-router-dom";

import { capitalize } from "../../../api/utils";
import { useSinglePokemon } from "../../../api/usePokemon";

export default function PokemonShow() {
  const { name } = useParams();
  const { loading, data } = useSinglePokemon(name);

  const dataMarkup = (
    <Page narrowWidth title={capitalize(name)}>
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Stack>
              <Stack.Item>
                <Thumbnail
                  size="large"
                  source={data?.sprites.other.home.front_shiny}
                  alt=""
                />
              </Stack.Item>
              <Stack.Item fill>
                <TextContainer spacing="tight">
                  <Stack>
                    <div>
                      <strong>Type:</strong>
                    </div>
                    {data?.types.map((item) => {
                      return <Badge>{capitalize(item.type.name)}</Badge>;
                    })}
                  </Stack>
                  <div>
                    <strong>Weight:</strong> {data?.weight}
                  </div>
                  <div>
                    <strong>Height:</strong> {data?.height}
                  </div>
                </TextContainer>
              </Stack.Item>
              <Stack.Item fill>
                <Stack vertical>
                  <Stack.Item></Stack.Item>
                  <Stack.Item></Stack.Item>
                </Stack>
              </Stack.Item>
            </Stack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
  const loadingMarkup = <span>Loading...</span>;

  const displayMarkup = loading ? loadingMarkup : dataMarkup;

  return <>{displayMarkup}</>;
}
