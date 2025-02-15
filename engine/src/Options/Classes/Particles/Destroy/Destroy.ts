import { DestroyMode } from "../../../../Enums/Modes/DestroyMode";
import type { IDestroy } from "../../../Interfaces/Particles/Destroy/IDestroy";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import { Split } from "./Split";

export class Destroy implements IDestroy, IOptionLoader<IDestroy> {
    mode: DestroyMode | keyof typeof DestroyMode;
    split: Split;

    constructor() {
        this.mode = DestroyMode.none;
        this.split = new Split();
    }

    load(data?: RecursivePartial<IDestroy>): void {
        if (!data) {
            return;
        }

        if (data.mode !== undefined) {
            this.mode = data.mode;
        }

        this.split.load(data.split);
    }
}
