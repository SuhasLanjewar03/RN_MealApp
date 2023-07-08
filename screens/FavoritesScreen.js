import {View, Text, StyleSheet} from "react-native";

function FavoritesScreen(){
    return(
        <View style={styles.OuterDiv}>
            <Text style={styles.headline}> Opps!!</Text>
            <Text>No favorite item here</Text>
        </View>
    );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    OuterDiv: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    headline:{
        fontSize:25,
}
});