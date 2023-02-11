import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {MainTabs} from "./mainNav";
import SignIn from "../screens/auth/signIn";
import SignUp from "../screens/auth/signUp";
//
// const AuthStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

export default function Router() {
  const stateChange = true;
  // const stateChange = false;
  return (
    <NavigationContainer>
      {stateChange ? (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="MainTabs" component={MainTabs} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName="SignIn"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

// //            options={{
// 	headerShown: false,
// }}
