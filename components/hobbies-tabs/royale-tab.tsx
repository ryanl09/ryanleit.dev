'use client';

import { ClashRoyaleResponse } from '@/app/api/clash-royale/route';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import RoyaleDeck from '../royale-deck';
import { IoIosTrendingDown, IoIosTrendingUp } from 'react-icons/io';
import { Badge } from '../ui/badge';
import { FaMedal } from 'react-icons/fa';
import { RoyaleTabSkeleton } from './tab-skeletons';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

interface RoyaleTabProps {
  isActive: boolean;
}

export default function RoyaleTab({ isActive }: RoyaleTabProps) {
  const [data, setData] = useState<ClashRoyaleResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [playerTag, setPlayerTag] = useState<string>('89GV9LV0');

  useEffect(() => {
    if (isActive && !data && !loading) {
      fetchClashRoyaleData();
    }
  }, [isActive]);

  const fetchClashRoyaleData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`/api/clash-royale?tag=${playerTag}`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`);
      }
      
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load Clash Royale data');
      console.error('Error fetching Clash Royale data:', err);
    } finally {
      setLoading(false);
    }
  };

  if (!isActive) {
    return null;
  }

  return (
    <div>
      {loading && <RoyaleTabSkeleton />}
      {error && <p>Error: {error}</p>}
      {(data && !loading) && (
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 sm:col-span-6 md:col-span-4">
            <div className="flex items-center gap-2">
              <div style={{
                background: `url(${data.currentFavouriteCard.iconUrls?.evolutionMedium ?? data.currentFavouriteCard.iconUrls.medium}) no-repeat center center`,
                backgroundSize: 'cover',
                width: '100px',
                height: '148px'
              }} />
              <div>
                <div className='flex items-center gap-2'>
                  <span className="font-semibold">{data.name}</span>
                  <Badge variant="default" className='text-xs'>{!data.battleCount ? '0' : ((data.wins / data.battleCount) * 100).toFixed(2)}% win rate</Badge>
                </div>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">{data.wins} wins</span>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">{data.losses} losses</span>
                <div className="mt-2">
                  <p className="text-sm font-semibold">Best Season</p>
                  <div className="flex items-center gap-2">
                    <FaMedal className="text-purple-500" />
                    <span className="text-sm text-muted-foreground">{data.bestPathOfLegendSeasonResult.trophies}</span>
                    {data.bestPathOfLegendSeasonResult.rank && (
                      <Badge variant="default" className='text-xs'>#{data.bestPathOfLegendSeasonResult.rank}</Badge>
                    )}
                  </div>
                </div>
              </div>


            </div>
            <div className="mt-2 space-y-2">
              <p className="text-sm font-semibold">Search your own profile</p>
              <div className="flex items-center gap-2">
                <span>#</span>
                <Input
                  type="text"
                  placeholder="Enter your player tag"
                  value={playerTag} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPlayerTag(e.target.value)}
                  className="max-w-[300px]" />
              </div>
              <Button variant="outline" onClick={fetchClashRoyaleData}>Search</Button>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4">
            <p className="text-sm font-semibold">Current Stats</p>
            <div className="flex items-center gap-2">
              🏆
              <span className="text-sm text-muted-foreground">{data.trophies}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMedal className="text-purple-500" />
              <span className="text-sm text-muted-foreground">{data.currentPathOfLegendSeasonResult.trophies}</span>
              {data.currentPathOfLegendSeasonResult.rank && (
                <Badge variant="default" className='text-xs'>#{data.currentPathOfLegendSeasonResult.rank}</Badge>
              )}
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4">
            <RoyaleDeck deck={data.currentDeck} towerTroop={data.currentDeckSupportCards[0]} />
          </div>
        </div>
      )}
    </div>
  );
}