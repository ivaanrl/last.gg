import { x } from '@xstyled/styled-components';
import Link from 'next/link';

export interface FooterItemProps {
  title: string;
  links: { name: string; route: string }[];
}

export const FooterItems = ({ title, links }: FooterItemProps) => {
  return (
    <x.div>
      <x.p fontWeight={900} fontSize="16px">
        {title}
      </x.p>
      {links.map(({ route, name }) => (
        <Link href={route} passHref>
          <x.p
            fontFamily="Object Sans"
            fontSize="12px"
            color="secondaryText"
            my="15px"
          >
            {name}
          </x.p>
        </Link>
      ))}
    </x.div>
  );
};
