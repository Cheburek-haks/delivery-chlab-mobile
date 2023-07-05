import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { BasketCard } from "../components/BasketCard";

const BasketHead = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
const BasketContent = styled.View`
    margin-top: 24px;
    gap: 24px;
`;

export const BasketScreen = ({}) => {
    return (
        <ScrollView style={{ padding: 12 }}>
            <BasketHead>
                <Text style={{ fontSize: 28 }}>Корзина</Text>
                <TouchableOpacity>
                    <Text style={{ fontSize: 18, color: "rgba(0,0,0,0.6)" }}>
                        Очистить
                    </Text>
                </TouchableOpacity>
            </BasketHead>
            <BasketContent>
                <BasketCard />
                <BasketCard />
                <BasketCard />
                <BasketCard />
                <BasketCard />
                <BasketCard />
                <BasketCard />
                <BasketCard />
                <BasketCard />
                <BasketCard />
                <BasketCard />
            </BasketContent>
        </ScrollView>
    );
};
