import classNames from 'classnames/bind';
import Button from 'components/common/Button';
import React from 'react';
import styles from './NotFound.module.scss';

const cx = classNames.bind(styles);

interface NotFoundProps {
  onGoBack: void;
}

const NotFound: React.FunctionComponent<NotFoundProps> = ({ onGoBack }) => (
  <div className={cx('not-found')}>
    <h2>존재하지 않는 페이지입니다.</h2>
    <Button onClick={onGoBack} theme="gray">
      돌아가기
    </Button>
  </div>
);

export default NotFound;
