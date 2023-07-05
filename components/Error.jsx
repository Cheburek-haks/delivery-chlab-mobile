import { styled } from "styled-components/native";

const ErrorDiv = styled.View`
    background: rgba(0, 0, 0, 0.4);
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 500px;
    left: 36%;
    z-index: 100;
`;
const Title = styled.Text`
    color: red;
    font-size: 30px;
`;

export const ErrorWindow = () => {
    return (
        <ErrorDiv>
            <Title>Ошибка</Title>
        </ErrorDiv>
    );
};
