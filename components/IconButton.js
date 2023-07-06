import {Pressable, StyleSheet} from "react-native";
import { Fontisto } from '@expo/vector-icons';
function IconButton({ icon, color, onPress}){
    return(
        <Pressable onPress={onPress} style={({Pressed})=> Pressed && styles.Pressed}>
            <Fontisto name={icon} size={30} color={color} />
        </Pressable>
    );
}

export default IconButton;

const styles = StyleSheet.create({
    Pressed:{
        opacity:0.7,
    },
});