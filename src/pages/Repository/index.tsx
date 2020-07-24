import React, { useState, useEffect } from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TouchableNativeFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import RepositoryStatistics from '../../components/RepositoryStatistics';
import api from '../../services/api';
import {
  Container,
  Header,
  HeaderText,
  RepositoryInfo,
  RepositoryImage,
  RepositoryTitle,
  RepositoryDescription,
  RepositoryStatisticsWrapper,
  Issue,
  IssueImage,
  IssueWrapper,
  IssueWrapperTitle,
  IssueWrapperOwner,
} from './styles';
import logoImg from '../../assets/logo.png';

interface Repository {
  full_name: string;
  description: string;
  forks_count: string;
  stargazers_count: string;
  open_issues_count: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}
interface Issue {
  title: string;
  id: number;
  html_url: string;
  user: {
    login: string;
    avatar_url: string;
  };
}

const Repository: React.FC = ({ route }) => {
  const navigation = useNavigation();
  const { name } = route.params;
  const [repository, SetRepository] = useState<Repository | null>(null);
  const [issues, SetIssues] = useState<Issue[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const loadData = async (): Promise<void> => {
      const [Repositories, Issues] = await Promise.all([
        api.get(`/repos/${name}`),
        api.get(`/repos/${name}/issues`),
      ]);
      SetRepository(Repositories.data);
      SetIssues(Issues.data);
      setIsLoading(false);
    };
    loadData();
  }, [name]);
  return isLoading ? (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#00ff00" />
      <Text style={{ fontSize: 20 }}>Carregando</Text>
    </View>
  ) : (
    <Container>
      <Header>
        <Image source={logoImg} />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ flexDirection: 'row' }}
        >
          <Icon name="chevron-left" size={30} color="#cbcbd6" />
          <HeaderText>Voltar</HeaderText>
        </TouchableOpacity>
      </Header>
      <RepositoryInfo>
        <RepositoryImage
          source={{
            uri: repository?.owner.avatar_url,
          }}
        />
        <View style={{ flexShrink: 1, marginLeft: 10 }}>
          <RepositoryTitle>{repository?.full_name}</RepositoryTitle>
          <RepositoryDescription numberOfLines={4}>
            {repository?.description}
          </RepositoryDescription>
        </View>
      </RepositoryInfo>

      <RepositoryStatisticsWrapper>
        <RepositoryStatistics
          StatisticNumber={repository?.stargazers_count}
          StatisticText="Stars"
          StatisticIcon="star"
        />
        <RepositoryStatistics
          StatisticNumber={repository?.forks_count}
          StatisticText="Forks"
          StatisticIcon="github"
        />
        <RepositoryStatistics
          StatisticNumber={repository?.open_issues_count}
          StatisticText="Open Issues"
          StatisticIcon="alert-circle"
        />
      </RepositoryStatisticsWrapper>
      <FlatList
        data={issues}
        style={{ flex: 1 }}
        keyExtractor={item => String(item.id)}
        renderItem={issue => (
          <TouchableNativeFeedback
            onPress={() =>
              navigation.navigate('IssueWebView', { link: issue.item.html_url })
            }
          >
            <Issue>
              <IssueImage source={{ uri: issue.item.user.avatar_url }} />
              <IssueWrapper>
                <IssueWrapperTitle>{issue.item.title}</IssueWrapperTitle>
                <IssueWrapperOwner>{issue.item.user.login}</IssueWrapperOwner>
              </IssueWrapper>
              <Icon name="chevron-right" size={15} color="#cbcbd6" />
            </Issue>
          </TouchableNativeFeedback>
        )}
      />
    </Container>
  );
};

export default Repository;
