import React from 'react';
import { Button as KittenButton } from '@ui-kitten/components';
import useStyles from './styles';

const Button = ({ style, ...props }) => {
  const styles = useStyles();

  return <KittenButton style={[styles.root, style]} {...props} />;
};

export default Button;
