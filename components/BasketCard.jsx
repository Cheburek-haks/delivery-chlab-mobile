import React from "react";
import { Image, Text, View } from "react-native";
import SvgUri from "react-native-svg-uri";
import styled from "styled-components/native";
// import iconBasketDelete from "../assets";

const CardImage = styled.Image`
    width: 120px;
    height: 120px;
    border-radius: 18px;
`;
const CounterView = styled.View`
    width: 120px;
    margin-top: 12px;
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
export const BasketCard = () => {
    const [count, setCount] = React.useState(0);
    const [summ, setSumm] = React.useState(300);
    React.useEffect(() => {
        setSumm(count * 300);
    }, [count]);
    return (
        <View
            style={{
                width: "100%",

                borderBottomWidth: 1,
                borderBottomColor: "#bebebe",
                paddingBottom: 8,
            }}
        >
            <View style={{ flexDirection: "row" }}>
                <CardImage
                    source={{
                        uri: "https://cdn.livekindly.co/wp-content/uploads/2019/10/vegan-plant-based-burger-king-1068x601.jpg",
                    }}
                />
                <View style={{ marginLeft: 12 }}>
                    <Text style={{ fontSize: 20 }}>Суш123123123123123и</Text>
                    <Text
                        style={{ fontSize: 18, marginTop: 8, color: "#fa6a3c" }}
                    >
                        300Р
                    </Text>
                </View>
                <View style={{ justifyContent: "center", marginLeft: 18 }}>
                    <Image source={require("../assets/iconBasketDelete.png")} />
                </View>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <CounterView>
                    <CounterButton onPress={() => setCount((prev) => prev - 1)}>
                        <CounterButtonText>-</CounterButtonText>
                    </CounterButton>
                    <CounterText>{count}</CounterText>
                    <CounterButton onPress={() => setCount((prev) => prev + 1)}>
                        <CounterButtonText>+</CounterButtonText>
                    </CounterButton>
                </CounterView>
                <View
                    style={{
                        height: 30,
                        marginTop: 10,
                        marginLeft: 20,
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: "row",
                    }}
                >
                    <Text style={{ fontSize: 16 }}>
                        Сумма: <Text style={{ color: "#fa6a3c" }}>{summ}Р</Text>
                    </Text>
                </View>
            </View>
        </View>
    );
};
