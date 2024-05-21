import * as http from'http'

import { getListEpisodes } from './controllers/podcastsController'

const server = http.createServer(
   async (request: http.IncomingMessage, response: http.ServerResponse ) => {
        
        if(request.method === 'GET'){
           await getListEpisodes(request, response)
        }
    }
)

const port = process.env.PORT

server.listen(process.env.PORT, ()=> {
    console.log(`servidor iniciado na porta: ${port}, http://localhost:${port}`)
})