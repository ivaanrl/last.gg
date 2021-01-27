import { x } from '@xstyled/styled-components';
import { Category } from '../Category';
import {
  CelebritiesLogo,
  CoachesLogo,
  ProPlayersLogo,
  StreamersLogo,
} from '../Logos';
import { SectionTitle } from '../SectionTitle';

export const Categories = () => {
  return (
    <x.div my={{ _: '100px', md: '100px' }}>
      <SectionTitle
        title="Categories"
        subtitle="Sign up and join the community nowSign up and join the community now"
      />
      <x.div
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection={{ _: 'column', md: 'row' }}
      >
        <x.div
          display="flex"
          flexDirection={{ _: 'column', lg: 'row' }}
          px="20px"
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
          px="20px"
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
