import { x } from '@xstyled/styled-components';
import { gamers } from '../../shared/gamers';
import { Gamer } from '../Gamer';

export const PlayWithThem = () => {
  return (
    <x.div display="flex" flexDirection="column" alignItems="center">
      <x.h2 fontSize="36px" lineHeight="43px" fontWeight={900} mb="20px">
        Play with them now
      </x.h2>
      <x.h3
        fontSize="16px"
        lineHeight="24px"
        fontWeight={400}
        color="secondaryText"
        mb="35px"
      >
        Some PROP players and streamers listed
      </x.h3>
      <x.div
        display="flex"
        flexWrap="no-wrap"
        overflow="hidden"
        maxWidth="99vw"
        alignItems="center"
        justifyContent="flex-start"
        mb="100px"
      >
        {gamers.map((gamer) => (
          <Gamer name={gamer} />
        ))}
      </x.div>
    </x.div>
  );
};
