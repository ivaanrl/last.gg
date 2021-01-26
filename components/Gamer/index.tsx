import { x } from '@xstyled/styled-components';
import Image from 'next/image';

interface GamerProps {
  name: string;
}

export const Gamer = ({ name }: GamerProps) => {
  return (
    <x.div display="flex" alignItems="center" mr="60px">
      <x.div h="40px" w="40px" position="relative" mr="20px">
        <Image
          layout="fill"
          src={`/images/gamersAvatars/${name}.png`}
          alt={`${name} photo`}
        />
      </x.div>
      <x.p fontWeight={900} fontSize="24px" lineHeight="29px">
        {name}
      </x.p>
    </x.div>
  );
};
