import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import React from "react";
import { StatusBar, StyleSheet, Text, View, Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';

export default function App() {
  return (
    <>
      <View style={styles.searchContainer}>
        <Text>search</Text>
      </View>
      <View style={styles.listContainer}>
        <Text>list</Text>
      </View>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({

  searchContainer: {
    backgroundColor: "green",
    padding: 16,
    marginTop: isAndroid ? (StatusBar.currentHeight) : 0
  },

  listContainer: {
    backgroundColor: "blue",
    padding: 16,
    flex: 1
  }
});
