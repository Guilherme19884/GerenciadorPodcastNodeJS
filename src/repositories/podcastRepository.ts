import fs from "fs";
import path from "path";
import { PodcastModel } from "../models/pocastModels";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

// Verifique o valor de pathData
console.log("Path to podcasts.json:", pathData);

export const repositoryPodcast = async (podcastName?: string): Promise<PodcastModel[]> => {
    // Verifique se o arquivo existe antes de tentar lê-lo
    if (!fs.existsSync(pathData)) {
        console.error(`File not found: ${pathData}`);
        throw new Error(`File not found: ${pathData}`);
    }

    try {
        const rawdata = fs.readFileSync(pathData, "utf-8");
        let jsonFile = JSON.parse(rawdata);

        if (podcastName) {
            jsonFile = jsonFile.filter(
                (podcast: PodcastModel) => podcast.podcastName === podcastName
            );
        }
        return jsonFile;
    } catch (error) {
        console.error("Error reading or parsing file:", error);
        throw error;
    }
};
