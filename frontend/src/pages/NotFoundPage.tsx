import NotFound from 'components/common/NotFound';
import * as React from 'react';

interface NotFoundPageProps {
  history: any;
}

const NotFoundPage: React.FunctionComponent<NotFoundPageProps> = ({
  history,
}) => {
  return <NotFound onGoBack={history.goBack} />;
};

export default NotFoundPage;
