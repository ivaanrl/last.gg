import { x } from '@xstyled/styled-components';
import { gamers } from '../../../shared/gamers';
import { Gamer } from '../../molecules';

export const PlayWithThem = () => {
  return (
    <x.div
      display="flex"
      flexDirection="column"
      alignItems="center"
      maxWidth="99vw"
      overflow="hidden"
    >
      <x.h2
        fontSize="36px"
        lineHeight={{ _: '29px', md: '43px' }}
        fontWeight={900}
        mb="20px"
      >
        Play with them now
      </x.h2>
      <x.h3
        fontSize={{ _: '14px', md: '16px' }}
        lineHeight={{ _: '21px', md: '24px' }}
        fontWeight={400}
        color="secondaryText"
        mb="35px"
      >
        Some PRO players and streamers listed
      </x.h3>
      <x.div
        display="flex"
        flexWrap="no-wrap"
        overflow="hidden"
        maxWidth="99vw"
        alignItems="center"
        justifyContent="flex-start"
        mb="100px"
        pl={{ _: '25px', sm: '0' }}
      >
        {gamers.map((gamer) => (
          <Gamer name={gamer} key={gamer} />
        ))}
      </x.div>
    </x.div>
  );
};
