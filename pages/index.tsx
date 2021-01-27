import { x } from '@xstyled/styled-components';
import { Hero, HowItWorks, Separator } from '../components';
import { PlayWithThem } from '../components/PlayWithThem';

export default function Home() {
  return (
    <>
      <Hero />
      <PlayWithThem />
      <Separator
        hashtag="NoGGs"
        text="Get the best gamers in your team in a few clicks"
      />
      <HowItWorks />
    </>
  );
}
