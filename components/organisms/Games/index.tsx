import { x } from '@xstyled/styled-components';
import Link from 'next/link';
import { games } from '../../../shared/games';
import { Game } from '../../molecules';
import { ArrowDiagonalUpLogo } from '../../atoms';

export const Games = () => {
  return (
    <x.div
      maxWidth="1100px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      margin="auto"
      mb={{ _: '70px', md: '100px' }}
    >
      <x.h1
        fontSize="36px"
        fontWeight="900"
        textAlign="center"
        maxWidth="700px"
        lineHeight={{ _: '43.2px', md: '76.8px' }}
      >
        Games
      </x.h1>
      <x.h3
        fontSize={{ _: '16px', md: '18px' }}
        lineHeight={{ _: '24px', md: '27px' }}
        textAlign="center"
        color="secondaryText"
        maxWidth="490px"
        px="20px"
        mt="20px"
      >
        Sign up and join the community now Sign up and join the community now to
        continue
      </x.h3>
      <Link href="/" passHref>
        <x.div display="flex" alignItems="center" mt="20px" mb="60px">
          <x.p
            fontSize="16px"
            color="secondary"
            fontFamily="Object Sans"
            borderBottom="1px solid"
            borderColor="secondaryOpaque"
          >
            Browse all
          </x.p>
          <x.div h="12px" w="12px" ml="7px">
            <ArrowDiagonalUpLogo />
          </x.div>
        </x.div>
      </Link>
      <x.div
        display="grid"
        gridTemplateColumns={{ _: 2, sm: 3, md: 4, lg: 5, xl: 6 }}
        columnGap={5}
        rowGap={8}
        px="20px"
      >
        {games.map((game) => (
          <Game {...game} />
        ))}
      </x.div>
    </x.div>
  );
};
