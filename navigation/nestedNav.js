// import {createStackNavigator} from "@react-navigation/native-stack";
// import {createStackNavigator} from "react-navigation-stack";
import {createStackNavigator} from "@react-navigation/stack";
//
import {Ionicons} from "@expo/vector-icons";
// import {useDispatch} from "react-redux";
// import {authSignOutUser} from "../../redux/auth/authOperations";
//
import {StyleSheet} from "react-native";
//
import CommentsScreen from "../screens/main/nested/comments";
import MapScreen from "../screens/main/nested/map";
import PostsScreen from "../screens/main/posts";
//
const Stack = createStackNavigator();
//

const HomeNav = () => {
  return (
    <Stack.Navigator initialRouteName="Posts">
      <Stack.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публикации",
          headerShown: true,
          headerStyle: {
            height: 88,
            borderBottomWidth: 1,
            borderBottomColor: "#B3B3B3",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            lineHeight: 22,
          },
          headerRight: ({color}) => (
            <Ionicons
              style={{marginRight: 20}}
              name="exit-outline"
              size={24}
              color={color}
              onPress={() => outButtonAlert()}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          title: "Комментарии",
        }}
        // options={{
        //   title: "Comments",
        //   headerStyle: {
        //     color: "#212121",
        //   },
        //   headerTitleAlign: "center",
        //   headerBackVisible: true,
        // }}
      />
      <Stack.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: "Карта",
        }}
        // options={{
        //   title: "Map",
        //   headerStyle: {
        //     color: "#212121",
        //   },
        //   headerTitleAlign: "center",
        //   headerBackVisible: true,
        // }}
      />
    </Stack.Navigator>
  );
};

export default HomeNav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
