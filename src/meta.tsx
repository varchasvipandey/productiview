export interface ChangeLogItem {
  title: string;
  description?: string;
}

export interface MetaData {
  name: string;
  version: string;
  releaseDate: string;
  changeLog: ChangeLogItem[];
  updateNotes: string;
}

export const metaData: MetaData = {
  name: "Productiview",
  version: "1.1.0",
  releaseDate: "2022-04-17",
  changeLog: [
    {
      title: "Inspirational quotes",
      description:
        "Get inspired and motivated to work hard and achieve your goals. A new quote for you every hour.",
    },
  ],
  updateNotes:
    "Quote widget available under the 'Widget Options' in the settings menu.",
};
