import gamestackTexture2Large from '~/assets/Screenshot 2024-09-12 161111.png';
import gamestackTexture2Placeholder from '~/assets/Screenshot 2024-09-12 161111.png'; 
import gamestackTexture2 from '~/assets/Screenshot 2024-09-12 161111.png';
import gamestackTextureLarge from '~/assets/Screenshot 2024-09-12 161223.png';
import gamestackTexturePlaceholder from '~/assets/Screenshot 2024-09-12 161223.png';
import gamestackTexture from '~/assets/Screenshot 2024-09-12 161223.png';
import sliceTextureLarge from '~/assets/Screenshot 2024-09-12 160847.png';
import sliceTexturePlaceholder from '~/assets/Screenshot 2024-09-12 160847.png';
import sliceTexture from '~/assets/Screenshot 2024-09-12 160847.png';
import sprTextureLarge from '~/assets/1706034658002 (1).jpg';
import sprTexturePlaceholder from '~/assets/1706034658002 (1).jpg';
import sprTexture from '~/assets/1706034658002 (1).jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';
import SmartSparrow from '../projects.smart-sparrow/route';
import { ThemeProvider, useTheme } from '~/components/theme-provider';
import backgroundSprLarge from '~/assets/Screenshot 2024-09-12 155240.png';
import backgroundSprPlaceholder from '~/assets/457032756_1267351341374843_5415697035943497922_n.jpg';
import backgroundSpr from '~/assets/Screenshot 2024-09-12 153944.png';
import imageSprLessonBuilderDark from '~/assets/Screenshot 2024-09-12 154828.png';
import imageSprLessonBuilderLightLarge from '~/assets/Screenshot 2024-09-12 154828.png';
import imageSprLessonBuilderLightPlaceholder from '~/assets/Screenshot 2024-09-12 154828.png';
import imageSprLessonBuilderLight from '~/assets/Screenshot 2024-09-12 154828.png';
import imageSprLessonBuilderDarkLarge from '~/assets/Screenshot 2024-09-12 154828.png';
import imageSprLessonBuilderDarkPlaceholder from '~/assets/Screenshot 2024-09-12 154828.png';
import imageSprLessonBuilderDarkPlaceholder2 from '~/assets/Screenshot 2024-09-12 155619.png';
import { Suspense, lazy, useMemo } from 'react';

