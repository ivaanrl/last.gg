import { x } from '@xstyled/styled-components';
import Link from 'next/link';
import { games } from '../../shared/games';
import { Game } from '../Game';
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
      mb="100px"
    >
      <SectionTitle
        title="Games"
        subtitle="Sign up and join the community now Sign up and join the community now to continue"
      />
      {/*<Link href="/">
        <x.p>Browse all</x.p>
  </Link>*/}
      <x.div
        display="grid"
        gridTemplateColumns={{ _: 2, sm: 3, md: 4, lg: 5, xl: 6 }}
        columnGap={8}
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
