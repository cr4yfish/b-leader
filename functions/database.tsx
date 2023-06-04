
import { IUser, IScores, IFullUser } from "bleader";

const proxy = "https://api.allorigins.win/get?url=";
const baseUrl = "https://api.beatleader.xyz";

export async function GetFullPlayerData(id: string) {
    
    const user = await GetPlayerData(id);
    const scores = await GetPlayerScores(id, "pp");

    return {
        ...user,
        scores
    } as IFullUser;
}

export async function GetPlayerData(id: string) {

    let res = await fetch(`${proxy}${encodeURIComponent(baseUrl)}/player/${id}`);
    const json = await res.json();
    const data = JSON.parse(json.contents);

    return data as IUser;
}

export async function GetPlayerScores(id: string, sort="date") {
    const res = await fetch(`${proxy}${encodeURIComponent(baseUrl)}/player/${id}/scores?sortBy=${sort} `);
    const json = await res.json();
    const data = JSON.parse(json.contents);

    return data as IScores;
}