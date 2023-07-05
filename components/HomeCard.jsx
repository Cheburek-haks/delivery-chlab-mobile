import { Dimensions } from "react-native";
import styled from "styled-components/native";

let ScreenWidth = Dimensions.get("window").width;

const CardView = styled.View`
    margin-bottom: 40px;
`;
const CardImgView = styled.View`
    position: relative;
`;
const CardImage = styled.Image`
    width: ${ScreenWidth - 50};
    max-width: 600px;
    height: 220px;
    object-fit: cover;
    border-radius: 30px;
`;
const CardTimesView = styled.View`
    padding: 12px 20px;
    position: absolute;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 32px 0 32px 32px;
`;
const CardTimes = styled.Text`
    font-size: 16px;
    color: white;
`;
const CardTitle = styled.Text`
    font-size: 28px;
    font-weight: 500;
    margin-top: 12px;
    margin-left: 12px;
`;

export const HomeCard = ({ item }) => {
    return (
        <CardView>
            <CardImgView>
                <CardImage
                    source={{
                        uri: item.image,
                    }}
                />
                <CardTimesView>
                    <CardTimes>{item.time}</CardTimes>
                </CardTimesView>
            </CardImgView>
            <CardTitle>{item.name}</CardTitle>
        </CardView>
    );
};
