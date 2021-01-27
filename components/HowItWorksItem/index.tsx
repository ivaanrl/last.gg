import { x } from '@xstyled/styled-components';
import { ReactNode } from 'react';

export interface HowItWorksItemProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
}

export const HowItWorksItem = ({
  icon,
  title,
  subtitle,
}: HowItWorksItemProps) => {
  return (
    <x.div display="flex" flexDirection="column" alignItems="center">
      <x.div h="40px" w="40px">
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
        maxWidth="300px"
      >
        {subtitle}
      </x.p>
    </x.div>
  );
};
