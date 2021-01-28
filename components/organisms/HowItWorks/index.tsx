import { x } from '@xstyled/styled-components';
import { HowItWorksItem } from '../../molecules';
import {
  AddLogo,
  ChevronRightLogo,
  PlayerOutline,
  PlayOutlineLogo,
} from '../../atoms';

export const HowItWorks = () => {
  return (
    <x.div display="flex" flexDirection="column" alignItems="center" mb="100px">
      <x.h1
        fontSize="36px"
        fontWeight="900"
        textAlign="center"
        maxWidth="700px"
        lineHeight={{ _: '43.2px', md: '76.8px' }}
      >
        How it works
      </x.h1>
      <x.h3
        fontSize={{ _: '16px', md: '18px' }}
        lineHeight={{ _: '24px', md: '27px' }}
        textAlign="center"
        color="secondaryText"
        maxWidth="490px"
        mt="20px"
        mb={{ _: '30px', md: '60px' }}
        px="20px"
      >
        High skilled hand picked players. High skilled hand picked players. High
      </x.h3>
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
