import { Avatar } from "@react-native-material/core";
import React from "react";
import {
View,
Text,
StyleSheet,
Image,
} from "react-native";


export function MovieDetails ({route}){
const {movie} = route.params;


    return <View style={styles.container}>
        <Avatar 
        style = {{margin:10}}
        image={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }} />
        {/* <Image source={{uri:`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}}></Image> */}
        <Text style={styles.title}>Title: {movie.title}</Text>
        <Text style={styles.overview}>Over View:{movie.overview}</Text>
    </View>
    

}



const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: "center",
padding: 16,
},
image: {
width: 200,
height: 300,
resizeMode: "contain",
marginVertical: 16,
borderRadius: 10,
},
title: {
fontSize: 24,
fontWeight: "bold",
textAlign: "center",
},
overview: {
fontSize: 16,
textAlign: "center",
marginVertical: 16,
},
});
