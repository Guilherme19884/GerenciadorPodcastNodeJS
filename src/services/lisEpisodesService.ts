import { repositoryPodcast } from "../repositories/podcastRepository"



export const serviceListEpisodes = async ()=> {
    const data = await repositoryPodcast()   
    
    return data
}