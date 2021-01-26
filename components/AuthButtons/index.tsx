import { x } from '@xstyled/styled-components';
import { AddLogo, ArrowLogo } from '../Logos';

export interface AuthButtonsProps {
  shrinkable?: boolean;
}

export const AuthButtons = ({ shrinkable = false }: AuthButtonsProps) => {
  return (
    <x.div display="flex" alignItems="center">
      <x.button
        h="2.5rem"
        borderRadius="8px"
        fontWeight={900}
        alignItems="center"
        bg="transparent"
        border="2px solid"
        borderColor="greyOutline"
        color="white"
        fontSize="14px"
        px="10px"
        mr="20px"
        minWidth="fit-content"
        display={shrinkable ? { _: 'none', lg: 'flex' } : 'flex'}
      >
        <x.div h="16px" w="16px" mr="10px">
          <ArrowLogo />
        </x.div>
        <x.p>Log in</x.p>
      </x.button>
      <x.button
        h="2.5rem"
        borderRadius="8px"
        fontWeight={900}
        display="flex"
        alignItems="center"
        fontSize="14px"
        px="10px"
        bg="secondary"
        minWidth="fit-content"
      >
        <x.div h="16px" w="16px" mr="10px">
          <AddLogo />
        </x.div>
        <x.p>Join now</x.p>
      </x.button>
    </x.div>
  );
};
