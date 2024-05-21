import { IncomingMessage, ServerResponse } from 'http'


export const getListEpisodes  = async ( request: IncomingMessage, response: ServerResponse) =>{
    response.writeHead(200,{'Contet-Type': 'application/jose'})
    response.end(JSON.stringify({
        mensagem: "retornando mensagem",
    }))
}