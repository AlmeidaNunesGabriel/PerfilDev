import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ErrorMessage = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff5f5',
    borderWidth: 1,
    borderColor: '#feb2b2',
    borderRadius: 8,
    padding: 15,
    marginTop: 10,
    alignItems: 'center',
  },
  text: {
    color: '#c53030',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default ErrorMessage;