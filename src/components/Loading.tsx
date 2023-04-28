import { Spinner, Center } from 'native-base';

export function Loading() {
  return (
    <Center flex={1} bg="green.700">
      <Spinner />
    </Center>
  );
}
