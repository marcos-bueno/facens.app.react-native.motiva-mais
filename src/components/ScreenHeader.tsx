import { HStack, Heading, Icon, Text, VStack, Image } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import { useAuth } from '@hooks/useAuth';
import defaultUserPhotoImg from '@assets/userPhotoDefault.png';

export function ScreenHeader() {
  const { userData, signOut } = useAuth();

  return (
    <HStack bg="green.500" pt={16} pb={5} px={8} alignItems="center">
      <Image
        source={
          userData.picture ? { uri: userData.picture } : defaultUserPhotoImg
        }
        alt="Imagem do usuário"
        rounded="full"
        size={16}
        mr={4}
      />
      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Olá
        </Text>
        <Heading color="gray.100" fontSize="md" fontFamily="heading">
          {userData.name}
        </Heading>
      </VStack>
      <TouchableOpacity onPress={signOut}>
        <Icon as={MaterialIcons} name="logout" color="gray.200" size={7} />
      </TouchableOpacity>
    </HStack>
  );
}
