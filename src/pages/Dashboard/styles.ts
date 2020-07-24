import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #e5e5e5;
  padding: 10px;
`;
export const Title = styled.Text`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
  font-family: 'Roboto-Medium';
  font-weight: bold;
`;

export const Input = styled.TextInput`
  height: 70px;
  flex: 1;
  padding: 0 24px;
  border: 2px solid #fff;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  background: #fff;
  /* color: #3a3a3a; */
  color: #a8a8b3;
  font-family: 'Roboto-Regular';
  font-size: 20px;
`;
export const Button = styled(RectButton)`
  background: #04d361;
  justify-content: center;
  align-items: center;
  padding: 30px;
  height: 70px;
  font-weight: bold;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-family: 'Roboto-Medium';
  font-size: 20px;
`;
