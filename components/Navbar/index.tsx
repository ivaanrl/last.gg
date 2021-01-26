import { x } from '@xstyled/styled-components';
import { Logo, HomeLogo, PlayLogo, AuthButtons, SearchBar } from '..';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <x.div
      display="flex"
      alignItems="center"
      justifyContent={{ _: 'center', lg: 'space-between' }}
      h="70px"
      px={{ _: '10px', md: '22%', lg: '500px' }}
      position="fixed"
      top={0}
      left={0}
      right={0}
      bg="primary"
      zIndex={10}
    >
      <x.div display="flex" alignItems="center">
        <x.div mr="50px">
          <Logo />
        </x.div>
        <Link href="/" passHref>
          <x.div
            display="flex"
            alignItems="center"
            hoverCursor="pointer"
            mr="25px"
          >
            <x.div h="15px" w="15px" mr="10px">
              <HomeLogo />
            </x.div>
            <x.div
              fontWeight={900}
              mr="20px"
              fontSize="16px"
              display={{ _: 'none', lg: 'inline-block' }}
            >
              Home
            </x.div>
          </x.div>
        </Link>
        <Link href="/play" passHref>
          <x.div
            display="flex"
            alignItems="center"
            hoverCursor="pointer"
            mr={{ _: '0', lg: '50px' }}
          >
            <x.div h="15px" w="15px" mr="10px">
              <PlayLogo color="rgba(50,62,80,1)" />
            </x.div>
            <x.div
              fontWeight={900}
              mr="20px"
              color="greyOutline"
              fontSize="16px"
              display={{ _: 'none', lg: 'inline-block' }}
            >
              Play
            </x.div>
          </x.div>
        </Link>
        <SearchBar />
      </x.div>
      <AuthButtons shrinkable />
    </x.div>
  );
};
