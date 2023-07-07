import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createDrawerNavigator} from "@react-navigation/drawer";
import MealDetailScreen from "./screens/MealDetailScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import { Ionicons } from '@expo/vector-icons';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            screenOptions= {
            {
                headerStyle: {backgroundColor: '#9f4dff'},//80)FFF
                headerTintColor: 'white',
                sceneContainerStyle: {backgroundColor: 'rgb(227,206,245)'},
                drawerContentStyle:{backgroundColor:'#9f4dff'},
                drawerInactiveTintColor:'white',//black
                drawerActiveTintColor:'black',//white
                drawerActiveBackgroundColor:'lavender', //800FFF

            }}
        >
            <Drawer.Screen name='Categories' component={CategoriesScreen}
            options={{
            title:'All Categories',
                drawerIcon:({ color, size})=>(
                    <Ionicons name="list" size={size} color={color} />
                ),
            }}/>
            <Drawer.Screen name='Favorites' component={FavoritesScreen}
            options={{
            title:'Favorites',
                drawerIcon:({ color, size})=>(
                    <Ionicons name="bookmark" size={size} color={color} />
                ),
            }}/>
        </Drawer.Navigator>
    );
}

export default function App() {
    return (
        <>
            <StatusBar style='light'/>
            <NavigationContainer>
                <Stack.Navigator screenOptions={
                    {
                        headerStyle: {backgroundColor: '#8000FF'},
                        headerTintColor: 'white',
                        contentStyle: {backgroundColor: 'rgb(227,206,245)'}
                    }
                }>
                    <Stack.Screen name="MealsCategories"  component={DrawerNavigator}
                                  options={{
                                      //{title: 'All Categories',}
                                      headerShown:false,
                                  }}
                        />
                    <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}

                    />
                    <Stack.Screen name="MealDetail" component={MealDetailScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    // },
});
