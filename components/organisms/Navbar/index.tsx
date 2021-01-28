import { x } from '@xstyled/styled-components';
import {
  Logo,
  HomeLogo,
  PlayLogo,
  ArrowLogo,
  AddLogo,
  SecondaryButton,
  PrimaryButton,
} from '../../atoms';
import { Searchbar, NavbarLink } from '../../molecules';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <x.div
      display="flex"
      alignItems="center"
      justifyContent={{ _: 'center', lg: 'space-between' }}
      h="70px"
      px={{ _: '10px', md: '10%', lg: '22%', xl: '22%' }}
      position="fixed"
      top={0}
      left={0}
      right={0}
      bg="primary"
      zIndex={10}
    >
      <x.div display="flex" alignItems="center">
        <x.div mr={{ _: '30px', lg: '50px' }}>
          <Logo />
        </x.div>
        <Link href="/" passHref>
          <NavbarLink logo={<HomeLogo />} text="Home" active={true} />
        </Link>
        <Link href="/play" passHref>
          <NavbarLink
            logo={<PlayLogo color="rgba(50,62,80,1)" />}
            text="Play"
            active={false}
          />
        </Link>
        <Searchbar />
      </x.div>
      <x.div display="flex" alignItems="center">
        <SecondaryButton
          mr="20px"
          minWidth="fit-content"
          display={{ _: 'none', lg: 'flex' }}
          fontSize="14px"
        >
          <x.div h="16px" w="16px" mr="10px">
            <ArrowLogo />
          </x.div>
          <x.p>Log in</x.p>
        </SecondaryButton>

        <PrimaryButton fontSize="14px" minWidth="fit-content">
          <x.div h="16px" w="16px" mr="10px">
            <AddLogo />
          </x.div>
          <x.p>Join now</x.p>
        </PrimaryButton>
      </x.div>
    </x.div>
  );
};
