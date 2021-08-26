import React, { useState }  from "react";
import { TextInput, StyleSheet, SafeAreaView, TouchableOpacity, Text } from "react-native";


const SignUp =({navigation})=>{

    const[email, setEmail] = useState("");
    const[firstName, setfirstName] = useState("");
    const[lastName, setlastName] = useState("");
    const[userName, setuserName] = useState("");
    const[passWord, setpassWord] = useState("");


    const handleSignup =()=> {
        return navigation.push("DashboardStack");
    }

    return(
    <SafeAreaView style={styles.container}>
        <TextInput             
        style={styles.input}
        placeholder="firstname"
        autoCapitalize="none"
        value={firstName}
        onChangeText={setfirstName} />

        <TextInput             
        style={styles.input}
        placeholder="lastname"
        autoCapitalize="none"
        value={lastName}
        onChangeText={setlastName} />

        <TextInput             
        style={styles.input}
        placeholder="email"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail} />

        <TextInput             
        style={styles.input}
        placeholder="username"
        autoCapitalize="none"
        value={userName}
        onChangeText={setuserName} />

        <TextInput             
        style={styles.input}
        placeholder="password"
        autoCapitalize="none"
        value={passWord}
        onChangeText={setpassWord} />

        <TouchableOpacity style={styles.button} onPress={handleSignup}>
                <Text> SignUp </Text>
        </TouchableOpacity>

    </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    input:{
        height: 60,
        margin: 20,
        borderWidth: 4,
        borderRadius: 8,
        padding: 10
    },

    container:{
        flex:1,
        justifyContent:"center"
    },
    
    button:{
        alignItems: "center",
        backgroundColor: "#FFA500",
        padding: 10,
        margin: 90,
        marginTop: 20,
        borderWidth: 3,
        borderRadius: 9,
    }
})

export default SignUp;