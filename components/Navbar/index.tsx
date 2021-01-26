import { x } from '@xstyled/styled-components';
import { Logo, HomeLogo, PlayLogo, AuthButtons, SearchBar } from '..';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <x.div
      display="flex"
      alignItems="center"
      justifyContent="center"
      h="70px"
      px={{ _: '10px', md: '10px', lg: '30px' }}
      position="fixed"
      top={0}
      left={0}
      right={0}
      bg="primary"
      zIndex={10}
    >
      <x.div mr="50px">
        <Logo />
      </x.div>
      <Link href="/" passHref>
        <x.div display="flex" alignItems="center" hoverCursor="pointer">
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
      <x.div h="1px" w="25px" />
      <Link href="/play" passHref>
        <x.div display="flex" alignItems="center" hoverCursor="pointer">
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
      <x.div h="1px" w={{ _: '0px', md: '50px' }} flexShrink={2} />
      <SearchBar />
      <x.div h="1px" flexShrink={2} w={{ _: 0, md: '0px', lg: '18%' }} />
      <AuthButtons shrinkable />
    </x.div>
  );
};
