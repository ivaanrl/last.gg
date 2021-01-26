import { x } from '@xstyled/styled-components';
import { HeroBackground, AuthButtons, ControllerOutline } from '..';

export const Hero = () => {
  return (
    <x.div
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      h="93vh"
      position="relative"
    >
      <x.div h="45px" w="65px">
        <ControllerOutline />
      </x.div>
      <x.h1
        fontSize={{ _: '36px', md: '64px' }}
        fontWeight="900"
        textAlign="center"
        maxWidth="700px"
        lineHeight={{ _: '43.2px', md: '76.8px' }}
        mt="30px"
        mb={{ _: '10px', md: '25px' }}
      >
        Play With Your Favorite Gamers
      </x.h1>
      <x.h3
        fontSize={{ _: '16px', md: '18px' }}
        lineHeight={{ _: '24px', md: '27px' }}
        textAlign="center"
        color="secondaryText"
        maxWidth="490px"
        mb={{ _: '30px', md: '60px' }}
        px="20px"
      >
        Last.gg allows you to play with people you know and love - your favorite
        streamers and PROs
      </x.h3>
      <HeroBackground />
      <AuthButtons />
    </x.div>
  );
};
