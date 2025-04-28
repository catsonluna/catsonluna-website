import Head from "next/head";

import styles from "@/styles/Home.module.css";
import tagStyles from "@/styles/Tags.module.css";
import { useEffect, useRef, useState } from "react";
import useBlobity from "blobity/lib/react/useBlobity";

import {
  CurrentTeamTag,
  DiscontinuedTag,
  GoTag,
  JavaTag,
  NextJsTag,
  PythonTag,
  QwikTag,
  ReactNativeTag,
  RustTag,
  TauriTag,
  TypeScriptTag,
  UnrealTag,
} from "@/components/tags";
import {
  ApexUtilsIcon,
  Cloud9Link,
  DiscordLink,
  EmailLink,
  GithubLink,
  LiquipediaLink,
  StatusQuoLink,
  TemprLink,
  TwitterLink,
} from "@/components/social";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

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

  const [autoplay] = useState(
    Autoplay({
      delay: 1500,
      jump: false,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      skipSnaps: true,
      dragFree: false,
      watchDrag: false,
    },
    [autoplay]
  );

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
      // start autoplay
      autoplay.play();
    }
  }, [emblaApi]);

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
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="author" content="catsonluna" />
        <meta property="og:title" content="catsonluna" />
        <meta
          property="og:description"
          content="there might be cats on the moon"
        />
        <meta property="og:image" content="/icon.png" />
        <meta property="og:url" content="https://catsonluna.com" />
      </Head>

      <main className={styles.main}>
        <div
          className={styles.container}
          style={{
            zIndex: 1000,
          }}
        >
          <div>
            <h1 data-blobity className={styles.title}>
              cats on the moon
            </h1>
            <p
              data-blobity-magnetic={false}
              data-blobity
              className={styles.subtitle}
            >
              I make things <span className={styles.sometimes}>sometimes</span>
            </p>
            <p
              data-blobity-magnetic={false}
              data-blobity
              className={styles.subtitle}
            >
              Software Developer | Apex Legends Analyst | {age()}
            </p>
          </div>
          <div id="projects">
            <h1
              className={styles.section_title}
              onClick={() => {
                const url = new URL(window.location.href);
                url.hash = "projects";
                window.history.pushState({}, "", url);
                const projectsSection = document.getElementById("projects");
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Projects
            </h1>
            <div className={styles.cards}>
              <div
                className={styles.card}
                data-blobity={true}
                data-blobity-magnetic={false}
                onMouseEnter={() => switchingColors()}
                onMouseLeave={() => switchingColorsBack()}
              >
                <h1>
                  Height Limit Mod{" "}
                  <GithubLink link="https://github.com/HeightLimitMod" />
                </h1>
                <div className={styles.tags}>
                  <JavaTag />
                  <PythonTag />
                </div>
                <p>
                  Height Limit Mod is a Minecraft Mod for Hypixel BedWars and
                  SkyWars that shows the build limits for each map.
                </p>
                <p>
                  The mod has been implemented by popular clients like Lunar
                  Client
                </p>
              </div>
              <div
                className={styles.card}
                data-blobity={true}
                data-blobity-magnetic={false}
                onMouseEnter={() => switchingColors()}
                onMouseLeave={() => switchingColorsBack()}
              >
                <h1>Apex Utils</h1>
                <div className={styles.tags}>
                  <RustTag />
                  <TypeScriptTag />
                  <TauriTag />
                  <NextJsTag />
                  <QwikTag />
                </div>
                <p>
                  Apex Utils is a private, team-only dasktop application,
                  containing powerful, resource extensive, tools made by me.
                </p>
                <p>
                  Originally, Apex Utils was a private application commissioned
                  by the head coach of Cloud9’s Apex Legends Division.
                </p>
              </div>
              <div
                className={styles.card}
                data-blobity={true}
                data-blobity-magnetic={false}
                onMouseEnter={() => switchingColors()}
                onMouseLeave={() => switchingColorsBack()}
              >
                <h1>
                  Apex Utils Pro
                  <ApexUtilsIcon link="https://apex-utils-pro.catsonluna.com" />
                </h1>
                <div className={styles.tags}>
                  <RustTag />
                  <TypeScriptTag />
                  <QwikTag />
                </div>
                <p>
                  Apex Utils Pro is a web application, with a mix of paid,
                  and team only tools.
                </p>
              </div>
              <div
                className={styles.card}
                data-blobity={true}
                data-blobity-magnetic={false}
                onMouseEnter={() => switchingColors()}
                onMouseLeave={() => switchingColorsBack()}
              >
                <h1>
                  Apex Utils Web
                  <ApexUtilsIcon link="https://apex-utils.catsonluna.com" />
                </h1>
                <div className={styles.tags}>
                  <RustTag />
                  <TypeScriptTag />
                  <QwikTag />
                </div>
                <p>
                  Apex Utils Web is a web application, with free to use tools.
                </p>
              </div>
              <div
                className={styles.card}
                data-blobity={true}
                data-blobity-magnetic={false}
                onMouseEnter={() => switchingColors()}
                onMouseLeave={() => switchingColorsBack()}
              >
                <h1>Boopulu</h1>
                <div className={styles.tags}>
                  <TypeScriptTag />
                  <GoTag />
                  <ReactNativeTag />
                  <DiscontinuedTag />
                </div>
                <p>
                  Boopulu was a mobile app for iPhone and Android with the main
                  focus being a chat app with no send button, every character
                  you wrote would be automatically sent to the other person
                </p>
              </div>
            </div>
          </div>
          <div id="technologies">
            <h1
              className={styles.section_title}
              onClick={() => {
                const url = new URL(window.location.href);
                url.hash = "technologies";
                window.history.pushState({}, "", url);
                const section = document.getElementById("technologies");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Technologies
            </h1>
            <a
              href="https://wakatime.com/@65c2d7a3-d26a-4320-bdc8-8dc69f81b848"
              data-no-blobity
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://wakatime.com/badge/user/65c2d7a3-d26a-4320-bdc8-8dc69f81b848.svg"
                alt="Total time coded since May 2 2021"
              />
            </a>
            <div
              className={styles.embla}
              ref={emblaRef}
              data-blobity
              data-blobity-magnetic={false}
            >
              <div className={styles.embla__container}>
                <div
                  className={`${styles.embla__slide} ${tagStyles.typescript}`}
                >
                  TypeScript
                </div>
                <div className={`${styles.embla__slide} ${tagStyles.rust}`}>
                  Rust
                </div>
                <div className={`${styles.embla__slide} ${tagStyles.go}`}>
                  Go
                </div>
                <div className={`${styles.embla__slide} ${tagStyles.java}`}>
                  Java
                </div>
                <div className={`${styles.embla__slide} ${tagStyles.python}`}>
                  Python
                </div>
                <div className={`${styles.embla__slide} ${tagStyles.csharp}`}>
                  C#
                </div>
                <div className={`${styles.embla__slide} ${tagStyles.cpp}`}>
                  C++
                </div>
                <div className={`${styles.embla__slide} ${tagStyles.dart}`}>
                  Dart
                </div>
                <div className={`${styles.embla__slide} ${tagStyles.php}`}>
                  PHP
                </div>
                <div className={`${styles.embla__slide} ${tagStyles.tauri}`}>
                  Tauri
                </div>
                <div className={`${styles.embla__slide} ${tagStyles.react}`}>
                  React
                </div>
                <div className={`${styles.embla__slide} ${tagStyles.nextjs}`}>
                  Next.js
                </div>
                <div className={`${styles.embla__slide} ${tagStyles.react}`}>
                  React Native
                </div>
                <div
                  className={`${styles.embla__slide} ${tagStyles.minecraft}`}
                >
                  Minecraft Forge
                </div>
                <div className={`${styles.embla__slide} ${tagStyles.flutter}`}>
                  Flutter
                </div>
                <div
                  className={`${styles.embla__slide} ${tagStyles.minecraft}`}
                >
                  Papermc/Spigot
                </div>
                <div className={`${styles.embla__slide} ${tagStyles.prisma}`}>
                  PrismaDB
                </div>
                <div className={`${styles.embla__slide} ${tagStyles.sql}`}>
                  SQL
                </div>
                <div
                  className={`${styles.embla__slide} ${tagStyles.postgresql}`}
                >
                  PostgreSQL
                </div>
                <div className={`${styles.embla__slide} ${tagStyles.mongodb}`}>
                  MongoDB
                </div>
                <div className={`${styles.embla__slide} ${tagStyles.redis}`}>
                  Redis
                </div>
                <div className={`${styles.embla__slide} ${tagStyles.unreal}`}>
                  Unreal Engine
                </div>
              </div>
            </div>
          </div>
          <div id="apex-teams">
            <h1
              className={styles.section_title}
              onClick={() => {
                const url = new URL(window.location.href);
                url.hash = "apex-teams";
                window.history.pushState({}, "", url);
                const section = document.getElementById("apex-teams");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Apex Teams
            </h1>
            <div className={styles.team__cards}>
              <div
                className={styles.card}
                data-blobity={true}
                data-blobity-magnetic={false}
                onMouseEnter={() => switchingColors()}
                onMouseLeave={() => switchingColorsBack()}
              >
                <h1>
                  Cloud9 <Cloud9Link link="https://www.cloud9.gg/" />
                </h1>
                <p>
                  Worked with Cloud9 throught ALGS Year 4, creating analytical
                  software, placing 6th split 1 lan, 17th split 2 lan, and 26th
                  in the Championship
                </p>
              </div>
              <div
                className={styles.card}
                data-blobity={true}
                data-blobity-magnetic={false}
                onMouseEnter={() => switchingColors()}
                onMouseLeave={() => switchingColorsBack()}
              >
                <h1>
                  Tempr <TemprLink link="https://linktr.ee/temprgg" />{" "}
                </h1>
                <div className={styles.tags}>
                  <CurrentTeamTag />
                </div>
                <p>
                  Currently working with Tempr, going to the ALGS Open Lan in
                  New Orleans.
                </p>
              </div>
              <div
                className={styles.card}
                data-blobity={true}
                data-blobity-magnetic={false}
                onMouseEnter={() => switchingColors()}
                onMouseLeave={() => switchingColorsBack()}
              >
                <h1>
                  Status Quo <StatusQuoLink link="https://statusquo.gg/" />
                </h1>
                <p>
                  Worked with Status Quo during ALGS Year 5 PSQ's, achiving 8th in week 1 finals
                </p>
              </div>
            </div>
          </div>
          <div id="socials">
            <h1
              className={styles.section_title}
              onClick={() => {
                const url = new URL(window.location.href);
                url.hash = "socials";
                window.history.pushState({}, "", url);
                const section = document.getElementById("socials");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Socials
            </h1>
            <div className={styles.socials}>
              <GithubLink link="https://github.com/catsonluna" size={60} />
              <LiquipediaLink
                link="https://liquipedia.net/apexlegends/Catsonluna"
                size={60}
              />
              <DiscordLink
                link="https://discord.com/invite/Fykpshg"
                size={60}
              />
              <EmailLink link="catsonluna@gmail.com" size={60} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

function age(): number {
  const birthday = new Date("2005-02-20");
  const today = new Date();
  let age = today.getFullYear() - birthday.getFullYear();
  const m = today.getMonth() - birthday.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }
  return age;
}
