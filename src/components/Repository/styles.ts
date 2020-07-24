import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  background: #fff;
  border-radius: 5px;
  flex: 1;
  padding: 10px;
  align-items: center;
  margin-top: 16px;
`;
export const RepositoryAvatar = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
`;
export const RepositoryInfo = styled.View`
  margin-left: 16px;
  flex: 1;
`;
export const RepositoryInfoTitle = styled.Text`
  font-size: 25px;
  color: #3d3d4d;
  font-weight: bold;
  font-family: 'Roboto-Medium';
`;
export const RepositoryInfoDescription = styled.Text`
  font-size: 18px;
  font-family: 'Roboto-Regular';
  color: #a8a8b3;
  margin-top: 4px;
`;
