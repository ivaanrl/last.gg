import { FC, ReactNode } from 'react';
import { x } from '@xstyled/styled-components';

export interface NavbarLinkProps {
  active: boolean;
  logo: ReactNode;
  text: string;
}

export const NavbarLink: FC<NavbarLinkProps> = ({ active, logo, text }) => {
  return (
    <x.div
      display="flex"
      alignItems="center"
      hoverCursor="pointer"
      mr="25px"
      color={active ? 'white' : 'greyOutline'}
    >
      <x.div h="18px" w="18px" mr="10px">
        {logo}
      </x.div>
      <x.div
        fontWeight={900}
        mr="20px"
        fontSize="16px"
        display={{ _: 'none', sm: 'inline-block' }}
      >
        {text}
      </x.div>
    </x.div>
  );
};
