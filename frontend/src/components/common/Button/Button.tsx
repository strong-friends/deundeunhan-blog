import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Div: React.FunctionComponent = ({ children, ...rest }) => (
  <div {...rest}>{children}</div>
);

interface ButtonProps {
  disabled: boolean;
  onClick: any;
  theme: string;
  to: any;
}

const defaultButtonProps = {
  disabled: false,
  onClick: null,
  theme: 'gray',
  to: null,
};

class Button extends React.Component<ButtonProps> {
  public static defaultProps = defaultButtonProps;
  public render() {
    const { children, to, onClick, disabled, theme } = this.props;
    const Element = to && !disabled ? Link : Div;
    return (
      <Element
        to={to}
        className={cx('button', theme, { disabled })}
        onClick={disabled ? () => null : onClick}
      >
        {children}
      </Element>
    );
  }
}

export default Button;
