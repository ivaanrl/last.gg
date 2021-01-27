import { x } from '@xstyled/styled-components';
import Image from 'next/image';

export interface GameInterface {
  imgSrc: string;
  imgAlt: string;
  name: string;
  players: number;
}

export const Game = ({ imgAlt, imgSrc, name, players }: GameInterface) => {
  return (
    <x.div>
      <Image
        height={231}
        width={170}
        src={'/images/games/' + imgSrc + '.png'}
        alt={imgAlt}
      />
      <x.p
        fontWeight={900}
        fontSize="16px"
        my="10px"
        textOverflow="ellipsis"
        overflow="hidden"
        whiteSpace="nowrap"
      >
        {name}
      </x.p>
      <x.div display="flex" alignItems="center" position="relative">
        <x.div
          bg="tertiary"
          opacity="0.2"
          h="12px"
          w="12px"
          borderRadius="100%"
          mr="5px"
        ></x.div>
        <x.div
          bg="tertiary"
          h="6px"
          w="6px"
          borderRadius="100%"
          position="absolute"
          left="3px"
        />
        <x.p fontFamily="Object Sans" fontSize="12px" color="secondaryText">
          {players} players
        </x.p>
      </x.div>
    </x.div>
  );
};
