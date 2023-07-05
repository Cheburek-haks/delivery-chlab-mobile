import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { HomeScreen } from "./screens/Home";
import { FullPostScreen } from "./screens/FullPost";
import { Navigation } from "./screens/Navigation";

export default function App() {
    return (
        <View style={styles.container}>
            <Navigation />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        flex: 1,
    },
});
