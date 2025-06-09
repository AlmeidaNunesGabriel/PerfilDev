import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

const LoadingSpinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#24292e" />
      <Text style={styles.text}>Buscando usuário...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
});

export default LoadingSpinner;