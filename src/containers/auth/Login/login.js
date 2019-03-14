/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { ToastActionsCreators } from 'react-native-redux-toast';
import { Text, View, SafeAreaView, Image, Keyboard, TouchableOpacity } from 'react-native';
import TextInput from '../../../components/common/TextInput';
import { Colors, Images } from '../../../constants'
import {responsiveWidth } from '../../../constants/dimensions';
import Regex from '../../../utilities/regex';
import _ from 'lodash';
import styles from './styles';

export default class Login extends Component {
  state = {
    password: '',
    username: '',
  };

  usernameRef = React.createRef();
  passwordRef = React.createRef();

  onSubmit = () => {
    Keyboard.dismiss();
    const {
      username, password,
    } = this.state;
    const {
      navigation: {
        dispatch
      },
    } = this.props;

    if (_.isEmpty(username.trim())) {
      dispatch(ToastActionsCreators.displayInfo('Email cannot be empty'));
      return;
    }

    if (!Regex.validateEmail(username.trim())) {
      dispatch(ToastActionsCreators.displayInfo('Enter valid email'));
      return;
    }

    if (_.isEmpty(password.trim())) {
      dispatch(ToastActionsCreators.displayInfo('Password cannot be empty'));
      return;
    }
    alert('Succesfully Login')
  };

  render() {
    const {
      username, password,
    } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={Images.coverLogin} style={styles.image} />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            ref={this.usernameRef}
            value={username}
            placeholder={'EmailAddress'}
            returnKeyType="next"
            showIcon={true}
            icon={Images.loginUser}
            keyboardType="email-address"
            onChangeText={(name) => this.setState({ username: name })}
            onSubmitEditing={() => this.passwordRef.current.focus()}
            container={styles.containerStyle}
            iconStyle={styles.iconStyle}
          />
          <TextInput
            ref={this.passwordRef}
            value={password}
            placeholder={'Password'}
            returnKeyType="done"
            secureTextEntry
            maxLength={16}
            onChangeText={(pass) => this.setState({ password: pass })}
            onSubmitEditing={this.onSubmit}
            container={styles.containerStyle}
            showIcon={true}
            icon={Images.lock}
            iconStyle={styles.iconStyle}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => this.onSubmit()}><Text>{'Login'}</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.button, { marginLeft: responsiveWidth(12) }]}><Text>{'SignUp'}</Text></TouchableOpacity>
          </View>
          <View style={{justifyContent:'center', alignItems:'center', fontWeight:600, marginTop:responsiveWidth(12)}}><Text style={{fontSize:15, textAlign:'center'}}>{'Forgot Password ?'}</Text></View>
        </View>

      </SafeAreaView>
    );
  }
}


