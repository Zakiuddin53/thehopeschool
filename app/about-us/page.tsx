import { HeroSection } from '@/components/AboutUs/HeroSection';
import { IntroductionSection } from '@/components/AboutUs/IntroductionSection';
import { MeetOurTeamSection } from '@/components/AboutUs/MeetOurTeamSection';
import { MissionVisionSection } from '@/components/AboutUs/MissionVisionSection';
import { PrincipalMessageSection } from '@/components/AboutUs/PrincipalMessageSection';

export default function AboutUs() {
  return (
    <>
      <HeroSection />
      <IntroductionSection />
      <MissionVisionSection />
      <PrincipalMessageSection />
      <MeetOurTeamSection />
    </>
  );
}
