import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          {/*<View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>


          <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}
          </View>
        */}
          <View style={{padding: 5}}>
            <TextInput
              style={{height: 20}}
              placeholder="Looking for a specifc bug?"
              onChangeText={(text) => this.setState({text})}
            />
            <Text style={{fontSize: 20}}>
              {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
            </Text>
          </View>

          <View style={{flex: 1}}>
            <View style={{flex: 1, backgroundColor: 'steelblue'}}>
              <Text style={{fontSize: 20}}>
                Recommended
              </Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{width: 150, height: 150, marginLeft: 20, backgroundColor: 'white'}} />
                <View style={{width: 150, height: 150, marginLeft: 20, backgroundColor: 'white'}} />
              </View>
            </View>

            <View style={{flex: 1, backgroundColor: 'skyblue'}}>
              <Text style={{fontSize: 20}}>
                In Your Area
              </Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{width: 150, height: 150, marginLeft: 20, backgroundColor: 'white'}} />
                <View style={{width: 150, height: 150, marginLeft: 20, backgroundColor: 'white'}} />
              </View>
            </View>

            <View style={{flex: 1, backgroundColor: 'powderblue'}}>    
              <Text style={{fontSize: 20}}>
                Discover
              </Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{width: 150, height: 150, marginLeft: 20, backgroundColor: 'white'}} />
                <View style={{width: 150, height: 150, marginLeft: 20, backgroundColor: 'white'}} />
              </View>
            </View>
          </View>
        </ScrollView>

       
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled.{"\n"}
          Check out development tools: {learnMoreButton} {"\n"}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          Non-development mode. App will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    flex: 1,
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
