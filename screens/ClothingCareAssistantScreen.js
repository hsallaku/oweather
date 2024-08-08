import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ClothingCareAssistantScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Clothing Care Assistant</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default ClothingCareAssistantScreen;