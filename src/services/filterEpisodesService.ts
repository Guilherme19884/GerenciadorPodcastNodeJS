import { repositoryPodcast } from "../repositories/podcastRepository"


export const serviceFilterEpisodes = async (podCastName: string ) => {
    const data = await repositoryPodcast(podCastName)

    return data
}