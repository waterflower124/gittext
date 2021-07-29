
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
    ImageBackground,
    FlatList
 } from "react-native";


var TAG = "BrandsScreen";

export default class BrandsScreen extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            loading: false,
            search_text: "",

            brands_list: [1,3,4,5,6,7,8]
            
        }
    }

    UNSAFE_componentWillMount() {

    }

    renderBrand(item, index) {
        return(
            <TouchableOpacity style = {{width: (Dimensions.get('screen').width - 20) / 2 - 5, borderWidth: 1, borderColor: Colors.borderColor, borderRadius: 5}}
                onPress = {() => this.props.navigation.navigate("ProductListScreen")}
            >
                <View style = {{width: '70%', aspectRatio: 1.5}}>

                </View>
                <View style = {{paddingVertical: 15, alignItems: 'center'}}>
                    <Text style = {[{fontSize: 14, color: Colors.mainTextColor}, stylesGlobal.font_bold]}>{"Aestheica"}</Text>
                    <Text style = {[{fontSize: 10, color: '#A0AEC0', marginTop: 10}, stylesGlobal.font]}>{"(30) Products"}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style = {{flex: 1, backgroundColor: Colors.white,}}>
            {
                this.state.loading &&
                <ProgressIndicator/>
            }
                <HeaderView
                    headerTitle = {strings.title_brands}
                    navigation = {this.props.navigation}
                />
                <TopNoticeView />
                <View style = {{flex: 1, width: '100%', paddingHorizontal: 10}}>
                    <View style = {stylesGlobal.search_view}>
                        <View style = {stylesGlobal.search_icon_view}>
                            <Image style = {stylesGlobal.search_icon} source = {require("../assets/images/search_icon.png")}></Image>
                        </View>
                        <View style = {{flex: 1}}>
                            <TextInput style = {[stylesGlobal.search_text_input, stylesGlobal.font]} placeholder = {strings.search_brands} onChangeText = {(text) => this.setState({search_text: text})}>{this.state.search_text}</TextInput>
                        </View>
                    </View>
                    <FlatList 
                        style = {{flex: 1, width: '100%'}}
                        columnWrapperStyle = {{width: '100%', justifyContent: 'space-between', marginBottom: 10}}
                        data = {this.state.brands_list}
                        extraData={this.state}
                        numColumns = {2}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => this.renderBrand(item, index)}>
                        
                    </FlatList>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
})