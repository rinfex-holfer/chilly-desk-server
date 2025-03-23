export const GameType = {
    pickMe: "pickMe",
    pickMe2: "pickMe2",
    pickMe3: "pickMe3",
} as const;

export type GameTypeKey = keyof typeof GameType;