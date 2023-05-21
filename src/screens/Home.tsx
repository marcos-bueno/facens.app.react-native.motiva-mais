import { TouchableOpacity } from 'react-native';
import { Center, Text, Image } from 'native-base';
import { useAuth } from '@hooks/useAuth';

import defaultUserPhotoImg from '@assets/userPhotoDefault.png';

export function Home() {
  const { signOut, userData } = useAuth();

  return (
    <Center flex={1}>
      <Text mb={4}>Home</Text>
      <Text mb={4}>Olá {userData.name}</Text>
      <Image
        w={16}
        h={16}
        mb={4}
        rounded="full"
        borderWidth={2}
        borderColor="gray.400"
        source={
          userData.picture ? { uri: userData.picture } : defaultUserPhotoImg
        }
        alt="Imagem do usuário"
      />
      <TouchableOpacity onPress={signOut}>
        <Text>Sair da área logada</Text>
      </TouchableOpacity>
    </Center>
  );
}
