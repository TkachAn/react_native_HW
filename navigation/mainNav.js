import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
// import {useDispatch} from "react-redux";
// import {authSignOutUser} from "../../redux/auth/authOperations";
//
import {Feather} from "@expo/vector-icons";
// import {Ionicons} from "@expo/vector-icons";
import {View, StyleSheet, TouchableOpacity} from "react-native";
//
// import PostsScreen from "../screens/main/posts";
import CreateScreen from "../screens/main/create";
import ProfileScreen from "../screens/main/profile";
import HomeNav from "./nestedNav";
//
// import CreateIcon from "../../assets/images/createIcon.svg";
//
const MainTab = createBottomTabNavigator();
//
export const MainTabs = () => {
  // const dispatch = useDispatch();
  // const signOut = () => {
  //   dispatch(authSignOutUser());
  //};
  return (
    <MainTab.Navigator
      initialRouteName="HomeNav"
      screenOptions={{
        headerTitleAlign: "left",
        headerStyle: {
          height: 88,
          borderBottomWidth: 1,
          borderBottomColor: "#B3B3B3",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          lineHeight: 22,
        },
        tabBarStyle: {
          height: 83,
          paddingHorizontal: 43,
          borderTopWidth: 1,
          borderTopColor: "#B3B3B3",
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FF6C00",
      }}
    >
      <MainTab.Screen
        name="HomeNav"
        component={HomeNav}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, size, color}) => (
            <Feather name="grid" size={size} color={color} />
          ),
          // title: "Публикации!",
        }}
      />

      <MainTab.Screen
        name="CreateScreen"
        component={CreateScreen}
        options={{
          headerShown: true,
          tabBarIcon: ({size}) => {
            return (
              <View style={styles.create}>
                <Feather name={"plus"} size={size} color={"#fff"} />
              </View>
            );
          },
          title: "Создать публикацию",
          tabBarShowLabel: false,
          // tabBarStyle: [
          //   {
          //     display: "none",
          //   },
          //   null,
          // ],
        }}
      />

      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <Feather name="user" size={size} color={color} />
          ),

          headerShown: false,
        }}
      />
    </MainTab.Navigator>
  );
};

const styles = StyleSheet.create({
  create: {
    width: 70,
    height: 40,
    backgroundColor: "#FF6C00",
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
