
 category_list: [
                {category_name: strings.category_makeup, image: require("../assets/images/category_makeup.png")},
                {category_name: strings.category_perfume, image: require("../assets/images/category_perfume.png")},
                {category_name: strings.category_care, image: require("../assets/images/category_care.png")},
                {category_name: strings.category_lens, image: require("../assets/images/category_lens.png")},
                {category_name: strings.category_nails, image: require("../assets/images/category_nails.png")},
                {category_name: strings.category_devices, image: require("../assets/images/category_devices.png")},
            ]

this is test message to merge
this is test message to merge
this is test message to merge
this is test message to merge
this is test message to merge
this is test message to merge
this is test message to merge
this is test message to merge


var TAG = "CategoryScreen";

export default class CategoryScreen extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            loading: false,
            search_text: "",
            
            category_list: [
                {category_name: strings.category_makeup, image: require("../assets/images/category_makeup.png")},
                {category_name: strings.category_perfume, image: require("../assets/images/category_perfume.png")},
                {category_name: strings.category_care, image: require("../assets/images/category_care.png")},
                {category_name: strings.category_lens, image: require("../assets/images/category_lens.png")},
                {category_name: strings.category_nails, image: require("../assets/images/category_nails.png")},
                {category_name: strings.category_devices, image: require("../assets/images/category_devices.png")},
            ]
        }
    }

    UNSAFE_componentWillMount() {
        this.focusListener = this.props.navigation.addListener('focus', () => {
            if(this.props.route.params != null && this.props.route.params.index != -1) {
                this.props.navigation.navigate("SubCategoryScreen", {category: this.state.category_list[this.props.route.params.index]})
            }
            this.props.navigation.setParams({index: -1})
        })
        
    }

    componentWillUnmount() {
        this.focusListener.remove();
    }

    render() {
        return (
            <View style = {{flex: 1, backgroundColor: Colors.white,}}>
            {
                this.state.loading &&
                <ProgressIndicator/>
            }
                <HeaderView
                    headerTitle = {strings.title_category}
                    navigation = {this.props.navigation}
                />
                <TopNoticeView />
                <ScrollView style = {{flex: 1, width: '100%', paddingHorizontal: 10, paddingBottom: 15}}>
                {
                    this.state.category_list.map((item, index) =>
                    <TouchableOpacity key = {index} style = {styles.cate_view} onPress = {() => this.props.navigation.navigate("SubCategoryScreen", {category: item})}>
                        <ImageBackground style = {styles.cate_bgview} source = {item.image}>
                            <View style = {styles.opacity_view}></View>
                            <Text style = {[styles.cate_title_text, stylesGlobal.font_medium]}>{item.category_name}</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    )
                }
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cate_view: {
        width: '100%', 
        aspectRatio: 4,
        alignItems: 'center', 
        justifyContent: 'center',
        marginTop: 15,
        borderRadius: 10,
        overflow: 'hidden'
    },
    cate_bgview: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center', 
        resizeMode: 'cover'
    },
    cate_title_text: {
        fontSize: 24, 
        color: Colors.white
    },
    opacity_view: {
        width: '100%', 
        height: '100%', 
        position: 'absolute', 
        backgroundColor: Colors.black, 
        opacity: 0.3
    }
})
