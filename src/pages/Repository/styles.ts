import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #e5e5e5;
  padding: 10px;
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
`;

export const HeaderText = styled.Text`
  color: #a8a8b3;
  font-family: 'Roboto-Regular';
  font-size: 20px;
`;
export const RepositoryInfo = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 20px;
`;
export const RepositoryImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;
export const RepositoryTitle = styled.Text`
  font-size: 30px;
  color: #3a3a3a;
  font-family: 'Roboto-Medium';
  font-weight: bold;
`;

export const RepositoryDescription = styled.Text`
  color: #737380;
  font-family: 'Roboto-Regular';
  font-size: 20px;
  flex-shrink: 1;
`;

export const RepositoryStatisticsWrapper = styled.View`
  justify-content: space-between;
  flex-direction: row;
  padding: 20px 0 20px 0;
`;

export const Issue = styled.View`
  background: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 24px;
  align-items: center;
  flex-direction: row;
  margin-bottom: 10px;
`;
export const IssueImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;
export const IssueWrapper = styled.View`
  margin-left: 16px;
  flex: 1;
`;
export const IssueWrapperTitle = styled.Text`
  font-size: 20px;
  color: #3d3d4d;
  font-family: 'Roboto-Medium';
  font-weight: bold;
`;
export const IssueWrapperOwner = styled.Text`
  font-size: 18px;
  color: #a8a8b3;
  margin-top: 4px;
  font-family: 'Roboto-Regular';
`;
