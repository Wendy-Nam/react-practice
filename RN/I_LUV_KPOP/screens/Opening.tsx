import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

function Opening() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.fullscreen}>
      <LinearGradient style={styles.overlay} colors={['#d9487d', '#586173']} />
      <Image
        source={require('../assets/wallpaper.png')}
        resizeMode="cover"
        style={styles.wallpaper}
      />
      <View style={styles.block}>
        <Image
          style={styles.logoImage}
          source={require('../assets/LOGO_outlined.png')}
        />
        <View style={styles.texts}>
          <Text style={styles.title}>I LUV KPOP</Text>
          <Text style={styles.description}>
            Share any topics, photos or comments
          </Text>
          <Text style={styles.description}>of your favorite kpop star</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.getStartedBtn}
        onPress={() => {
          navigation.navigate('SignIn');
        }}>
        <Text style={styles.text}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.8,
  },
  wallpaper: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    flex: 1,
    zIndex: -1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    position: 'absolute',
    top: '14%',
    width: '35%',
    height: '36%',
    resizeMode: 'contain',
  },
  texts: {
    position: 'absolute',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: 'white',
    marginVertical: 10,
  },
  description: {
    fontSize: 15,
    fontWeight: '300',
    color: 'white',
    textAlign: 'center',
  },
  getStartedBtn: {
    flex: 1,
    position: 'absolute',
    bottom: '10%',
    left: '10%',
    width: '80%',
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderColor: 'white',
    borderWidth: 2,
    opacity: 0.8,
  },
  text: {
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
  },
});

export default Opening;
