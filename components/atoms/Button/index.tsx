import { DefaultTheme, SystemProps } from '@xstyled/styled-components';
import { x } from '@xstyled/styled-components';
import { FC } from 'react';
import { StyledComponent } from 'styled-components';

export const PrimaryButton: FC<
  | StyledComponent<
      'button',
      DefaultTheme,
      SystemProps<Record<string | number, unknown> & DefaultTheme>,
      any
    >
  | any
> = (props) => {
  return (
    <x.button
      bg="secondary"
      fontWeight="black"
      h="btnSm"
      borderRadius="8px"
      display="flex"
      alignItems="center"
      px="10px"
      {...props}
    />
  );
};

export const SecondaryButton: FC<
  | StyledComponent<
      'button',
      DefaultTheme,
      SystemProps<Record<string | number, unknown> & DefaultTheme>,
      any
    >
  | any
> = (props) => {
  return (
    <x.button
      bg="transparent"
      border="2px solid"
      borderColor="greyOutline"
      fontWeight="black"
      h="btnSm"
      color="white"
      borderRadius="8px"
      display="flex"
      alignItems="center"
      px="10px"
      {...props}
    />
  );
};
