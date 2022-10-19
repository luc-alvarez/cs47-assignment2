import AppLoading from 'expo-app-loading';
import { ImageBackground, Image, Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes/index.js';



export default function App() {

  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    SydneyBold: require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;

  StatusBar.setBarStyle(Themes.light.statusBar);


  return (
    <View style={styles.container}>
        <View style={styles.navigationBar}>
            <Image style={styles.icon}
                source={require('./assets/Icons/menu_light.png')}
            />
          <Text style={styles.titleText}>
            ensom
          </Text>
          <Image style={styles.icon}
                source={require('./assets/Icons/sun.png')}
          />
        </View>
          
        <View style={Platform.isPad ? styles.profileSectioniPad : styles.profileSectioniPhone}>
          <ImageBackground style={styles.profilePic}
            imageStyle={styles.profilePic}
            source={require('./assets/Profiles/mtl.jpg')}>
            <View style={styles.texts}>
                <Text style = {styles.profileName}>MTL</Text>
                <Text style = {styles.distance}>2 miles away</Text>
            </View>
          </ImageBackground>
          <View style={styles.hotTake}>
            <Text style={styles.takeText}>
                My hottest take
            </Text>
            <View style={styles.audioBar}>
                <Image style={styles.audioButton}
                    source={require('./assets/Icons/player_light.png')}
                />
                <Image style={styles.audioWave}
                    source={require('./assets/Icons/audio_waveform_light.png')}
                />
            </View>
          </View>
        </View>
        <View style={styles.toolbar}>
          <View style ={styles.toolButtons}>
            <View style={styles.tools}>
                <Image style={styles.icon}
                    source={require('./assets/Icons/discover_light.png')}/>
                <Text style ={styles.navText}>Discover</Text>
            </View>
            <View style={styles.tools}>
                <Image style={styles.icon}
                    source={require('./assets/Icons/heart_light.png')}/>
                <Text style ={styles.navText}>Matches</Text>
            </View>
            <View style={styles.tools}>
                <Image style={styles.icon}
                    source={require('./assets/Icons/messages_light.png')}/>
                <Text style ={styles.navText}>DMs</Text>
            </View>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.light.bg,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
navigationBar: {
    backgroundColor: Themes.light.bg,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...Platform.select({
        ios: {
            height: 41,
            marginTop: 36,
        },
        android: {
            marginTop: 32,
            height: 54,
        },
        default: {
            height: '10%',
        },
    })
},
titleText: {
    fontSize: 40,
    fontFamily: 'SydneyBold',
},
icon: {
    ...Platform.select({
        ios: {
            marginTop: 4,
            marginLeft: 24,
            marginRight: 24,
            height: 35,
            width: 35,
        },
        android: {
            marginTop: 4,
            marginLeft: 24,
            marginRight: 24,
            height: 38,
            width: 38,
        },
        default: {
            margin: '2%',
            marginSide: '4%',
            height: '8%',
            width: '8%',
        },
    })
    
},
profileSectioniPad: {
    height: '60%',
    width: '60%',
    alignItems: 'center',
    backgroundColor: Themes.light.bg,
    marginTop: '8%',
    ...Platform.select({
        ios: {
            marginLeft: 24,
            marginRight: 24,
        },
        android: {
            marginLeft: 24,
            marginRight: 24,
        },
        default: {
            marginRight: '4%',
            marginLeft: '4%',
        },
    }),
},
profileSectioniPhone: {
    height: '60%',
    width: '80%',
    alignItems: 'center',
    backgroundColor: Themes.light.bg,
    marginTop: '8%',
    ...Platform.select({
        ios: {
            marginLeft: 24,
            marginRight: 24,
        },
        android: {
            marginLeft: 24,
            marginRight: 24,
        },
        default: {
            marginRight: '4%',
            marginLeft: '4%',
        },
    }),
},
profilePic: {
    width: '100%',
    aspectRatio: 1/1.1,
    borderRadius: 10,
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowRadius: Themes.light.shadows.shadowRadius,
    shadowOffset: Themes.light.shadows.shadowOffset,

},
profileName: {
    position: "relative",
    margin: '2%',
    color: Themes.light.textSecondary,
    fontSize: 32,
    fontFamily: 'Sydney',
    
},
distance: {
    position: "relative",
    margin: '2%',
    color: Themes.light.textSecondary,
    fontSize: 18,
    fontFamily: 'Sydney',
},
texts: {
    justifyContent: 'space-between',
    height: '100%',
},
hotTake: {
    height: '30%',
    width: '100%',
    borderRadius: 30,
    backgroundColor: 'white',
    marginTop: '8%',
    alignItems: 'flex-start',
    paddingBottom: '8%',
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowRadius: Themes.light.shadows.shadowRadius,
    shadowOffset: Themes.light.shadows.shadowOffset,
    ...Platform.select({
        ios: {
            marginLeft: 24,
            marginRight: 24,
        },
        android: {
            marginLeft: 24,
            marginRight: 24,
        },
        default: {
            marginRight: '4%',
            marginLeft: '4%',
        },
    }),
},
takeText: {
    color: Themes.light.text,
    fontSize: 28,
    marginTop: '2%',
    marginLeft: '5%',
    fontFamily: 'Sydney',
},
audioBar: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    resizeMode: 'contain',
    alignItems: 'center',
},
audioButton: {
    width: '25%',
    height: '100%',
    marginLeft: '2%',
    marginBottom: '2%',
    aspectRatio: 1,
    resizeMode: 'contain',
},

audioWave: {
    height: '100%',
    width: '65%',
    marginLeft: '2%',
    marginBottom: '2%',
    resizeMode: 'contain',
    flexDirection: 'column',
},

toolbar: {
    backgroundColor: Themes.light.navigation,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    height: '10%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
},
toolButtons: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
},
tools: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
},
navText: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Sydney',
    marginTop: '10%',
}
});

