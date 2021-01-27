import { x } from '@xstyled/styled-components';
import Link from 'next/link';
import { games } from '../../shared/games';
import { Game } from '../Game';
import { ArrowDiagonalUpLogo } from '../Logos';
import { SectionTitle } from '../SectionTitle';

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
      <SectionTitle
        title="Games"
        subtitle="Sign up and join the community now Sign up and join the community now to continue"
        noMarginBottom
      />
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
