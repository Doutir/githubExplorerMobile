import React from 'react';
import { WebView } from 'react-native-webview';

interface IssueWebViewProps {
  route: {
    link: string;
  };
}
const IssueWebView: React.FC<IssueWebViewProps> = ({
  route,
}: IssueWebViewProps) => {
  const { link } = route.params;
  return <WebView source={{ uri: link }} />;
};

export default IssueWebView;
