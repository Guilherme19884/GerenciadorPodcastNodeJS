import { IncomingMessage, ServerResponse } from 'http';
import { serviceListEpisodes } from '../services/listEpisodesService';
import { serviceFilterEpisodes } from '../services/filterEpisodesService';

export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
    try {
        const content = await serviceListEpisodes();
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(content));
    } catch (error) {
        console.error("Error in getListEpisodes:", error);
        response.writeHead(500, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({ error: "Internal Server Error" }));
    }
};

export const getFilterEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
    try {
        const querystring = request.url?.split("?p=")[1] || ""
        const content = await serviceFilterEpisodes(querystring);
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(content));
    } catch (error) {
        console.error("Error in getFilterEpisodes:", error);
        response.writeHead(500, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({ error: "Internal Server Error" }));
    }
};
