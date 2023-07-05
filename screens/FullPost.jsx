import React from "react";
import { Text, View } from "react-native";

import styled from "styled-components/native";

const PostImage = styled.Image`
    width: 390px;
    height: 500px;
    border-radius: 12px;
    margin-right: 12px;
    object-fit: cover;
`;
const PostTitle = styled.Text`
    font-size: 20px;
    color: blue;
    margin-top: 20px;
`;
export const FullPostScreen = ({ route, navigation }) => {
    const { id, title } = route.params;
    React.useEffect(() => {
        navigation.setOptions({ title });
    }, []);
    return (
        <View style={{ padding: 20 }}>
            <Text>12</Text>
            <PostImage
                source={{
                    uri: "https://i.artfile.ru/2880x1800_908185_[www.ArtFile.ru].jpg",
                }}
            />
            <PostTitle>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                eius laborum, animi earum dolore cumque magni a natus iste
                consectetur?
            </PostTitle>
            <PostTitle>{id}</PostTitle>
        </View>
    );
};
