import React from 'react';
import { WebView } from 'react-native-webview';

const IssueWebView: React.FC = ({ route }) => {
  const { link } = route.params;
  return <WebView source={{ uri: link }} />;
};

export default IssueWebView;
