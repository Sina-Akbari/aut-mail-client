import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { useSelector } from 'react-redux';

export const UIKittenProvider = ({ children }) => {
  const theme = useSelector((state) => state.theme);

  return (
    <ApplicationProvider {...eva} theme={eva[theme]}>
      {children}
    </ApplicationProvider>
  );
};
