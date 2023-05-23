import { Button, Center, Box, Text, Icon } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import LogoSvg from '@assets/logo.svg';
import { Input } from '@components/Input';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';
import { TouchableOpacity } from 'react-native';

export function SignUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Center flex={1} bg="green.500">
      <LogoSvg width={280} />
      <TouchableOpacity onPress={handleGoBack}>
        <Box flexDir="row" alignItems="center" mb={5}>
          <Icon as={Feather} name="arrow-left" color="white" size={4} />
          <Text color="white">Voltar</Text>
        </Box>
      </TouchableOpacity>
      <Box py={35} px={35} h="50%" w="80%" bgColor="white" borderRadius={10}>
        <Center>
          <Input placeholder="Nome completo" bg="gray.200" rounded="full" />
          <Input placeholder="E-mail" bg="gray.200" rounded="full" />
          <Input
            placeholder="Confirmação do e-mail"
            bg="gray.200"
            rounded="full"
          />
          <Input
            type="password"
            placeholder="Senha"
            bg="gray.200"
            rounded="full"
          />
          <Button colorScheme="green" rounded="full" w="60%" mt={5}>
            CADASTRAR
          </Button>
        </Center>
      </Box>
    </Center>
  );
}
