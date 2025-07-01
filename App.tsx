import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import InitialNavigation from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import redux from './src/redux';
import { PersistGate } from 'redux-persist/integration/react';
import { configAxiosStructure } from './src/provider/api-config';
import { colors } from './src/constant';
import FlashMessage from 'react-native-flash-message';

const { store, persistor } = redux;

function App(): React.JSX.Element {
  useEffect(() => {
    configAxiosStructure();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <SafeAreaView style={styles.safeArea}>
            <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
            <View style={{ flex: 1 }}>
              <InitialNavigation />
              <FlashMessage position="top" />
            </View>
          </SafeAreaView>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default App;
