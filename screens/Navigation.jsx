import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "./Home";
import { FullPostScreen } from "./FullPost";
import { NavigationContainer } from "@react-navigation/native";
import { RestaurantScreen } from "./RestaurantScreen";
import { BasketScreen } from "./Basket";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: "Кафе и рестораны" }}
                />
                <Stack.Screen
                    name="Restaurant"
                    component={RestaurantScreen}
                    options={{ title: "Ресторан" }}
                />
                <Stack.Screen
                    name="FullPost"
                    component={FullPostScreen}
                    options={{ title: "Статья" }}
                />
                <Stack.Screen
                    name="Basket"
                    component={BasketScreen}
                    options={{ title: "Корзина" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
