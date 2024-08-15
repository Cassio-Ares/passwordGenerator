import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./pages/Home";
import { Passwords } from "./pages/password";

import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarShowLabel:false, 
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Ionicons
                                name={focused ? "home" : "home-outline"}
                                size={size}
                                color={color}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name='Password'
                component={Passwords}
                options={{
                    headerShown: false,
                    tabBarShowLabel:false, 
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Ionicons
                                name={focused ? "lock-closed" : "lock-closed-outline"}
                                size={size}
                                color={color}
                            />
                        )
                    }
                }}
            />
        </Tab.Navigator>
    )
}


