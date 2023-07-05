import React from "react";
import {
    FlatList,
    StyleSheet,
    View,
    RefreshControl,
    TouchableOpacity,
} from "react-native";

import { Loading } from "../components/Loading";
import { HomeCard } from "../components/HomeCard";

export const HomeScreen = ({ navigation }) => {
    const [items, setItems] = React.useState([
        {
            id: 123422,
            name: "KFC",
            image: "https://static.tildacdn.com/tild6633-6562-4662-a535-363339393736/kfc-loja-frango-frit.jpg",
            time: "25-30мин",
        },
        {
            name: "Burger king",
            image: "https://cdn.livekindly.co/wp-content/uploads/2019/10/vegan-plant-based-burger-king-1068x601.jpg",
            time: "20-40мин",
        },
        {
            id: 1,
            name: "Black star burger",
            image: "https://fastfyd.ru/wp-content/uploads/2021/03/original.jpg",
            time: "10-30мин",
        },
        {
            id: 123,
            name: "Mcdonalds",
            image: "https://img.theepochtimes.com/assets/uploads/2019/09/13/mcdonald-manager-i.jpg",
            time: "5-10мин",
        },
        {
            id: 1234,
            name: "Burger king",
            image: "https://cdn.livekindly.co/wp-content/uploads/2019/10/vegan-plant-based-burger-king-1068x601.jpg",
            time: "25-30мин",
        },
    ]);

    const [isLoading, setIsLoading] = React.useState(false);

    return (
        <View style={{ alignItems: "center", padding: "24px" }}>
            <FlatList
                data={items}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate("Basket", {
                                title: item.name,
                                id: item.id,
                                mainImage: item.image,
                            })
                        }
                    >
                        <HomeCard item={item} />
                    </TouchableOpacity>
                )}
                // refreshControl={
                //     <RefreshControl
                //         refreshing={isLoading}
                //          onRefresh={fetchData}
                //     />
                // }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
