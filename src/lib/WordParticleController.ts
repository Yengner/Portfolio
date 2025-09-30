import type { Container, ISourceOptions } from "@tsparticles/engine";

export class WordParticleController {
    private c?: Container;
    constructor(private base: ISourceOptions) { }

    attach(container: Container) { this.c = container; }

    async scatter() {
        if (!this.c) return;
        await this.c.reset(this.base);
    }

    async gatherTo(url: string) {
        if (!this.c) return;
        await this.c.reset({
            ...this.base,
            polygon: {
                enable: true,
                type: "inline",
                inline: { arrangement: "equidistant" },
                move: { radius: 6 },
                scale: 1,
                url,
                draw: { enable: false },
            },
        });
    }

    async cycle(words: string[], scatterMs = 800, holdMs = 1800, signal?: AbortSignal) {
        if (!this.c) return;
        let i = 0;
        const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

        while (!signal?.aborted) {
            await this.scatter();
            await sleep(scatterMs);
            await this.gatherTo(words[i]);
            await sleep(holdMs);
            i = (i + 1) % words.length;
        }
    }
}
