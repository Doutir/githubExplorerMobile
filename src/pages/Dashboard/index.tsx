import React, { useCallback, useState, useEffect } from 'react';
import { Text, View, Image, FlatList, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { Container, Title, Input, Button, ButtonText } from './styles';
import Repository from '../../components/Repository';
import api from '../../services/api';
import logoImg from '../../assets/logo.png';

interface Repository {
  fullName: string;
  description: string;
  avatarUrl: string;
}
const Dashboard: React.FC = () => {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState('');
  const [repositories, SetRepositories] = useState<Repository[]>([]);
  useEffect(() => {
    (async () => {
      const storagedRepos = await AsyncStorage.getItem(
        '@GithubExplorer:repositories',
      );
      if (storagedRepos) {
        return SetRepositories(JSON.parse(storagedRepos));
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      await AsyncStorage.setItem(
        '@GithubExplorer:repositories',
        JSON.stringify(repositories),
      );
    })();
  }, [repositories]);

  const handleAddRepo = useCallback(async () => {
    if (!inputValue.trim()) {
      Alert.alert('Erro', 'O Input se encontra vazio');
      return;
    }
    const verifyIfExist = repositories.find(
      repos => repos.fullName.toLowerCase() === inputValue.toLowerCase(),
    );
    if (verifyIfExist) {
      Alert.alert('Erro', 'Repositorio Duplicado');
      return;
    }
    try {
      const response = await api.get(`/repos/${inputValue}`);
      const newRepo = {
        fullName: response.data.full_name,
        description: response.data.description,
        avatarUrl: response.data.owner.avatar_url,
      };

      SetRepositories([...repositories, newRepo]);
      setInputValue('');
    } catch (err) {
      Alert.alert('Erro', 'Erro ao buscar por Repositório');
    }
  }, [inputValue, repositories]);

  return (
    <Container>
      <Image source={logoImg} />
      <Title>Explore repositórios no Github</Title>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row' }}>
          <Input
            placeholder="Digite Aqui"
            autoCapitalize="characters"
            returnKeyType="send"
            onSubmitEditing={handleAddRepo}
            onChangeText={text => setInputValue(text)}
            value={inputValue}
          />
          <Button onPress={handleAddRepo}>
            <ButtonText>Pesquisar</ButtonText>
          </Button>
        </View>
        {repositories.map(repo => (
          <Repository
            key={repo.fullName}
            AvatarURL={repo.avatarUrl}
            RepositoryTitle={repo.fullName}
            RepositoryDescription={repo.description}
          />
        ))}
      </ScrollView>
    </Container>
  );
};

export default Dashboard;
