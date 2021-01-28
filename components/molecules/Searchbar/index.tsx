import { FC } from 'react';
import { x } from '@xstyled/styled-components';
import { SearchLogo } from '../../atoms';

export interface SearchbarProps {}

export const Searchbar: FC<SearchbarProps> = () => {
  return (
    <x.div
      borderRadius="8px"
      display="flex"
      alignItems="center"
      bg="primaryOpaque"
      h="40px"
      px="15px"
      mx={{ _: '10px', md: '20px' }}
    >
      <x.input
        bg="transparent"
        placeholder="E.g Kioshima"
        placeholderColor="secondaryText"
        fontSize="12px"
        minWidth="200px"
        display={{
          _: 'none',
          lg: 'inline-block',
        }}
        color="white"
        height="40px"
        focusOutline="none"
      ></x.input>
      <x.div h="16px" w="16px">
        <SearchLogo />
      </x.div>
    </x.div>
  );
};
