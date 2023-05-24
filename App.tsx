import { NativeBaseProvider } from 'native-base';
import { FugazOne_400Regular } from '@expo-google-fonts/fugaz-one';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';

import { THEME } from './src/theme';
import { AuthContextProvider } from '@contexts/AuthContext';
import { Routes } from '@routes/index';
import { Loading } from '@components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    FugazOne_400Regular,
    Roboto_400Regular,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <AuthContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}
