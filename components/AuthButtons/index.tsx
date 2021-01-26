import { x } from '@xstyled/styled-components';
import { AddLogo, ArrowLogo } from '../Logos';

export interface AuthButtonsProps {
  shrinkable?: boolean;
}

export const AuthButtons = ({ shrinkable = false }: AuthButtonsProps) => {
  return (
    <x.div display="flex" alignItems="center">
      <x.button
        h={shrinkable ? '2.5rem' : '3rem'}
        borderRadius="8px"
        fontWeight={900}
        alignItems="center"
        bg="transparent"
        border="2px solid"
        borderColor="greyOutline"
        color="white"
        fontSize={shrinkable ? '14px' : '16px'}
        px={shrinkable ? '10px' : '15px'}
        mr="20px"
        minWidth="fit-content"
        display={shrinkable ? { _: 'none', lg: 'flex' } : 'flex'}
      >
        <x.div h="16px" w="16px" mr={shrinkable ? '10px' : '15px'}>
          <ArrowLogo />
        </x.div>
        <x.p>Log in</x.p>
      </x.button>
      <x.button
        h={shrinkable ? '2.5rem' : '3rem'}
        borderRadius="8px"
        fontWeight={900}
        display="flex"
        alignItems="center"
        fontSize={shrinkable ? '14px' : '16px'}
        px={shrinkable ? '10px' : '15px'}
        bg="secondary"
        minWidth="fit-content"
      >
        <x.div h="16px" w="16px" mr={shrinkable ? '10px' : '15px'}>
          <AddLogo />
        </x.div>
        <x.p>Join now</x.p>
      </x.button>
    </x.div>
  );
};
