import * as http from'http'

import { getFilterEpisodes, getListEpisodes } from './controllers/podcastsController'

const server = http.createServer(
   async (request: http.IncomingMessage, response: http.ServerResponse ) => {

        //querystring
        const [baseUrl, querystring] =  request.url?.split("?") ?? ["",""]


        //Listar Podcasts    
        if(request.method === "GET" && baseUrl ==="/api/list"){
           await getListEpisodes(request, response)
        }
        //Listar por nome
        if(request.method === "GET" && baseUrl === "/api/episode"){
            await getFilterEpisodes(request, response)
        }
    }
)

const port = process.env.PORT

server.listen(process.env.PORT, ()=> {
    console.log(`servidor iniciado na porta: ${port}, http://localhost:${port}`)
})