import { NextRequest, NextResponse } from "next/server";

export type MarvelRivalsResponse = {
    uid: number;
    name: string;

    player: RivalsPlayer;
    updates: {
        info_update_time: string;
    }
}

type RivalsPlayer = {
    uid: number;
    level: string;
    name: string;
    icon: {
        player_icon: string;
        banner: string;
    }

    rank: RivalsRank & {
        peak_rank: RivalsRank;
    }

}

type RivalsRank = {
    rank: string;
    score: string;
    unit: string;
    icon: string;
    color: string;
}

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const uid = searchParams.get('uid');

    if (!uid) {
        return NextResponse.json({ error: 'UID is required' }, { status: 400 });
    }

    const headers = new Headers();
    headers.set('x-api-key', process.env.RIVALS_API_KEY!);

    const response = await fetch(`https://marvelrivalsapi.com/api/v2/player/819871035`, { headers });

    const data = await response.json() as MarvelRivalsResponse;

    return NextResponse.json(data);
    
}