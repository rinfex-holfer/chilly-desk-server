import type { GameTypeKey } from "./games";

export type Desk = {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    games: GameTypeKey[];
}
