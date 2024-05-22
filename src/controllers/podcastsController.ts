import { IncomingMessage, ServerResponse } from 'http'

import { serviceListEpisodes } from '../services/lisEpisodesService'


export const getListEpisodes  = async ( request: IncomingMessage, response: ServerResponse) =>{

    const content = serviceListEpisodes()

    response.writeHead(200,{'Contet-Type': 'application/jose'})
    response.end(JSON.stringify({content}))
}