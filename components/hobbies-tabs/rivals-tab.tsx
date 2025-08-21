'use client';

import { MarvelRivalsResponse } from '@/app/api/rivals/route';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Badge } from '../ui/badge';
import { RivalsTabSkeleton } from './tab-skeletons';

interface RivalsTabProps {
  isActive: boolean;
}

export default function RivalsTab({ isActive }: RivalsTabProps) {
  const [data, setData] = useState<MarvelRivalsResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isActive && !data && !loading) {
      fetchMarvelRivalsData();
    }
  }, [isActive]);

  const fetchMarvelRivalsData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`/api/rivals?uid=819871035`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`);
      }
      
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load Marvel Rivals data');
      console.error('Error fetching Marvel Rivals data:', err);
    } finally {
      setLoading(false);
    }
  };

  if (!isActive) {
    return null;
  }

  return (
    <div>
      {loading && <RivalsTabSkeleton />}
      {error && <p>Error: {error}</p>}
      {data && (
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 sm:col-span-6 md:col-span-4">
            <div className="flex items-center gap-2">
              <Image src={'https://marvelrivalsapi.com/rivals' + data.player.icon.player_icon} alt={data.player.name} width={100} height={100}
                className="border-2 rounded-full"
              />
              <div>
                <div className='flex items-center gap-2'>
                  <p className="font-semibold">{data.player.name}</p>
                  <Badge variant="default" className='text-xs'>Level {data.player.level}</Badge>
                </div>
                <span className="font-semibold text-sm">
                    Current rank
                    <span className="flex items-center gap-2">
                        <Image src={'/img' + data.player.rank.icon} alt={data.player.rank.rank} width={30} height={30} />
                        <span className="font-normal">{data.player.rank.rank}</span>
                    </span>
                </span>
                <span className="font-semibold text-sm">
                    Peak rank
                    <span className="flex items-center gap-2">
                        <Image src={'/img' + data.player.rank.peak_rank.icon} alt={data.player.rank.peak_rank.rank} width={30} height={30} />
                        <span className="font-normal">{data.player.rank.peak_rank.rank}</span>
                    </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
