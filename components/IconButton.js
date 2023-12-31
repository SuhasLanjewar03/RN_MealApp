import {Pressable, StyleSheet} from "react-native";
import { Ionicons } from '@expo/vector-icons';
function IconButton({ icon, color, onPress}){
    return(
        <Pressable onPress={onPress} style={({Pressed})=> Pressed && styles.Pressed}>
            <Ionicons  name={icon} size={24} color={color} />
        </Pressable>
    );
}

export default IconButton;

const styles = StyleSheet.create({
    Pressed:{
        opacity:0.7,
    },
});