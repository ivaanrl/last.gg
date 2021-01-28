import { x } from '@xstyled/styled-components';
import { Category } from '../../molecules';
import {
  CelebritiesLogo,
  CoachesLogo,
  ProPlayersLogo,
  StreamersLogo,
} from '../../atoms';

export const Categories = () => {
  return (
    <x.div
      display="flex"
      flexDirection="column"
      alignItems="center"
      my={{ _: '100px', md: '100px' }}
    >
      <x.h1
        fontSize="36px"
        fontWeight="900"
        textAlign="center"
        maxWidth="700px"
        lineHeight={{ _: '43.2px', md: '76.8px' }}
      >
        Categories
      </x.h1>
      <x.h3
        fontSize={{ _: '16px', md: '18px' }}
        lineHeight={{ _: '24px', md: '27px' }}
        textAlign="center"
        color="secondaryText"
        maxWidth="490px"
        mb={{ _: '30px', md: '60px' }}
        px="20px"
        mt="20px"
      >
        Sign up and join the community nowSign up and join the community now
      </x.h3>
      <x.div
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection={{ _: 'column', md: 'row' }}
      >
        <x.div
          display="flex"
          flexDirection={{ _: 'column', lg: 'row' }}
          px={{ _: '20px', md: '0' }}
        >
          <Category
            icon={<CelebritiesLogo />}
            title="Celebrities"
            subtitle="Sign up and join the community nowSign up and join the "
          />
          <Category
            icon={<StreamersLogo />}
            title="Streamers"
            subtitle="Sign up and join the community nowSign up and join the "
          />
        </x.div>
        <x.div
          display="flex"
          flexDirection={{ _: 'column', lg: 'row' }}
          px={{ _: '20px', md: '0' }}
        >
          <Category
            icon={<ProPlayersLogo />}
            title="Pro Players"
            subtitle="Sign up and join the community nowSign up and join the "
          />
          <Category
            icon={<CoachesLogo />}
            title="Coaches"
            subtitle="Sign up and join the community nowSign up and join the "
          />
        </x.div>
      </x.div>
    </x.div>
  );
};
