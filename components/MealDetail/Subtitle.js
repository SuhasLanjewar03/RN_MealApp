import {StyleSheet, Text, View} from "react-native";


function subtitle({children}){
    return(
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    );
}
export default subtitle;

const styles = StyleSheet.create({
    subtitle:{
        fontSize:18,
        fontWeight:"bold",
        textAlign:"center",
    },
    subtitleContainer:{
        padding:6,
        marginHorizontal:14,
        marginVertical:4,
        borderBottomColor:'#8000FF',
        borderBottomWidth:2,
    },
});