import React, { useEffect, useState, useCallback } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import * as RNLocalize from 'react-native-localize';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import store, { persistor } from '@core/redux/store';
import useForceUpdate from '@hooks/useForceUpdate';
import NavigationProvider from '@core/navigation';
import { setI18nConfig } from '@translations';
import { UIKittenProvider } from './UIKittenProvider';

function App() {
  const [hasInit, setInit] = useState(false);
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    async function setupLanguage() {
      try {
        await setI18nConfig();
        setInit(true);
      } catch (e) {
        console.log(e);
      }
    }
    setupLanguage();
  }, []);

  useEffect(() => {
    if (hasInit) {
      RNLocalize.addEventListener('change', handleLocalizationChange);
      return () => {
        RNLocalize.removeEventListener('change', handleLocalizationChange);
      };
    }
  }, [handleLocalizationChange, hasInit]);

  const handleLocalizationChange = useCallback(async () => {
    try {
      await setI18nConfig();
      forceUpdate();
    } catch (e) {
      console.log(e);
    }
  }, [forceUpdate]);

  return (
    <Provider store={store}>
      <UIKittenProvider>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaView style={styles.root}>
            <NavigationProvider />
          </SafeAreaView>
        </PersistGate>
      </UIKittenProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
