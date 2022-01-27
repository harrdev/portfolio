import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        Jason Harr's Portfolio
      </SectionTitle>
      <SectionText>
        I am a results oriented full stack software developer looking to help an organization bring their vision to reality.  I genuinely enjoy continuous learning and problem solving to assist in creating software to achieve those results.  With a background in trauma surgical leadership settings, I will bring an easy going and logical aspect to your team.
      </SectionText>
      <a href='/resume/resume.pdf' download><Button>Resume</Button></a>
    </LeftSection>
  </Section>
);

export default Hero;