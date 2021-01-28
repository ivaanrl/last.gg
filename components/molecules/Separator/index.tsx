import { x } from '@xstyled/styled-components';

export interface SeparatorProps {
  hashtag: string;
  text: string;
}

export const Separator = ({ hashtag, text }: SeparatorProps) => {
  return (
    <x.div
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      h="150px"
      bg="primaryOpaqueDark"
      mb="100px"
    >
      <x.p
        color="secondary"
        fontSize="16px"
        mb={{ base: '15px', lg: '20px' }}
        fontFamily="Object Sans"
      >
        #{hashtag}
      </x.p>
      <x.p color="white" fontSize="24px" textAlign="center" fontWeight={900}>
        {text}
      </x.p>
    </x.div>
  );
};
