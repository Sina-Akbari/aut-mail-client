import React, { useState, useCallback } from 'react';
import { Layout, withStyles } from '@ui-kitten/components';

import Button from '@components/Button';
import Input from '@components/Input';
import { translate } from '@translations';

import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions';

function Login({ navigation, eva }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const dispatch = useDispatch();

  const onUserChange = useCallback((text) => {
    setUser(text);
  }, []);
  const onPassChange = useCallback((text) => {
    setPass(text);
  }, []);

  return (
    <Layout style={eva.style.root}>
      <Input
        placeholder={translate('Username')}
        value={user}
        onChangeText={onUserChange}
        style={eva.style.username}
      />
      <Input
        placeholder={translate('Password')}
        value={pass}
        onChangeText={onPassChange}
        style={eva.style.password}
        secureTextEntry
      />
      <Button onPress={() => dispatch(login())} style={eva.style.submit}>
        {translate('Sign In')}
      </Button>
    </Layout>
  );
}

export default withStyles(Login, useStyles);
