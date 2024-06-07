import Head from "next/head";

import styles from "@/styles/Home.module.css";
import tagStyles from "@/styles/Tags.module.css";
import { useEffect, useRef, useState } from "react";
import useBlobity from "blobity/lib/react/useBlobity";

import { ComingSoonTag, DiscontinuedTag, GoTag, JavaTag, NextJsTag, PythonTag, ReactNativeTag, RustTag, TauriTag, TypeScriptTag, UnrealTag } from "@/components/tags";
import { DiscordLink, EmailLink, GithubLink, TwitterLink } from "@/components/social";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'


export const initiaBlobityOptions = {
    licenseKey: "opensource",
    color: "#b00b69",
    opacity: 0.6,
    zIndex: 50,
    dotSize: 8,
    dotColor: "#fff",
    focusableElementsOffsetX: 10,
    focusableElementsOffsetY: 10,
    magnetic: true,
    mode: "bouncy",
};

export default function Home() {
  const blobityInstance = useBlobity(initiaBlobityOptions as any);

  const [autoplay] = useState(Autoplay({
    delay: 1500,
    jump: false,
  }));

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    skipSnaps: true,
    dragFree: false,
    watchDrag: false
    
    
  }, [autoplay]);
  

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
      // start autoplay
      autoplay.play()
    }
  }, [emblaApi])


    useEffect(() => {
      if (blobityInstance.current) {
          // @ts-ignore for debugging purposes or playing around
          window.blobity = blobityInstance.current;
      }
  }, [blobityInstance]);

  const switchingColors = () => {
    const blobity = blobityInstance.current;

    blobity &&
        blobity.updateOptions({
            dotColor: "#000",
        });

};
const switchingColorsBack = () => {
    const blobity = blobityInstance.current;

    blobity &&
        blobity.updateOptions({
            color: initiaBlobityOptions.color,
            dotColor: initiaBlobityOptions.dotColor,
        });
};

  return (
    <>
      <Head>
        <title>luna</title>
        <meta name="description" content="catsonluna :3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container} style={{
              zIndex: 1000,
            }}>
          <div>
            <h1 data-blobity className={styles.title}>cats on luna</h1>
            <p data-blobity-magnetic={false} data-blobity className={styles.subtitle}>I make things <span className={styles.sometimes}>sometimes</span></p>
          </div>
        <div id="projects">
          <h1 className={styles.section_title}>Projects</h1>
          <div className={styles.cards}>
            <div className={styles.card} data-blobity={true} data-blobity-magnetic={false} onMouseEnter={() => switchingColors()} onMouseLeave={() => switchingColorsBack()}>
              <h1>Height Limit Mod <GithubLink link="https://github.com/HeightLimitMod"/></h1>
              <div className={styles.tags}>
                <JavaTag />
                <PythonTag />
              </div>
              <p>Height Limit Mod is a Minecraft Mod for Hypixel BedWars and SkyWars that shows the build limits for each map.</p>
              <p>The mod has been implemented by popular clients like Lunar Client</p>
            </div>
            <div className={styles.card} data-blobity={true} data-blobity-magnetic={false} onMouseEnter={() => switchingColors()} onMouseLeave={() => switchingColorsBack()} >
              <h1>Apex Utils</h1>
              <div className={styles.tags}>
                <RustTag />
                <TypeScriptTag />
                <TauriTag />
                <NextJsTag />
              </div>
              <p>Apex Utils is a private application commissioned by the head analyst of Cloud9’s Apex Legends Division.</p>
              <p>It was used throughout the international Playoffs event in Los Angeles to reach 6th place globally.</p>
            </div>
            <div className={styles.card} data-blobity={true} data-blobity-magnetic={false} onMouseEnter={() => switchingColors()} onMouseLeave={() => switchingColorsBack()}>
              <h1>Boopulu</h1>
              <div className={styles.tags}>
                <TypeScriptTag />
                <GoTag />
                <ReactNativeTag />
                <DiscontinuedTag />
              </div>
              <p>Boopulu was a mobile app for iPhone and Android with the main focus being a chat app with no send button, every character you wrote would be automatically sent to the other person
              </p>
            </div>
            <div className={styles.card} data-blobity={true} data-blobity-magnetic={false} onMouseEnter={() => switchingColors()} onMouseLeave={() => switchingColorsBack()}>
              <h1>???</h1>
              <div className={styles.tags}>
                <UnrealTag />
                <ComingSoonTag />
              </div>
              <p>weee woooooo woiiieeeeee
              </p>
            </div>
          </div>
        </div>
        <div id="technologies">
            <h1 className={styles.section_title}>Technologies</h1>
              <a href="https://wakatime.com/@65c2d7a3-d26a-4320-bdc8-8dc69f81b848" data-no-blobity 
              target="_blank" rel="noopener noreferrer"><img src="https://wakatime.com/badge/user/65c2d7a3-d26a-4320-bdc8-8dc69f81b848.svg" alt="Total time coded since May 2 2021" /></a>
            <div className={styles.embla} ref={emblaRef} data-blobity data-blobity-magnetic={false}>
            <div className={styles.embla__container}>
              <div className={`${styles.embla__slide} ${tagStyles.typescript}`}>TypeScript</div>
              <div className={`${styles.embla__slide} ${tagStyles.rust}`}>Rust</div>
              <div className={`${styles.embla__slide} ${tagStyles.go}`}>Go</div>
              <div className={`${styles.embla__slide} ${tagStyles.java}`}>Java</div>
              <div className={`${styles.embla__slide} ${tagStyles.python}`}>Python</div>
              <div className={`${styles.embla__slide} ${tagStyles.csharp}`}>C#</div>
              <div className={`${styles.embla__slide} ${tagStyles.cpp}`}>C++</div>
              <div className={`${styles.embla__slide} ${tagStyles.dart}`}>Dart</div>
              <div className={`${styles.embla__slide} ${tagStyles.php}`}>PHP</div>
              <div className={`${styles.embla__slide} ${tagStyles.tauri}`}>Tauri</div>
              <div className={`${styles.embla__slide} ${tagStyles.react}`}>React</div>
              <div className={`${styles.embla__slide} ${tagStyles.nextjs}`}>Next.js</div>
              <div className={`${styles.embla__slide} ${tagStyles.react}`}>React Native</div>
              <div className={`${styles.embla__slide} ${tagStyles.minecraft}`}>Minecraft Forge</div>
              <div className={`${styles.embla__slide} ${tagStyles.flutter}`}>Flutter</div>
              <div className={`${styles.embla__slide} ${tagStyles.minecraft}`}>Papermc/Spigot</div>
              <div className={`${styles.embla__slide} ${tagStyles.prisma}`}>PrismaDB</div>
              <div className={`${styles.embla__slide} ${tagStyles.sql}`}>SQL</div>
              <div className={`${styles.embla__slide} ${tagStyles.postgresql}`}>PostgreSQL</div>
              <div className={`${styles.embla__slide} ${tagStyles.mongodb}`}>MongoDB</div>
              <div className={`${styles.embla__slide} ${tagStyles.redis}`}>Redis</div>
              <div className={`${styles.embla__slide} ${tagStyles.unreal}`}>Unreal Engine</div>
          </div>
          </div>
          </div>
          <div id="contact">
            <h1 className={styles.section_title}>Contact</h1>
            <div className={styles.socials}>
              <EmailLink link="catsonluna@gmail.com" size={60}/>
              <GithubLink link="https://github.com/catsonluna" size={60} />
              <TwitterLink link="https://twitter.com/@catsonluna" size={60} />
              <DiscordLink link="https://discord.com/invite/Fykpshg" size={60}/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}