import { media } from '~/utils/style';
import { Image } from '~/components/image';
import imageSprBackgroundVolcanismLarge from '~/assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from '~/assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from '~/assets/spr-background-volcanism.jpg';
import videoSprMotionLarge from '~/assets/spr-motion-large.mp4';
import videoSprMotionPlaceholder from '~/assets/spr-motion-placeholder.jpg';
import videoSprMotion from '~/assets/spr-motion.mp4';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
const Earth = lazy(() => import('./earth').then(module => ({ default: module.Earth })));
const EarthSection = lazy(() =>
  import('./earth').then(module => ({ default: module.EarthSection }))
);
const title = 'Designing the future of education';
const description =
  'I worked as the design lead on a major iteration of Smart Sparrow’s product. We took the platform in a bold new direction, focusing on becoming the best tool for learning designers.';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Engineer + Developer',
    description: `${config.name}`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    toggleTheme(themes[index]);
  };
  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <><div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden} />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Founder and ex-president of Vanguard Chess Club"
        description=" Vanguard Chess Club, the first chess club established at ENSIT. Through this initiative, I brought together students who share a passion for strategy, intellect, and camaraderie."

        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }} />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Active Member of Tunis Sports University"
        description="Tunis Sports University is an organization of sports and recreational events with a social and humanitarian character."

        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${gamestackTexture} 375w, ${gamestackTextureLarge} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: `${gamestackTexture2} 375w, ${gamestackTexture2Large} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }} />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Passionate about problem solving and thriving in hackathon challenges."
        description="Participated in nearly every hackathon during the past academic year, actively engaged on the Codeforces platform, and took part in all problem-solving training sessions organized by local university clubs.."
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }} />
    </div>
    <ProjectContainer>
      
    <ThemeProvider id="earth" theme="dark" data-invert>
          <Suspense>
            <Earth
              className={styles.earth}
              hideMeshes={useMemo(
                () => ['Atmosphere', 'EarthPartial', 'Chunk', 'EarthFull'],
                []
              )}
              position={useMemo(() => [0, 0, 0], [])}
              labels={useMemo(
                () => [
                  {
                    position: [0.54, 0.19, 0.18],
                    text: 'Pacific ring of fire',
                    hidden: true,
                  },
                  {
                    position: [0.47, -0.38, 0.04],
                    text: 'Ruapehu',
                    hidden: true,
                  },
                  {
                    position: [0.22, 0.44, -0.35],
                    text: 'St. Helens',
                    hidden: true,
                  },
                  {
                    position: [0.16, -0.06, 0.58],
                    text: 'Krakatoa',
                    hidden: true,
                  },
                  {
                    position: [0.11, 0.2, -0.56],
                    text: 'Parícutin',
                    hidden: true,
                  },
                  {
                    position: [0.52, 0.2, -0.23],
                    text: 'Kīlauea',
                    hidden: true,
                  },
                  {
                    position: [-0.24, 0.75, 0.24],
                    text: 'Mantle',
                    delay: 800,
                    hidden: true,
                  },
                  {
                    position: [-0.24, 0.55, 0.24],
                    text: 'Outer core',
                    delay: 800,
                    hidden: true,
                  },
                  {
                    position: [-0.24, 0.35, 0.24],
                    text: 'Inner core',
                    delay: 800,
                    hidden: true,
                  },
                ],
                []
              )}
              scale={0.6}
            >
              <EarthSection
                scrim
                animations={['0:loop']}
                camera={[0, 0, 1.5]}
                meshes={['Atmosphere', 'EarthFull']}
              >
                <ProjectSection>
                  <ProjectSectionContent>
                    <ProjectTextRow center>
                      <ProjectSectionHeading>
                        Next generation
                      </ProjectSectionHeading>
                        <ProjectImage
                raised
                key={theme}
                srcSet={
                  isDark
                    ? `${backgroundSpr} 1280w, ${backgroundSpr} 2560w`
                    : `${backgroundSpr} 1280w, ${backgroundSpr} 2560w`
                }
                width={1280}
                height={800}
                placeholder={
                  isDark
                    ? backgroundSpr
                    : backgroundSpr
                }
                style={{ opacity: 0.6,
                  borderRadius: '500px'  // Adjust this value as needed
                 }}

                sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
                alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
              />
                    </ProjectTextRow>
                  </ProjectSectionContent>
                </ProjectSection>
              </EarthSection>
              <EarthSection
                animations={['0:loop']}
                camera={[0, 0, 2.4]}
                meshes={['Atmosphere', 'EarthFull']}
              />
              <EarthSection
                animations={['0:loop']}
                camera={[1.14, -1.39, 0.94]}
                meshes={['Atmosphere', 'EarthFull']}
              >
                <ProjectSection>
                  <ProjectSectionContent width="xl">
                    <ProjectTextRow justify="end" width="s">
                      <ProjectSectionHeading level={4} as="h3">
                        Traveling
                      </ProjectSectionHeading>
                      <ProjectImage
              raised
              key={theme}
              srcSet={
                isDark
                  ? `${imageSprLessonBuilderDark} 1280w, ${imageSprLessonBuilderDarkLarge} 2560w`
                  : `${imageSprLessonBuilderLight} 1280w, ${imageSprLessonBuilderLightLarge} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? imageSprLessonBuilderDarkPlaceholder
                  : imageSprLessonBuilderLightPlaceholder
              }
              style={{ opacity: 0.6 }}

              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
            />
                    </ProjectTextRow>
                  </ProjectSectionContent>
                </ProjectSection>
              </EarthSection>
              <EarthSection
                animations={['0:loop']}
                camera={[1.17, 0.69, -1.47]}
                meshes={['Atmosphere', 'EarthFull']}
                labels={[
                  'Pacific ring of fire',
                  'Ruapehu',
                  'St. Helens',
                  'Krakatoa',
                  'Parícutin',
                  'Kīlauea',
                ]}
              >
                <ProjectSection>
                  <ProjectSectionContent width="xl">
                    <ProjectTextRow justify="start" width="s">
                      <ProjectSectionHeading level={4} as="h3">
                        Charity
                      </ProjectSectionHeading>
                      <ProjectImage
              raised
              key={theme}
              srcSet={
                isDark
                  ? `${backgroundSprLarge} 1280w, ${backgroundSprLarge} 2560w`
                  : `${backgroundSprLarge} 1280w, ${backgroundSprLarge} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? backgroundSprLarge
                  : backgroundSprLarge
              }
              style={{ opacity: 0.7 }}

              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
            />
                    </ProjectTextRow>
                  </ProjectSectionContent>
                </ProjectSection>
              </EarthSection>
              <EarthSection
                animations={['0:loop']}
                camera={[1.81, 0.51, 0.43]}
                meshes={['Atmosphere', 'EarthFull']}
                labels={[
                  'Pacific ring of fire',
                  'Ruapehu',
                  'St. Helens',
                  'Krakatoa',
                  'Parícutin',
                  'Kīlauea',
                ]}
              />
              <EarthSection
                animations={['0:loop']}
                camera={[0.37, 1.02, 1.84]}
                meshes={['EarthPartial', 'Chunk']}
                labels={['Mantle', 'Outer core', 'Inner core']}
              >
                <ProjectSection>
                  <ProjectSectionContent width="xl">
                    <ProjectTextRow justify="end" width="s">
                      <ProjectSectionHeading level={4} as="h3">
                        Friends
                      </ProjectSectionHeading>
                      <ProjectImage
              raised
              key={theme}
              srcSet={
                isDark
                  ? `${imageSprLessonBuilderDarkPlaceholder2} 1280w, ${imageSprLessonBuilderDarkPlaceholder2} 2560w`
                  : `${imageSprLessonBuilderDarkPlaceholder2} 1280w, ${imageSprLessonBuilderDarkPlaceholder2} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? imageSprLessonBuilderDarkPlaceholder2
                  : imageSprLessonBuilderDarkPlaceholder2
              }
              style={{ opacity: 0.7 }}

              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
            />  
                    </ProjectTextRow>
                  </ProjectSectionContent>
                </ProjectSection>
              </EarthSection>
              <EarthSection
                scrimReverse
                animations={['0:loop']}
                camera={[0.37, 1.02, 1.84]}
                meshes={['Atmosphere', 'EarthFull']}
              />
            </Earth>
          </Suspense>
        </ThemeProvider>    
        </ProjectContainer>

    
    <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details" /><Footer /></>

  );
};
