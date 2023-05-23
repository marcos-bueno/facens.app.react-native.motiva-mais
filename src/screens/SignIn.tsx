import { TouchableOpacity } from 'react-native';
import { Button, Center, Box, Text } from 'native-base';
import * as AuthSession from 'expo-auth-session';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

import { useAuth } from '@hooks/useAuth';
import { UserDTO } from '@dtos/userDTO';
import LogoSvg from '@assets/logo.svg';
import { Input } from '@components/Input';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

type AuthResponse = {
  params: {
    access_token: string;
  };
  type: string;
};

export function SignIn() {
  const { signIn } = useAuth();
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  async function handleGoogleSignIn() {
    try {
      const CLIENT_ID =
        '369889042943-cfq1as2uc94n59rl776laodp9nmg0ov3.apps.googleusercontent.com';
      const REDIRECT_URI =
        'https://auth.expo.io/@marcosbueno/facens.app.react-native.motiva-mais';
      const SCOPE = encodeURI('profile email');
      const RESPONSE_TYPE = 'token';

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthResponse;

      if (type === 'success') {
        const response = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`
        );

        const user: UserDTO = await response.json();

        await signIn(user);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleOpenSignUp() {
    navigation.navigate('signUp');
  }

  return (
    <Center flex={1} bg="green.500">
      <LogoSvg width={280} />
      <Box py={35} px={35} h="50%" w="80%" bgColor="white" borderRadius={10}>
        <Button
          leftIcon={
            <FontAwesome5
              name="google"
              size={26}
              color="white"
              marginRight={6}
            />
          }
          colorScheme="coolGray"
          rounded="full"
          onPress={handleGoogleSignIn}
        >
          Fazer login com o Google
        </Button>
        <Center>
          <Text my={5}>
            --------------------------- ou ---------------------------
          </Text>
          <Input placeholder="Usuário" bg="gray.200" rounded="full" />
          <Input
            type="password"
            placeholder="Senha"
            bg="gray.200"
            rounded="full"
          />
        </Center>
        <TouchableOpacity onPress={handleOpenSignUp}>
          <Text color="blue.500" textAlign="right">
            Abra sua conta
          </Text>
        </TouchableOpacity>
        <Center>
          <Button colorScheme="green" rounded="full" w="60%" mt={6}>
            LOGIN
          </Button>
        </Center>
      </Box>
    </Center>
  );
}
