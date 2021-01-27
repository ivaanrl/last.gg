import { x } from '@xstyled/styled-components';
import { HowItWorksItem } from '../HowItWorksItem';
import {
  AddLogo,
  ChevronRightLogo,
  PlayerOutline,
  PlayOutlineLogo,
} from '../Logos';
import { SectionTitle } from '../SectionTitle';

export const HowItWorks = () => {
  return (
    <x.div display="flex" flexDirection="column" alignItems="center" mb="100px">
      <SectionTitle
        title="How it works"
        subtitle="High skilled hand picked players. High skilled hand picked players.
          High"
      />

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
