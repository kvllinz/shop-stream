import React from "react";
import {Button, Text, View } from "react-native";

const Home =({ navigation })=>{
    return (
        <View style={{
            flex: 1,
            justifyContent:"center",
            alignItems: "center"
        }}>
            <Text>
                Home!
            </Text>
            <Button title="GoLive" onPress={()=> navigation.navigate("GoLive") }></Button>
        </View>
    );
}

export default Home;