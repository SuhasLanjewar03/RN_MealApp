import{
    Pressable,
    View,
    Text,
    StyleSheet,
    Platform,
    ImageBackground,
} from 'react-native';

function CategoryGridTile({title, color, onPress, pic}){

    return(
        <View style={styles.gridItem}>
            <ImageBackground source={{uri:pic}}
            resizeMode='cover'
            style={styles.mainBg}
            imageStyle={styles.backgroundImage}>
            <Pressable android_ripple={{color:color}}
                       style={({pressed}) =>[styles.button, pressed ? styles.buttonPressed:null,]}
                       onPress={onPress}>
                <View style={[styles.innerContainer/*, {backgroundColor:color}*/]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
         </ImageBackground>
        </View>
    );
}
export default CategoryGridTile;

const styles= StyleSheet.create({
    gridItem:{
        flex:1,
        margin: 16,
        height:150,
        borderRadius:8,
        //opacity:0.5,
        elevation:4,
        backgroundColor:'dimgray',
        shadowColor:'#000000',
        shadowOpacity:0.25,
        shadowOffset: { width:0, height:2},
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    button:{
        flex:1,
    },
    buttonPressed:{
        opacity:0.5,
    },
    innerContainer:{
        flex:1,
        padding:16,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontWeight:'bold',
        fontSize:20,
        color:'white',
    },
    mainBg: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.6,
    },
});