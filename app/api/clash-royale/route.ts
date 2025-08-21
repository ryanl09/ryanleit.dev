import { NextResponse } from "next/server";

export type ClashRoyaleResponse = {
    tag: string;
    name: string;
    trophies: number;
    wins: number;
    losses: number;
    battleCount: number;
    threeCrownWins: number;

    currentDeck: ClashRoyaleCard[];
    currentFavouriteCard: ClashRoyaleCard;
    currentDeckSupportCards: ClashRoyaleCard[];

    currentPathOfLegendSeasonResult: POLResult;
    bestPathOfLegendSeasonResult: POLResult;
}

export type ClashRoyaleCard = {
    name: string;
    id: number;
    level: number;
    elixirCost: number;
    starLevel: number;
    evolutionLevel?: number;
    maxEvolutionLevel?: number;
    rarity: string;
    iconUrls: {
        medium: string;
        evolutionMedium?: string;
    }
}

type POLResult = {
    leagueNumber: number;
    trophies: number;
    rank?: number|null;
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const tag = searchParams.get('tag') ?? '89GV9LV0';

    try {
        const response = await fetch(`https://proxy.royaleapi.dev/v1/players/%23${tag}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.ROYALE_API_KEY}`
            }
        });
    
        const data = await response.json() as ClashRoyaleResponse;

        return NextResponse.json(data);


    } catch (e) {
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }

}
