import profileImgLarge from '~/assets/1714143689953.jpg';
import profileImgPlaceholder from '~/assets/1714143689953.jpg';
import profileImg from '~/assets/1714143689953.jpg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import katakana from './katakana.svg';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
    My name is Mohamed Habib Boukadida, and I'm a final-year Computer Science Engineering student at <Link href="https://www.ensit.tn/">ENSIT (National Higher School of Engineering in Tunis)</Link>. 
    I have a solid foundation in programming languages such as <Link href="https://en.wikipedia.org/wiki/C_(programming_language)">C</Link>, 
    <Link href="https://en.wikipedia.org/wiki/C%2B%2B">C++</Link>, 
    <Link href="https://en.wikipedia.org/wiki/Python_(programming_language)">Python</Link>, 
    <Link href="https://en.wikipedia.org/wiki/JavaScript">JavaScript</Link>, 
    <Link href="https://www.typescriptlang.org/">TypeScript</Link>, and 
    <Link href="https://en.wikipedia.org/wiki/Java_(programming_language)"> Java</Link>, and I’ve gained experience with frameworks like 
    <Link href="https://angular.io/"> Angular</Link>, 
    <Link href="https://www.djangoproject.com/">Django</Link>, 
    <Link href="https://nextjs.org/">Next.js</Link>, 
    <Link href="https://laravel.com/">Laravel</Link>, and 
    <Link href="https://spring.io/projects/spring-boot"> Spring Boot</Link>. 
    I'm also proficient in tools like <Link href="https://git-scm.com/">Git</Link> and 
    <Link href="https://github.com/"> GitHub</Link>, and I’m deepening my knowledge in  
    <Link href="https://en.wikipedia.org/wiki/Artificial_intelligence"> AI</Link>, 
    <Link href="https://en.wikipedia.org/wiki/Machine_learning">machine learning</Link>, and 
    <Link href="https://en.wikipedia.org/wiki/Code_refactoring#Clean_code"> clean code</Link> practices.

    Outside of academics, I founded the <Link href="https://www.facebook.com/profile.php?id=61553999858181">"Vanguard Chess Club"</Link>, the first chess club at ENSIT, and actively participate in college clubs and charity work. My interests include ancient history and warfare, and I enjoy problem-solving on platforms like <Link href="https://codeforces.com/">Codeforces</Link>. I’m always eager to collaborate, learn, and make a positive impact.

    Feel free to connect if you’d like to discuss technology, history, play chess , or potential opportunities!
</Text>


  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
              
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me smiling like a goofball at the Qwilr office in Sydney"
                />
                <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <use href={`${katakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
