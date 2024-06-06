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
