import { x } from '@xstyled/styled-components';

export interface SectionTitleProps {
  title: string;
  subtitle: string;
  noMarginBottom?: boolean;
}

export const SectionTitle = ({
  title,
  subtitle,
  noMarginBottom,
}: SectionTitleProps) => {
  return (
    <x.div
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mb={noMarginBottom ? '0px' : { _: '40px', md: '70px' }}
      px="20px"
    >
      <x.p fontSize="36px" fontWeight={900} color="white">
        {title}
      </x.p>
      <x.p
        fontSize="16px"
        fontWeight={400}
        fontFamily="Object Sans"
        lineHeight="24px"
        color="secondaryText"
        maxWidth="350px"
        textAlign="center"
        mt="20px"
      >
        {subtitle}
      </x.p>
    </x.div>
  );
};
