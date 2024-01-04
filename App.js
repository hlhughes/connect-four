import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, Dimensions } from 'react-native'
import * as ScreenOrientation from "expo-screen-orientation";

const windowHeight = Dimensions.get('window').height;

const App = () => {
  const [currentPlayer, setCurrentPlayer] = useState('Blue')
  const [orientation, setOrientation] = useState(1);
  useEffect(() => {
    lockOrientation();
  }, []);
  const lockOrientation = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
    );
  const o = await ScreenOrientation.getOrientationAsync();
    setOrientation(o);
  };

  return (
    
    <SafeAreaView style={styles.body}>
      <View style={styles.overallWindow}>
        <View></View>
        <View style={[styles.playerInfo, {backgroundColor: currentPlayer === 'Blue'?'#007FF4':'#F40075'}]}>
          <Text style={styles.playerTxt}>{currentPlayer} Player's Turn</Text>
        </View>
        <View style={styles.mainContainer}>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/blue.png')} style={styles.icon}/>
          </Pressable>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/red.png')} style={styles.icon}/>
          </Pressable>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/blue.png')} style={styles.icon}/>
          </Pressable>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/red.png')} style={styles.icon}/>
          </Pressable>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/blue.png')} style={styles.icon}/>
          </Pressable>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/red.png')} style={styles.icon}/>
          </Pressable>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/blue.png')} style={styles.icon}/>
          </Pressable>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/red.png')} style={styles.icon}/>
          </Pressable>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/blue.png')} style={styles.icon}/>
          </Pressable>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/red.png')} style={styles.icon}/>
          </Pressable>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/blue.png')} style={styles.icon}/>
          </Pressable>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/red.png')} style={styles.icon}/>
          </Pressable>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/blue.png')} style={styles.icon}/>
          </Pressable>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/red.png')} style={styles.icon}/>
          </Pressable>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/blue.png')} style={styles.icon}/>
          </Pressable>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/red.png')} style={styles.icon}/>
          </Pressable>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/blue.png')} style={styles.icon}/>
          </Pressable>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/red.png')} style={styles.icon}/>
          </Pressable>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/blue.png')} style={styles.icon}/>
          </Pressable>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/red.png')} style={styles.icon}/>
          </Pressable>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/blue.png')} style={styles.icon}/>
          </Pressable>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/red.png')} style={styles.icon}/>
          </Pressable>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/blue.png')} style={styles.icon}/>
          </Pressable>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/red.png')} style={styles.icon}/>
          </Pressable>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/blue.png')} style={styles.icon}/>
          </Pressable>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/red.png')} style={styles.icon}/>
          </Pressable>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/blue.png')} style={styles.icon}/>
          </Pressable>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/red.png')} style={styles.icon}/>
          </Pressable>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/blue.png')} style={styles.icon}/>
          </Pressable>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/red.png')} style={styles.icon}/>
          </Pressable>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/blue.png')} style={styles.icon}/>
          </Pressable>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/red.png')} style={styles.icon}/>
          </Pressable>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/blue.png')} style={styles.icon}/>
          </Pressable>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/red.png')} style={styles.icon}/>
          </Pressable>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/blue.png')} style={styles.icon}/>
          </Pressable>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/red.png')} style={styles.icon}/>
          </Pressable>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/blue.png')} style={styles.icon}/>
          </Pressable>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/red.png')} style={styles.icon}/>
          </Pressable>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/blue.png')} style={styles.icon}/>
          </Pressable>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/red.png')} style={styles.icon}/>
          </Pressable>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/blue.png')} style={styles.icon}/>
          </Pressable>
          <Pressable style={styles.cell}>
            <Image source={require('./assets/red.png')} style={styles.icon}/>
          </Pressable>

          <Pressable style={styles.redoBtn}>
            <Image source={require('./assets/redo.png')} style={styles.redoIcon}/>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  overallWindow: {
    flex: 1,
    backgroundColor: '#ff0',
    flexDirection: 'row',
  },
  body: {
    flex: 1,
    backgroundColor: '#fff'
  },
  playerInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 30,
    marginHorizontal: 20,
    padding: 10,
    width: 350,
  },
  playerTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 30,
  },
  cell: {
    width: windowHeight / 8,
    height: windowHeight / 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  icon: {
    width: windowHeight / 9,
    height: windowHeight / 9
  },
  redoBtn: {
    position: 'absolute',
    bottom: 200,
    right: 20
  },
  redoIcon: {
    width: 0,
    height: 0
  }
})