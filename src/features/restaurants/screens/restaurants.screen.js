import React from "react";
import { StatusBar, StyleSheet, Text, View, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { RestaurantInfo } from "../components/restaurant-info.component";

const isAndroid = Platform.OS === 'android';

export const RestaurantsScreen = () => (
    <View>
      <View style={styles.searchContainer}>
        <Searchbar />
      </View>
      <View style={styles.listContainer}>
        <RestaurantInfo />
      </View>
      </View>
)

const styles = StyleSheet.create({

    searchContainer: {
      backgroundColor: "white",
      padding: 16,
      marginTop: isAndroid ? (StatusBar.currentHeight) : 0
    },
  
    listContainer: {
      backgroundColor: "blue",
      padding: 16,
      flex: 1
    }
  });