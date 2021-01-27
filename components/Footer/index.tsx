import { x } from '@xstyled/styled-components';
import Image from 'next/image';
import { AddLogo } from '..';
import { FooterItems } from '../FooterItems';

export const Footer = () => {
  return (
    <x.div bg="primaryOpaqueDark">
      <x.div
        display="grid"
        margin="auto"
        gridTemplateColumns={{ _: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
        rowGap={10}
        maxWidth="1200px"
        py="50px"
        px="20px"
        alignItems="center"
        justifyContent="center"
      >
        <x.div w="170px" h="46px" position="relative">
          <Image
            layout="fill"
            src="/images/LastGreyLogo.png"
            alt="last.gg logo"
          />
        </x.div>
        <FooterItems
          title="Website"
          links={[
            { name: 'Main page', route: '#' },
            { name: 'Support', route: '#' },
            { name: 'Top up', route: '#' },
          ]}
        />
        <FooterItems
          title="Information"
          links={[
            { name: 'Profile', route: '#' },
            { name: 'Streamers', route: '#' },
            { name: 'Top up', route: '#' },
          ]}
        />
        <FooterItems
          title="Support"
          links={[
            { name: 'Cookies', route: '#' },
            { name: 'Branding', route: '#' },
            { name: 'Bug Bounty', route: '#' },
          ]}
        />
        <x.div>
          <FooterItems
            title="Contact us"
            links={[
              { name: 'Sponsorship', route: '#' },
              { name: 'Positions', route: '#' },
            ]}
          />
          <x.button
            h="3rem"
            borderRadius="8px"
            fontWeight={900}
            display="flex"
            alignItems="center"
            fontSize="14px"
            bg="secondary"
            minWidth="fit-content"
          >
            <x.div h="16px" w="16px" mr="15px">
              <AddLogo />
            </x.div>
            <x.p>Apply as a gamer</x.p>
          </x.button>
        </x.div>
      </x.div>
    </x.div>
  );
};
