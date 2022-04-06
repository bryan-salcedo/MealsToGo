import React from "react";
import { StatusBar, StyleSheet, Text, View, Platform } from 'react-native';
import { List, Searchbar } from 'react-native-paper';
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const isAndroid = Platform.OS === 'android';

const AppContainer = styled(View)`
    flex: 1;
`;

const SearchContainer = styled(View)`
    background-color: ${(props) => props.theme.colors.bg.primary};
    padding: ${(props) => props.theme.space[3]};
    margin-top: ${isAndroid ? (StatusBar.currentHeight) : 0}px;
`;

const ListContainer = styled(View)`
    background-color: ${(props) => props.theme.colors.bg.primary};
    padding: ${(props) => props.theme.space[3]};
    flex: 1;
`;

export const RestaurantsScreen = () => (
    <AppContainer>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <ListContainer>
        <RestaurantInfoCard />
      </ListContainer>
    </AppContainer>
)

const styles = StyleSheet.create({

  });