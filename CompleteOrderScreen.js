
import React, { Component } from "react";
import { View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Platform,
    TextInput,
    Alert,
    KeyboardAvoidingView,
    Switch,
    ScrollView,
    FlatList
 } from "react-native";

import { Colors } from '../utils/Colors';
import { strings } from "../strings";
import { stylesGlobal } from '../global/stylesGlobal';
import ProgressIndicator from "../components/ProgressIndicator";
import * as Global from "../global/Global";
import WebService from "../utils/WebService";
import { Constants } from "../global/Constants";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ifIphoneX, isIphoneX, getBottomSpace  } from '../components/react-native-iphone-x-helper';
import { KeyboardAwareScrollView } from '../components/react-native-keyboard-aware-scroll-view';
import HeaderView from '../custom_components/HeaderView';
import TopNoticeView from '../custom_components/TopNoticeView';

import { SliderBox } from "react-native-image-slider-box";
import FastImage from 'react-native-fast-image'
import { SafeAreaView } from 'react-native-safe-area-context';
import OrderItem from '../custom_components/OrderItem';

var TAG = "CompleteOrderScreen";

export default class CompleteOrderScreen extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            loading: false,
            
        }
    }

    UNSAFE_componentWillMount() {

    }

    render() {
        return (
            <View style = {{flex: 1, backgroundColor: '#4FD1C5'}}>
            {
                this.state.loading &&
                <ProgressIndicator/>
            }
                <SafeAreaView style = {{flex: 1, width: '100%', paddingHorizontal: 10}}>
                    <View style = {{flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                        <Image style = {{width: 50, height: 50, resizeMode: 'contain', tintColor: Colors.white}} source = {require("../assets/images/payment_check.png")}></Image>
                        <Text style = {[{fontSize: 24, color: Colors.white, marginTop: 20}, stylesGlobal.font_medium]}>{strings.congratulation}</Text>
                        <Text style = {[{fontSize: 14, color: Colors.white, marginTop: 20, textAlign: 'center'}, stylesGlobal.font_medium]} multiline = {true}>{strings.order_complete_desc}</Text>
                    </View>
                    <View style = {{width: '100%', alignItems: 'center'}}>
                        <OrderItem navigation = {this.props.navigation} />
                        <TouchableOpacity style = {{flexDirection: 'row', alignItems: 'center', marginVertical: 25}} onPress = {() => this.props.navigation.navigate("MainTabNavigator", {screen: 'HomeNavigator', params: {screen: 'HomeScreen'}})}>
                            <Image style = {{width: 15, height: 15, resizeMode: 'contain', tintColor: Colors.white}} source = {require("../assets/images/back_header.png")}></Image>
                            <Text style = {[{fontSize: 16, color: Colors.white, marginStart: 15}, stylesGlobal.font]}>{strings.return_to_home}</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cate_title_text: {
        fontSize: 16, 
        color: Colors.mainTextColor
    },
    payment_button: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15
    },
    payment_button_selected: {
        borderWidth: 1,
        borderColor: Colors.mainTextColor,
        backgroundColor: '#F7FAFC'
    },
    payment_text: {
        fontSize: 14,
        color: '#718096'
    },
    payment_text_selected: {
        color: Colors.mainTextColor,
    },
    payment_check_icon: {
        width: 25, 
        height: 25, 
        resizeMode: 'contain', 
        marginEnd: 15
    }
})