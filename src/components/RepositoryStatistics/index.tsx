import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  RepositoryStatisticsNumber,
  RepositoryStatisticsText,
} from './styles';

interface RepositoryStatisticsProps {
  StatisticNumber: string | undefined;
  StatisticText: string | undefined;
  StatisticIcon: string | undefined;
}
const RepositoryStatistics: React.FC<RepositoryStatisticsProps> = ({
  StatisticNumber,
  StatisticText,
  StatisticIcon,
  ...rest
}: RepositoryStatisticsProps) => {
  return (
    <Container {...rest}>
      <RepositoryStatisticsNumber>{StatisticNumber}</RepositoryStatisticsNumber>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Icon name={StatisticIcon} size={20} />
        <RepositoryStatisticsText>{StatisticText}</RepositoryStatisticsText>
      </View>
    </Container>
  );
};

export default RepositoryStatistics;
