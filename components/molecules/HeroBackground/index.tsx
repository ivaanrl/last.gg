import { translateX, x } from '@xstyled/styled-components';

export const HeroBackground = () => {
  return (
    <x.div
      position="absolute"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      zIndex={-1}
      left={0}
      right={0}
    >
      <x.div
        display="flex"
        style={{
          transform: 'translateX(-320px)',
        }}
      >
        <x.h1
          fontWeight={900}
          fontSize="288px"
          lineHeight="260px"
          color="transparent"
          style={{
            WebkitTextStroke: '2px rgba(25,35,48,1)',
          }}
          mr="80px"
        >
          #NOGGS
        </x.h1>
        <x.h1
          fontWeight={900}
          fontSize="288px"
          lineHeight="260px"
          color="transparent"
          style={{
            WebkitTextStroke: '2px rgba(25,35,48,1)',
          }}
        >
          #NOGGS
        </x.h1>
      </x.div>
      <x.div
        display="flex"
        style={{
          transform: 'translateX(-820px)',
        }}
      >
        <x.h1
          fontWeight={900}
          fontSize="288px"
          lineHeight="260px"
          color="transparent"
          style={{
            WebkitTextStroke: '2px rgba(25,35,48,1)',
          }}
          mr="80px"
        >
          #NOGGS
        </x.h1>
        <x.h1
          fontWeight={900}
          fontSize="288px"
          lineHeight="260px"
          color="transparent"
          style={{
            WebkitTextStroke: '2px rgba(25,35,48,1)',
          }}
        >
          #NOGGS
        </x.h1>
      </x.div>
    </x.div>
  );
};
