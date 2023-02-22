import { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import ImgCard from "./card";

const apiKey= "&api_key=675accfabae6d5100018862112b3928e"
const url = "https://api.themoviedb.org/3";
const imgpath="https://image.tmdb.org/t/p/w500/";
const path = "/discover/movie?sort_by=popularity.des";
const apiUrl = url + path + apiKey;

export function Movies({navigation}){
    
const [movies, setMovies] = useState([])
getMovie(apiUrl);
function getMovie(url){
fetch(url).then((res)=>{
    return res.json()}).then((data)=>{
    setMovies(data.results);
    console.log(data.results)
    })
}

return(
<View style={styles.container}>
<ScrollView Style={styles.scrollView}>
    {movies.map((e,i)=>{
    return (
        <TouchableOpacity
        key= {e.i}
        onPress={()=>{
        navigation.navigate("MovieDetails", {movie: e})
        }}
        >
        <ImgCard 
        
        myName={e.title} id={e.id} imgLink={imgpath + e.poster_path}> </ImgCard>
        </TouchableOpacity>);
        })}
</ScrollView> 
</View>
);

}



const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "#fff",
alignItems: "center",
justifyContent: "center",
},
scrollView: {
alignItems: "center",
justifyContent: "center",
paddingTop: 20,
width: "100%",
},
});
