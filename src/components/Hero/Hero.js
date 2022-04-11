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
        I am a results oriented full stack software developer looking to help an organization bring their vision to reality.  I genuinely enjoy continuous learning and problem solving to assist in creating software to achieve those results.  My background involves many years in a trauma surgical leadership, including many life changing situations that have altered my outlook on life. Lover of Star Wars and guitars.
      </SectionText>
      <a href='/resume/resume.docx' download><Button>Resume</Button></a>
    </LeftSection>
  </Section>
);

export default Hero;