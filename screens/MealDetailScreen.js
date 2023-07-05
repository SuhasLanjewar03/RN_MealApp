import {
    Image,
    Text,
    View,
    StyleSheet,
    ScrollView,
} from "react-native";
import {MEALS} from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";

function MealDetailScreen({route}) {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    return (
        <ScrollView style={styles.rootContainer}>
            <View style={styles.image}>
                <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
            </View>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}/>

            <View style={styles.listOuterContainer}>
            <View style={styles.listContainer}>
            <Subtitle>INGREDIENTS</Subtitle>
                <List data={selectedMeal.ingredients}/>
            <Subtitle>STEPS</Subtitle>
            <List data={selectedMeal.steps}/>
            </View>

            </View>

        </ScrollView>
    );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer:{
        marginBottom:4,
    },
    image: {
        width: '100%',
        height: 230,
        paddingHorizontal:8,
        paddingVertical:5,
        borderRadius:20,
    },
    title:{
        fontWeight:'bold',
        fontSize:24,
        margin:8,
        textAlign:"center",
    },
    listOuterContainer:{
        alignItems:"center",
    },
    listContainer:{
        maxWidth:'80%',
    }

});