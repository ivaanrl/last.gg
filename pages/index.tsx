import { x } from '@xstyled/styled-components';
import { Hero, Separator } from '../components/molecules';
import {
  PlayWithThem,
  HowItWorks,
  Categories,
  Games,
} from '../components/organisms';
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
      <Categories />
      <Games />
    </>
  );
}
