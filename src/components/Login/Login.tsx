import React, { useState } from "react";
import { Text, Button, SafeAreaView, StyleSheet, TouchableOpacity, View, TextInput } from "react-native";

const Login =({navigation})=> {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const handleLogin =()=>{
        return navigation.push("DashboardStack");
    }

    const navigateToSignUp =()=> {
        return navigation.push("SignUp");
    }

    return(
        <SafeAreaView style={styles.containers}>

        <View style={{flex:1, marginTop: 200}}> 
            <TextInput 
            style={styles.input}
            placeholder="UserName"
            autoCapitalize="none"
            value={username}
            onChangeText={setUsername}/>

            <TextInput 
            style={styles.input}
            placeholder="PassWord"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}/>

            </View>

            <View style={{flex:1, flexDirection: "row", justifyContent:"space-around", alignContent:"center", marginTop: -30}}>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text> SignIn </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={navigateToSignUp}>
                <Text> SignUp </Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView> 
    );
}

const styles = StyleSheet.create({
containers:{
    flex: 1,
    justifyContent:"center"
},
input:{
    height: 60,
    margin: 20,
    borderWidth: 4,
    borderRadius: 8,
    padding: 10,

},
button:{
    alignItems: "center",
    backgroundColor: "#FFA500",
    padding: 10,
    height:50,
    borderWidth: 3,
    borderRadius: 9,
}
})

export default Login;