import React, {Component} from 'react';
import {NativeModules} from 'react-native';
import {Image, Text, View, TouchableHighlight, Button} from 'react-native';
// import ToastExample from './ToastExample';

class ImageView extends Component {
  // getImage = async () => {
  //   console.log('HEREEEEE');
  //   var src = await ToastExample.pickImage();
  //   console.log('SOURCE - ' + src);
  //   this.props.src = src;
  // };

  render() {
    console.log("I'm inside imageview ");
    return (
      <View style={{alignItems: 'center'}}>
        <TouchableHighlight onPress={this.getImage}>
          <Image
            style={{width: 66, height: 58}}
            source={{uri: this.props.src}}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

class TextView extends Component {
  // handlePress = e => {
  //   ToastExample.show('HELLO', ToastExample.SHORT);
  // };

  // handleLongPress = () => {
  //   this.handleLongPressStr(this.props.name);
  // };

  // handleLongPressStr = str => {
  //   ToastExample.callbackSample(
  //     str,
  //     msg => {
  //       ToastExample.show(msg, ToastExample.SHORT);
  //     },
  //     (msg, str1) => {
  //       ToastExample.show(msg + ' The string is - ' + str1, ToastExample.SHORT);
  //     },
  //   );
  // };

  render() {
    console.log('I was triggered during render - 1');
    return (
      <View style={{alignItems: 'center'}}>
        {/* <Text onPress={this.handlePress} onLongPress={this.handleLongPress}> */}
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}

export default class HelloWorldApp extends Component {
  render() {
    // ToastExample.show('Awesome', ToastExample.SHORT);
    console.log('I was triggered during render - 2');
    console.log('Native modules - ' + JSON.stringify(NativeModules));
    console.log(
      'ACTIVITY STARTER' + JSON.stringify(NativeModules.ActivityStarter),
    );
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {/* <ImageView src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==" /> */}

        <TextView name="I am an example" />
        <TextView name="I am also example" />
        <TextView name="I am an example too" />

        <Button
          onPress={() => NativeModules.ActivityStarter.navigateToExample()}
          title="Go back to Android app"
        />
      </View>
    );
  }
}
