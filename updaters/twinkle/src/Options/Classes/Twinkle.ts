import type { IOptionLoader, RecursivePartial } from "tsparticles-engine";
import type { ITwinkle } from "../Interfaces/ITwinkle";
import { TwinkleValues } from "./TwinkleValues";

/**
 * [[include:Options/Particles/Twinkle.md]]
 * @category Options
 */
export class Twinkle implements ITwinkle, IOptionLoader<ITwinkle> {
    lines;
    particles;

    constructor() {
        this.lines = new TwinkleValues();
        this.particles = new TwinkleValues();
    }

    load(data?: RecursivePartial<ITwinkle>): void {
        if (!data) {
            return;
        }

        this.lines.load(data.lines);
        this.particles.load(data.particles);
    }
}
