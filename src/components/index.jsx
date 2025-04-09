import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ImageBackground, Image, Dimensions, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground 
      source={{ uri: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=1000' }} 
      style={styles.background}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
      <LinearGradient
        colors={['rgba(0,0,0,0.1)', 'rgba(8,49,58,0.9)']}
        style={styles.gradient}
      >
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Fotoğraf Albümü</Text>
            <Text style={styles.subtitle}>Anılarınızı saklayın, paylaşın</Text>
          </View>
          
          <View style={styles.buttonsContainer}>
            <TouchableOpacity 
              style={[styles.button, styles.cameraButton]}
              onPress={() => navigation.navigate('Camera')}
            >
              <Image 
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3249/3249906.png' }} 
                style={styles.buttonIcon}
              />
              <Text style={styles.buttonText}>Fotoğraf Çek</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.galleryButton]}
              onPress={() => navigation.navigate('GoalsList')}
            >
              <Image 
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3342/3342137.png' }} 
                style={styles.buttonIcon}
              />
              <Text style={styles.buttonText}>Albümü Aç</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 50,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 8,
  },
  buttonsContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  button: {
    width: width * 0.7,
    height: 70,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'row',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cameraButton: {
    backgroundColor: '#5cd85a',
  },
  galleryButton: {
    backgroundColor: '#08313a',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  buttonIcon: {
    width: 24,
    height: 24,
    tintColor: 'white',
  },
});

export default HomeScreen; 
