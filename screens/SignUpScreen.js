import React, { useState } from "react";
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  Picker,
} from "react-native";
import { Button, TextInput, RadioButton } from "react-native-paper";

export default function SignUp(props) {
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phoneno, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const [selectedValue, setSelectedValue] = useState("customer");

  const sendCred = () => {
    fetch("https://kjcattle.herokuapp.com/v1/api/user_registration", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstname,
        last_name: lastname,
        phone_number: phoneno,
        password: password,
        address: address,
        role: selectedValue,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.meta.status == "2") {
          props.navigation.navigate("login");
        } else {
          alert("Sorrrrrry !!!! Un-authenticated User !!!!!");
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
          Create New Account
        </Text>
        <TextInput
          label="FirstName"
          mode="outlined"
          value={firstname}
          style={{ marginLeft: 18, marginRight: 18, marginTop: 18 }}
          theme={{ color: { primary: "blue" } }}
          onChangeText={(text) => setFirstname(text)}
        />
        <TextInput
          label="LastName"
          mode="outlined"
          value={lastname}
          style={{ marginLeft: 18, marginRight: 18, marginTop: 18 }}
          theme={{ color: { primary: "blue" } }}
          onChangeText={(text) => setLastname(text)}
        />
        <TextInput
          label="Address"
          mode="outlined"
          value={address}
          style={{ marginLeft: 18, marginRight: 18, marginTop: 18 }}
          theme={{ color: { primary: "blue" } }}
          onChangeText={(text) => setAddress(text)}
        />
        <TextInput
          label="PhoneNumber"
          mode="outlined"
          value={phoneno}
          style={{ marginLeft: 18, marginRight: 18, marginTop: 18 }}
          theme={{ color: { primary: "blue" } }}
          onChangeText={(text) => setPhoneNo(text)}
        />

        <TextInput
          label="Password"
          secureTextEntry={true}
          mode="outlined"
          value={password}
          style={{ marginLeft: 18, marginRight: 18, marginTop: 18 }}
          theme={{ color: { primary: "blue" } }}
          onChangeText={(text) => setPassword(text)}
        />

        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="customer" value="customer" />
          <Picker.Item label="feria" value="feria" />
        </Picker>

        <Button
          mode="contained"
          style={{ marginLeft: 18, marginRight: 18, marginTop: 18 }}
          onPress={() => sendCred()}
        >
          SignUp
        </Button>
        <TouchableOpacity onPress={() => props.navigation.navigate("login")}>
          <Text style={{ fontSize: 20, marginLeft: 18, marginTop: 20 }}>
            already have a account ?
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </>
  );
}
