import {useRoute} from "@react-navigation/native";
import{MEALS} from "../data/dummy-data";
import MealItem from "../components/MealItem";
import{
    View,
    FlatList,
    StyleSheet,
} from "react-native";

function MealsOverviewScreen({route}){
    const catId=route.params.categoryId;
    const displayedMeals=MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catId)>=0;
    });

    function renderMealItem(itemData){
        return <MealItem title={itemData.item}/>;
    }

    return(
        <View style={styles.container}>
            <FlatList>
                data={displayedMeals}
                keyExtractor={(item)=> item.id}
                renderItem={renderMealItem}
            </FlatList>
        </View>
    );
}

export default MealsOverviewScreen;

const styles=StyleSheet.create({
   container:{
       flex:1,
       padding:16,
   } ,
});