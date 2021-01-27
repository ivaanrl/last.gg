import { x } from '@xstyled/styled-components';
import { HowItWorksItem } from '../HowItWorksItem';
import {
  AddLogo,
  ChevronRightLogo,
  PlayerOutline,
  PlayOutlineLogo,
} from '../Logos';

export const HowItWorks = () => {
  return (
    <x.div display="flex" flexDirection="column" alignItems="center" mb="100px">
      <x.div
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mb={{ _: '40px', md: '70px' }}
        px="20px"
      >
        <x.p fontSize="36px" fontWeight={900} color="white">
          How it works
        </x.p>
        <x.p
          fontSize="16px"
          fontWeight={400}
          fontFamily="Object Sans"
          lineHeight="24px"
          color="secondaryText"
          maxWidth="350px"
          textAlign="center"
          mt="20px"
        >
          High skilled hand picked players. High skilled hand picked players.
          High
        </x.p>
      </x.div>
      <x.div
        display="flex"
        flexDirection={{ _: 'column', md: 'row' }}
        alignItems="center"
        px="20px"
      >
        <HowItWorksItem
          icon={<AddLogo color="#FF5188" />}
          title="Create an account"
          subtitle="High skilled hand picked players. High skilled hand picked players. High"
        />
        <x.div
          h="40px"
          w="20px"
          mx={{ _: 0, md: '20px' }}
          transform
          rotate={{ _: 90, md: 0 }}
          my={{ _: '30px', md: '0' }}
        >
          <ChevronRightLogo />
        </x.div>
        <HowItWorksItem
          icon={<PlayerOutline />}
          title="Find a player"
          subtitle="High skilled hand picked players. High skilled hand picked players. High"
        />
        <x.div
          h="40px"
          w="20px"
          mx={{ _: 0, md: '20px' }}
          transform
          rotate={{ _: 90, md: 0 }}
          my={{ _: '30px', md: '0' }}
        >
          <ChevronRightLogo />
        </x.div>
        <HowItWorksItem
          icon={<PlayOutlineLogo />}
          title="Create an account"
          subtitle="High skilled hand picked players. High skilled hand picked players. High"
        />
      </x.div>
    </x.div>
  );
};
