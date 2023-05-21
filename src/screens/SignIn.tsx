import * as AuthSession from 'expo-auth-session';
import { Button, Center } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { useAuth } from '@hooks/useAuth';
import { UserDTO } from '@dtos/userDTO';

type AuthResponse = {
  params: {
    access_token: string;
  };
  type: string;
};

export function SignIn() {
  const { signIn } = useAuth();

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

  return (
    <Center flex={1} bg="green.700">
      <Button
        leftIcon={
          <FontAwesome5 name="google" size={26} color="white" marginRight={6} />
        }
        colorScheme="red"
        size="lg"
        onPress={handleGoogleSignIn}
      >
        Entrar com Google
      </Button>
    </Center>
  );
}
