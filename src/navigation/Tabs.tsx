import React from "react";
import { Image, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Cards from "../pages/Cards";
import HomeIcon from "../../assets/Images/Home.png";
import ProfileIcon from "../../assets/Images/TabProfile.png";
import CardsIcon from "../../assets/Images/TabCard.png";

const Tabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false, tabBarIcon: ({ focused }) =>
          focused ? (
          <View style={{borderTopWidth: 2,borderTopColor: "#E13915", alignItems: "center", height: 40}}>
              <Image
                  resizeMode="contain"
                  style={{ width: 20, height: 20,marginTop: 5 }}
                  source={HomeIcon}
              />
              <Text style={{color:"#E13915", fontSize: 11, fontFamily: "500"}}>Anasayfa</Text>
          </View>
        ):(
          <View style={{borderTopWidth: 2,borderTopColor: 'transparent', alignItems: "center", height: 40}}>
                <Image
                    resizeMode="contain"
                    style={{ width: 20, height: 20,marginTop: 5  }}
                    source={HomeIcon}
                />
                <Text style={{color:"#c1c8cd", fontSize: 11, fontFamily: "500"}}>Anasayfa</Text>
            </View>
          ),
          tabBarLabel: () => null,
    }}  />
  <Tab.Screen name="Cards" component={Cards} options={{ headerShown: false,tabBarIcon: ({focused}) =>
          focused ? (
          <View style={{borderTopWidth: 2,borderTopColor: "#E13915", alignItems: "center", height: 40}}>
              <Image
                  resizeMode="contain"
                  style={{ width: 20, height: 20,marginTop: 5  }}
                  source={CardsIcon}
              />
              <Text style={{color:"#E13915", fontSize: 11, fontFamily: "500"}}>Kartlar</Text>
          </View>
        ):(
            <View style={{borderTopWidth: 2,borderTopColor: 'transparent', alignItems: "center", height: 40}}>
                <Image
                    resizeMode="contain"
                    style={{ width: 20, height: 20,marginTop: 5  }}
                    source={CardsIcon}
                />
                <Text style={{color:"#c1c8cd", fontSize: 11, fontFamily: "500"}}>Kartlar</Text>
            </View>
          ),
          tabBarLabel: () => null,
      }} />
    <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false,tabBarIcon: ({focused}) =>
          focused ? (
          <View style={{borderTopWidth: 2,borderTopColor: "#E13915", alignItems: "center", height: 40}}>
                <Image
                    resizeMode="contain"
                    style={{ width: 20, height: 20,marginTop: 5  }}
                    source={ProfileIcon}
                />
                <Text style={{color:"#E13915", fontSize: 11, fontFamily: "500"}}>Profile</Text>
            </View>
          ):(
            <View style={{borderTopWidth: 2,borderTopColor: 'transparent', alignItems: "center", height: 40}}>
                <Image
                    resizeMode="contain"
                    style={{ width: 20, height: 20,marginTop: 5  }}
                    source={ProfileIcon}
                />
                <Text style={{color:"#c1c8cd", fontSize: 11, fontFamily: "500"}}>Profile</Text>
            </View>
          ),
          tabBarLabel: () => null,
    }} />
    </Tab.Navigator>
  );
};

export default Tabs;