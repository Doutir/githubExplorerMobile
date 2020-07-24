import React from 'react';
import { TouchableNativeFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  RepositoryAvatar,
  RepositoryInfo,
  RepositoryInfoTitle,
  RepositoryInfoDescription,
} from './styles';

interface RepositoryProps {
  AvatarURL: string;
  RepositoryTitle: string;
  RepositoryDescription: string;
}
const Repository: React.FC<RepositoryProps> = ({
  AvatarURL,
  RepositoryTitle,
  RepositoryDescription,
  ...rest
}: RepositoryProps) => {
  const navigation = useNavigation();
  return (
    <TouchableNativeFeedback
      onPress={() =>
        navigation.navigate('Repository', { name: RepositoryTitle })}
    >
      <Container {...rest}>
        <RepositoryAvatar
          style={{ width: 50, height: 50 }}
          source={{ uri: AvatarURL }}
        />
        <RepositoryInfo>
          <RepositoryInfoTitle>{RepositoryTitle}</RepositoryInfoTitle>
          <RepositoryInfoDescription numberOfLines={2}>
            {RepositoryDescription}
          </RepositoryInfoDescription>
        </RepositoryInfo>
        <Icon name="chevron-right" size={30} color="#cbcbd6" />
      </Container>
    </TouchableNativeFeedback>
  );
};

export default Repository;
