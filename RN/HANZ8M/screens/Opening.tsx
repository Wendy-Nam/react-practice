import React, {useEffect, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

function Opening() {
  const navigation = useNavigation();
  const [start, setStart] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => {
      setStart(true);
    }, 750);
    return () => {
      clearTimeout(timer);
    };
  }, [navigation]);
  return (
    <SafeAreaView style={styles.fullscreen}>
      <View style={!start && styles.background} />
      <View style={[styles.center, styles.block]}>
        <Image
          style={styles.logoImage}
          source={require('../assets/Frame7.png')}
        />
      </View>
      {start ? (
        <>
          <View style={styles.header}>
            <Image
              style={styles.texture}
              source={require('../assets/start_wallpaper.jpeg')}
            />
          </View>
          <View style={[styles.texts]}>
            <Text style={styles.title}>HANZ8M</Text>
            <Text style={styles.description}>
              A new way to explore South Korea
            </Text>
          </View>
          <TouchableOpacity
            style={styles.startBtn}
            onPress={() => {
              navigation.navigate('SignIn');
            }}>
            <Text style={styles.text}>GET STARTED</Text>
          </TouchableOpacity>
        </>
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#0081C9',
  },
  header: {
    position: 'absolute',
    width: '100%',
    height: '40%',
    backgroundColor: '#101010',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    overflow: 'hidden',
    zIndex: -1,
  },
  texture: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
    opacity: 0.7,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  block: {
    position: 'absolute',
    top: '35%',
    left: '20%',
    right: '20%',
  },
  logoImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 5,
    borderRadius: 15,
  },
  texts: {
    color: '#101010',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  title: {
    fontSize: 45,
    fontWeight: '800',
    color: '#101010',
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    color: '#101010',
    textAlign: 'center',
  },
  startBtn: {
    position: 'absolute',
    bottom: '12%',
    left: '30%',
    right: '30%',
    height: 42,
    paddingHorizontal: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0081C9',
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: 'white',
  },
});

export default Opening;
