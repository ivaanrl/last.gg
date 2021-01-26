import { x } from '@xstyled/styled-components';

export const HeroBackground = () => {
  return (
    <x.div
      position="absolute"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      zIndex={-1}
      left="-320px"
      right={0}
    >
      <x.div display="flex">
        <x.h1
          fontWeight={900}
          fontSize="288px"
          lineHeight="220px"
          color="transparent"
          style={{
            webkitTextStroke: '2px rgba(25,35,48,1)',
          }}
        >
          #NOGGS
        </x.h1>
        <x.h1
          fontWeight={900}
          fontSize="288px"
          lineHeight="220px"
          color="transparent"
          style={{
            webkitTextStroke: '2px rgba(25,35,48,1)',
          }}
        >
          #NOGGS
        </x.h1>
      </x.div>
      <x.div display="flex">
        <x.h1
          fontWeight={900}
          fontSize="288px"
          lineHeight="220px"
          color="transparent"
          style={{
            webkitTextStroke: '2px rgba(25,35,48,1)',
          }}
        >
          #NOGGS
        </x.h1>
        <x.h1
          fontWeight={900}
          fontSize="288px"
          lineHeight="220px"
          color="transparent"
          style={{
            webkitTextStroke: '2px rgba(25,35,48,1)',
          }}
        >
          #NOGGS
        </x.h1>
      </x.div>
    </x.div>
  );
};