import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UserProfile = ({ user }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  };

  const formatNumber = (number) => {
    return number.toLocaleString('pt-BR');
  };

  return (
    <View style={styles.container}>
      {/* Foto de perfil no topo */}
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: user.avatar_url }}
          style={styles.avatar}
          resizeMode="cover"
        />
      </View>
      
      {/* Informações do usuário */}
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Informações do Usuário</Text>
        
        <View style={styles.infoRow}>
          <Text style={styles.label}>ID:</Text>
          <Text style={styles.value}>{user.id}</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.label}>Nome:</Text>
          <Text style={styles.value}>{user.name || user.login}</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.label}>Login:</Text>
          <Text style={styles.value}>@{user.login}</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.label}>Repositórios:</Text>
          <Text style={styles.value}>{formatNumber(user.public_repos)}</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.label}>Criado em:</Text>
          <Text style={styles.value}>{formatDate(user.created_at)}</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.label}>Seguidores:</Text>
          <Text style={styles.value}>{formatNumber(user.followers)}</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Text style={styles.label}>Seguindo:</Text>
          <Text style={styles.value}>{formatNumber(user.following)}</Text>
        </View>
        
        {user.bio && (
          <View style={styles.bioContainer}>
            <Text style={styles.label}>Bio:</Text>
            <Text style={styles.bioText}>{user.bio}</Text>
          </View>
        )}
        
        {user.location && (
          <View style={styles.infoRow}>
            <Text style={styles.label}>Localização:</Text>
            <Text style={styles.value}>{user.location}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },
  avatarContainer: {
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: '#f8f9fa',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoContainer: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#24292e',
    marginBottom: 15,
    textAlign: 'center',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    flex: 1,
  },
  value: {
    fontSize: 14,
    color: '#24292e',
    flex: 2,
    textAlign: 'right',
    fontWeight: '500',
  },
  bioContainer: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  bioText: {
    fontSize: 14,
    color: '#586069',
    marginTop: 5,
    lineHeight: 20,
  },
});

export default UserProfile;