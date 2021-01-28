import { x } from '@xstyled/styled-components';
import { ReactNode } from 'react';

export interface CategoryProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
}

export const Category = ({ icon, title, subtitle }: CategoryProps) => {
  return (
    <x.div
      display="flex"
      flexDirection="column"
      alignItems="center"
      bg="primaryOpaque"
      borderRadius="8px"
      py="40px"
      px={{ _: '80px', md: '35px' }}
      mr={{ _: '0px', md: '15px' }}
      mb={{ _: '20px', lg: '0px' }}
    >
      <x.div h="30px" w="30px">
        {icon}
      </x.div>
      <x.p
        fontWeight={900}
        fontSize="24px"
        textAlign="center"
        color="white"
        my="20px"
      >
        {title}
      </x.p>
      <x.p
        fontFamily="Object Sans"
        fontSize="14px"
        lineHeight="21px"
        textAlign="center"
        color="secondaryText"
        maxWidth="200px"
      >
        {subtitle}
      </x.p>
    </x.div>
  );
};
