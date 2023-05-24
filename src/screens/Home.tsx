import { VStack, Box } from 'native-base';

import { ScreenHeader } from '@components/ScreenHeader';

export function Home() {
  return (
    <VStack bgColor="green.500">
      <ScreenHeader />
      <Box h="100%" py={35} px={35} bgColor="gray.200" borderRadius={20}>
        {/* Conteúdo */}
      </Box>
    </VStack>
  );
}
