import { Avatar } from "@react-native-material/core";
import { View, Text, StyleSheet } from "react-native";

export default function ImgCard(props){

    return <View style={styles.container
    }>
        <Avatar 
        style = {{margin:10}}
        image={{ uri: props.imgLink }} />
        <Text 
        style={{marginTop:30}}
        >{props.myName}</Text>
    </View>
}

const styles = StyleSheet.create(
    {
        container:{
            flexDirection:"row",
            marginTop:60
        }
    }
)

