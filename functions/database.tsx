
import { IUser, IScores, IFullUser } from "bleader";

const baseUrl = "https://api.beatleader.xyz";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function GetFullPlayerData(id: string) {
    
    const user = await GetPlayerData(id);
    const scores = await GetPlayerScores(id, "pp");

    return {
        ...user,
        scores
    } as IFullUser;
}

export async function GetPlayerData(id: string) {

    const res = await fetch(`${baseUrl}/player/${id}`);
    const data = await res.json();

    return data as IUser;
}

export async function GetPlayerScores(id: string, sort="date") {
    const res = await fetch(`${baseUrl}/player/${id}/scores?sortBy=${sort} `);
    const data = await res.json();

    return data as IScores;
}