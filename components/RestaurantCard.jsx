import React from "react";
import styled from "styled-components/native";

const CardView = styled.View`
    padding: 8px;
    background: #e1e1e1;
    width: 198px;
    border-radius: 12px;
`;

const CardImage = styled.Image`
    width: 180px;
    height: 180px;
    border-radius: 12px;
`;
const CardPrice = styled.Text`
    font-size: 24px;
    margin: 8px 0;
`;
const CardName = styled.Text`
    font-size: 18px;
`;
const CardWeight = styled.Text`
    font-size: 16;
    color: rgba(0, 0, 0, 0.5);
    margin: 8px 0;
`;
const CardButton = styled.Button`
    width: 100%;
`;
const CounterView = styled.View`
    width: 100%;
    height: 38px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
const CounterButton = styled.TouchableOpacity`
    padding: 4px 12px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 8px;
`;
const CounterButtonText = styled.Text`
    font-size: 22px;
`;
const CounterText = styled.Text`
    font-size: 18px;
`;

export const RestaurantCard = ({ item }) => {
    const [onCounter, setOnCounter] = React.useState(false);
    const [count, setCount] = React.useState(0);

    return (
        <CardView>
            <CardImage
                source={{
                    uri: item.image,
                }}
            />
            <CardPrice>300₽</CardPrice>
            <CardName>Суши</CardName>
            <CardWeight>199</CardWeight>
            {count > 0 ? (
                <CounterView>
                    <CounterButton onPress={() => setCount((prev) => prev - 1)}>
                        <CounterButtonText>-</CounterButtonText>
                    </CounterButton>
                    <CounterText>{count}</CounterText>
                    <CounterButton onPress={() => setCount((prev) => prev + 1)}>
                        <CounterButtonText>+</CounterButtonText>
                    </CounterButton>
                </CounterView>
            ) : (
                <CardButton
                    title="Добавить"
                    onPress={() => setCount((prev) => prev + 1)}
                />
            )}
        </CardView>
    );
};
