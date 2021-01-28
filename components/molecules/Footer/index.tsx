import { x } from '@xstyled/styled-components';
import Image from 'next/image';
import { AddLogo } from '..';
import Link from 'next/link';
import { PrimaryButton } from '../../atoms';

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
        alignItems="flex-start"
        justifyContent="center"
      >
        <x.div w="170px" h="46px" position="relative">
          <Image
            layout="fill"
            src="/images/LastGreyLogo.png"
            alt="last.gg logo"
          />
        </x.div>
        <x.div>
          <x.p fontWeight={900} fontSize="16px">
            Website
          </x.p>
          <Link href="#" passHref>
            <x.p
              fontFamily="Object Sans"
              fontSize="12px"
              color="secondaryText"
              my="15px"
            >
              Main page
            </x.p>
          </Link>
          <Link href="#" passHref>
            <x.p
              fontFamily="Object Sans"
              fontSize="12px"
              color="secondaryText"
              my="15px"
            >
              Support
            </x.p>
          </Link>
          <Link href="#" passHref>
            <x.p
              fontFamily="Object Sans"
              fontSize="12px"
              color="secondaryText"
              my="15px"
            >
              Top up
            </x.p>
          </Link>
        </x.div>
        <x.div>
          <x.p fontWeight={900} fontSize="16px">
            Information
          </x.p>
          <Link href="#" passHref>
            <x.p
              fontFamily="Object Sans"
              fontSize="12px"
              color="secondaryText"
              my="15px"
            >
              Profile
            </x.p>
          </Link>
          <Link href="#" passHref>
            <x.p
              fontFamily="Object Sans"
              fontSize="12px"
              color="secondaryText"
              my="15px"
            >
              Streamers
            </x.p>
          </Link>
          <Link href="#" passHref>
            <x.p
              fontFamily="Object Sans"
              fontSize="12px"
              color="secondaryText"
              my="15px"
            >
              Top up
            </x.p>
          </Link>
        </x.div>
        <x.div>
          <x.p fontWeight={900} fontSize="16px">
            Support
          </x.p>
          <Link href="#" passHref>
            <x.p
              fontFamily="Object Sans"
              fontSize="12px"
              color="secondaryText"
              my="15px"
            >
              Cookies
            </x.p>
          </Link>
          <Link href="#" passHref>
            <x.p
              fontFamily="Object Sans"
              fontSize="12px"
              color="secondaryText"
              my="15px"
            >
              Branding
            </x.p>
          </Link>
          <Link href="#" passHref>
            <x.p
              fontFamily="Object Sans"
              fontSize="12px"
              color="secondaryText"
              my="15px"
            >
              Bug Bounty
            </x.p>
          </Link>
        </x.div>
        <x.div>
          <x.p fontWeight={900} fontSize="16px">
            Contact us
          </x.p>
          <Link href="#" passHref>
            <x.p
              fontFamily="Object Sans"
              fontSize="12px"
              color="secondaryText"
              my="15px"
            >
              Sponsorship
            </x.p>
          </Link>
          <Link href="#" passHref>
            <x.p
              fontFamily="Object Sans"
              fontSize="12px"
              color="secondaryText"
              my="15px"
            >
              Positions
            </x.p>
          </Link>
          <PrimaryButton px="6px" fontSize="14px" minWidth="fit-content">
            <x.div h="16px" w="16px" mr="15px">
              <AddLogo />
            </x.div>
            <x.p>Apply as a gamer</x.p>
          </PrimaryButton>
        </x.div>
      </x.div>
    </x.div>
  );
};
