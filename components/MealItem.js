import {View, Text, Pressable, StyleSheet} from "react-native";

function MealItem({title, ImageUrl}){
    return(
        <View>
            <Pressable>
                <View>
                    //<Image source={{uri:imageUrl}}/>
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles= StyleSheet.create({
    image:{
        width:'100%',
        height:200,
    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize: 18,
        margin: 8,
    },
});