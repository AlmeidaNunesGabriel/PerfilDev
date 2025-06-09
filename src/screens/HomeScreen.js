import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Header from '../components/Header';
import UserInput from '../components/UserInput';
import UserProfile from '../components/UserProfile';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { fetchUserData } from '../services/githubService';
import styles from './styles';

const HomeScreen = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleUserSearch = async (username) => {
    if (!username || username.trim().length === 0) {
      setError('Por favor, digite um nome de usuário');
      return;
    }

    setLoading(true);
    setError('');
    setUserData(null);

    try {
      const user = await fetchUserData(username.trim());
      setUserData(user);
    } catch (err) {
      if (err.message.includes('404')) {
        setError('Usuário não encontrado');
      } else {
        setError('Erro ao buscar usuário. Tente novamente.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        style={styles.keyboardContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <Header />
        
        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <UserInput onSearch={handleUserSearch} />
            
            {loading && <LoadingSpinner />}
            
            {error && <ErrorMessage message={error} />}
            
            {userData && !loading && <UserProfile user={userData} />}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};


export default HomeScreen;