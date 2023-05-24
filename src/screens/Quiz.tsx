import { TouchableOpacity } from 'react-native';
import { Center, Text, Box, Icon, Radio, Stack } from 'native-base';
import { AntDesign } from '@expo/vector-icons';

export function Quiz() {
  return (
    <Center flex={1} bg="green.500">
      <Text fontFamily="heading" fontSize="4xl" color="white">
        Questionário
      </Text>
      <Text fontFamily="heading" fontSize="4xl" color="white" mb={4}>
        DASS-21
      </Text>
      <Text textAlign="center" fontWeight="bold" fontSize="md" mb={8} px={10}>
        Este questionário foi desenvolvido pelo PhD Peter Louibond
      </Text>
      <Box
        bgColor="white"
        borderRadius={10}
        h="50%"
        w="80%"
        justifyContent="center"
        px={35}
      >
        <Center>
          <Text fontFamily="body" fontWeight="bold" fontSize="md" mb={2}>
            Achei dificil me acalmar
          </Text>
          <Radio.Group
            name="radioQuizGroup"
            accessibilityLabel="Selecione o número"
          >
            <Stack
              direction="row"
              bgColor="green.400"
              rounded="full"
              w="100%"
              p={2}
              space={4}
            >
              <Radio value="0" size="md">
                <Text fontWeight="bold">0</Text>
              </Radio>
              <Radio value="1" size="md">
                <Text fontWeight="bold">1</Text>
              </Radio>
              <Radio value="2" size="md">
                <Text fontWeight="bold">2</Text>
              </Radio>
              <Radio value="3" size="md">
                <Text fontWeight="bold">3</Text>
              </Radio>
            </Stack>
          </Radio.Group>
          <Text fontFamily="body" fontWeight="bold" fontSize="md" mb={2}>
            Senti tremores (ex. mãos)
          </Text>
          <Radio.Group
            name="radioQuizGroup"
            accessibilityLabel="Selecione o número"
          >
            <Stack
              direction="row"
              bgColor="green.400"
              rounded="full"
              w="100%"
              p={2}
              space={4}
            >
              <Radio value="0" size="md">
                <Text fontWeight="bold">0</Text>
              </Radio>
              <Radio value="1" size="md">
                <Text fontWeight="bold">1</Text>
              </Radio>
              <Radio value="2" size="md">
                <Text fontWeight="bold">2</Text>
              </Radio>
              <Radio value="3" size="md">
                <Text fontWeight="bold">3</Text>
              </Radio>
            </Stack>
          </Radio.Group>
          <Text fontFamily="body" fontWeight="bold" fontSize="md" mb={2}>
            Senti que estava nervoso
          </Text>
          <Radio.Group
            name="radioQuizGroup"
            accessibilityLabel="Selecione o número"
          >
            <Stack
              direction="row"
              bgColor="green.400"
              rounded="full"
              w="100%"
              p={2}
              space={4}
            >
              <Radio value="0" size="md">
                <Text fontWeight="bold">0</Text>
              </Radio>
              <Radio value="1" size="md">
                <Text fontWeight="bold">1</Text>
              </Radio>
              <Radio value="2" size="md">
                <Text fontWeight="bold">2</Text>
              </Radio>
              <Radio value="3" size="md">
                <Text fontWeight="bold">3</Text>
              </Radio>
            </Stack>
          </Radio.Group>
          <Text fontFamily="body" fontWeight="bold" fontSize="md" mb={2}>
            Senti que ia entrar em pânico
          </Text>
          <Radio.Group
            name="radioQuizGroup"
            accessibilityLabel="Selecione o número"
          >
            <Stack
              direction="row"
              bgColor="green.400"
              rounded="full"
              w="100%"
              p={2}
              space={4}
            >
              <Radio value="0" size="md">
                <Text fontWeight="bold">0</Text>
              </Radio>
              <Radio value="1" size="md">
                <Text fontWeight="bold">1</Text>
              </Radio>
              <Radio value="2" size="md">
                <Text fontWeight="bold">2</Text>
              </Radio>
              <Radio value="3" size="md">
                <Text fontWeight="bold">3</Text>
              </Radio>
            </Stack>
          </Radio.Group>
        </Center>
      </Box>
      <Box flexDir="row" w="100%" justifyContent="space-around" mt={4}>
        <TouchableOpacity>
          <Center>
            <Text fontWeight="bold">Página anterior</Text>
            <Icon
              as={AntDesign}
              name="fastbackward"
              color="black"
              size={4}
              mt={1}
            />
          </Center>
        </TouchableOpacity>
        <TouchableOpacity>
          <Center>
            <Text fontWeight="bold">Próxima página</Text>
            <Icon
              as={AntDesign}
              name="fastforward"
              color="black"
              size={4}
              mt={1}
            />
          </Center>
        </TouchableOpacity>
      </Box>
    </Center>
  );
}
