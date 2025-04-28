import { useState } from "react";

export function GithubLink({ link, size = 30 }: { link: string, size?: number}) {
    return (
        <a data-no-blobity href={link} target="_blank">
            <img src="/github.svg" alt="github" width={size} height={size} />
        </a>
    );
}

export function TwitterLink({ link, size = 30 }: { link: string, size?: number}) {
    return (
        <a data-no-blobity href={link} target="_blank">
            <img src="/twitter.svg" alt="twitter" width={size} height={size} />
        </a>
    );
}

export function DiscordLink({ link, size = 30 }: { link: string, size?: number}) {
    return (
        <a data-no-blobity href={link} target="_blank">
            <img src="/discord.svg" alt="discord" width={size} height={size} />
        </a>
    );
}

export function EmailLink({ link, size = 30 }: { link: string, size?: number}) {
    return (
        <a data-no-blobity data-blobity-tooltip={"click to copy"} onClick={() => {
            navigator.clipboard.writeText(link);
        }}>
            <img src="/email.svg" alt="email" width={size} height={size} />
        </a>
    );
}

export function ApexUtilsLink({ link, size = 30 }: { link: string, size?: number}) {
    return (
        <a data-no-blobity href={link} target="_blank">
            <img src="/apexutils.png" alt="apexutils" width={size} height={size} />
        </a>
    );
}

export function LiquipediaLink({ link, size = 30 }: { link: string, size?: number}) {
    return (
        <a data-no-blobity href={link} target="_blank">
            <img src="/liquipedia.png" alt="liquipedia" width={size} height={size} />
        </a>
    );
}

export function Cloud9Link({ link, size = 30 }: { link: string, size?: number}) {
    return (
        <a data-no-blobity href={link} target="_blank">
            <img src="/cloud9.svg" alt="cloud9" width={size} height={size} />
        </a>
    );
}

export function TemprLink({ link, size = 30 }: { link: string, size?: number}) {
    return (
        <a data-no-blobity href={link} target="_blank">
            <img src="/tempr-b.png" alt="tempr" width={size} height={size} />
        </a>
    );
}

export function ApexUtilsIcon({ link, size = 30 }: { link: string, size?: number}) {
    return (
        <a data-no-blobity href={link} target="_blank">
            <img src="/apex-utils-icon.png" alt="apexutils" width={size} height={size} />
        </a>
    );
}