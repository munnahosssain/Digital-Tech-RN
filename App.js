import store from './src/store';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { Provider } from 'react-redux';
import Text from './src/components/text/text';
import Navigation from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const [loaded] = useFonts({
    "Manrope-Bold": require("./assets/fonts/Manrope-Bold.ttf"),
    "Manrope-Regular": require("./assets/fonts/Manrope-Regular.ttf"),
    "Manrope-Medium": require("./assets/fonts/Manrope-Medium.ttf"),
  });

  if (!loaded) {
    return <Text>Font is loading...</Text>
  }
  else {
    return (
      <Provider store={store}>
        <SafeAreaProvider styles={styles.container}>
          <Navigation />
          <StatusBar />
          <FlashMessage
            position="top"
            floating
            statusBarHeight={30}
          />
        </SafeAreaProvider>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // margin:100,
  },
});


// push notification
// Notife