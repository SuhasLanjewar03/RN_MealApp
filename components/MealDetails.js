import {StyleSheet, Text, View} from "react-native";
import {MEALS} from "../data/dummy-data";
import {NavigationContainer} from "@react-navigation/native";
import CategoriesScreen from "../screens/CategoriesScreen";
import {Ionicons} from "@expo/vector-icons";
import FavoritesScreen from "../screens/FavoritesScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import BottomTabNavigator from "@react-navigation/bottom-tabs/src/navigators/createBottomTabNavigator";


function MealDetails({duration, complexity, affordability}){
    return(
        <>
            <View style={styles.details}>
                <Text style={styles.detailItem}>{duration}m</Text>
                <Text style={styles.detailItem}>{complexity}</Text>
                <Text style={styles.detailItem}>{affordability}</Text>
            </View>
     </>
    );
}

export default MealDetails;

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
});