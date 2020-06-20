import React, { useState } from "react";
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  AsyncStorage,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

export default function Login(props) {
  const [phoneno, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");

  const loginCrd = async () => {
    fetch("https://kjcattle.herokuapp.com/v1/api/user_login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone_number: phoneno,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.data.role === "feria") {
          props.navigation.navigate("feria");
        } else {
          props.navigation.navigate("main");
        }
      });
  };

  return (
    <>
      <KeyboardAvoidingView behavior="position">
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Text
          style={{
            fontSize: 35,
            marginLeft: 18,
            marginTop: 10,
            color: "#3b3b3b",
          }}
        >
          welcome to
        </Text>
        <Text style={{ fontSize: 35, marginLeft: 18, color: "blue" }}>
          Coders Never Quit
        </Text>
        <View
          style={{
            borderBottomColor: "blue",
            borderBottomWidth: 4,
            borderRadius: 10,
            marginLeft: 20,
            marginRight: 150,
            marginTop: 4,
          }}
        />
        <Text style={{ fontSize: 20, marginLeft: 18, marginTop: 20 }}>
          Login with PhoneNumber
        </Text>
        <TextInput
          label="PhoneNumber"
          mode="outlined"
          style={{ marginLeft: 18, marginRight: 18, marginTop: 18 }}
          theme={{ color: { primary: "blue" } }}
          onChangeText={(text) => setPhoneNo(text)}
        />
        <TextInput
          label="Password"
          mode="outlined"
          style={{ marginLeft: 18, marginRight: 18, marginTop: 18 }}
          theme={{ color: { primary: "blue" } }}
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          mode="contained"
          style={{ marginLeft: 18, marginRight: 18, marginTop: 18 }}
          onPress={() => loginCrd()}
        >
          Login
        </Button>
        <TouchableOpacity onPress={() => props.navigation.navigate("signup")}>
          <Text style={{ fontSize: 20, marginLeft: 18, marginTop: 20 }}>
            dont have a account ?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("forgotpass")}
        >
          <Text style={{ fontSize: 20, marginLeft: 18, marginTop: 20 }}>
            Forgot Password
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </>
  );
}
