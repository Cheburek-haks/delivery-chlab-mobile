import React from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import styled from "styled-components/native";
import { RestaurantCard } from "../components/RestaurantCard";

const RestHead = styled.View`
    width: 100%;
    height: 300px;
    position: relative;
`;
const RestImage = styled.Image`
    width: 100%;
    height: 300px;
    object-fit: cover;
`;
const RestHeadContent = styled.View`
    width: 100%;
    height: 100%;
    padding: 30px;
    padding-top: 150px;
    position: absolute;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.2);
`;
const RestHeadTitle = styled.Text`
    font-size: 42px;
    font-weight: 600;
    color: white;
    margin-bottom: 18px;
`;
const RestHeadRate = styled.View`
    border-radius: 12px;
    height: 50px;
    background: rgba(0, 0, 0, 0.5);
    padding: 12px;
`;

const RestContent = styled.View`
    padding: 12px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
`;

export const RestaurantScreen = ({ route, navigation }) => {
    const { title, mainImage } = route.params;

    React.useEffect(() => {
        navigation.setOptions({ title });
    }, []);

    return (
        <ScrollView style={{ backgroundColor: "rgba(0,0,0,0.1)" }}>
            <RestHead>
                <RestImage source={{ uri: mainImage }} />
                <RestHeadContent>
                    <RestHeadTitle>{title}</RestHeadTitle>
                    <View style={{ flexDirection: "row" }}>
                        <RestHeadRate>
                            <Text style={{ color: "white", fontSize: 20 }}>
                                rating
                            </Text>
                        </RestHeadRate>
                        <RestHeadRate style={{ marginLeft: 12 }}>
                            <Text style={{ color: "white", fontSize: 20 }}>
                                4.7
                            </Text>
                        </RestHeadRate>
                    </View>
                </RestHeadContent>
            </RestHead>
            <RestContent>
                <RestaurantCard item={{ image: mainImage, name: "asd" }} />
                <RestaurantCard item={{ image: mainImage, name: "asd" }} />
                <RestaurantCard item={{ image: mainImage, name: "asd" }} />
                <RestaurantCard item={{ image: mainImage, name: "asd" }} />
                <RestaurantCard item={{ image: mainImage, name: "asd" }} />
                <RestaurantCard item={{ image: mainImage, name: "asd" }} />
                <RestaurantCard item={{ image: mainImage, name: "asd" }} />
                <RestaurantCard item={{ image: mainImage, name: "asd" }} />
                <RestaurantCard item={{ image: mainImage, name: "asd" }} />
                <RestaurantCard item={{ image: mainImage, name: "asd" }} />
                <RestaurantCard item={{ image: mainImage, name: "asd" }} />
                <RestaurantCard item={{ image: mainImage, name: "asd" }} />
                <RestaurantCard item={{ image: mainImage, name: "asd" }} />
                <RestaurantCard item={{ image: mainImage, name: "asd" }} />
            </RestContent>
        </ScrollView>
    );
};
