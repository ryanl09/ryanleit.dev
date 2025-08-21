'use client';

import { useState } from "react";
import { RiSpotifyFill } from "react-icons/ri";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Image from "next/image";
import MusicTab from "./hobbies-tabs/music-tab";
import RoyaleTab from "./hobbies-tabs/royale-tab";
import RivalsTab from "./hobbies-tabs/rivals-tab";

export default function HobbiesTabs() {
    const [activeTab, setActiveTab] = useState("music");

    return (
        <Tabs value={activeTab} onValueChange={setActiveTab} defaultValue="music">
            <TabsList>
                <TabsTrigger value="music">
                    <div className="flex items-center gap-2">
                        <RiSpotifyFill className="text-green-500" />
                        Music
                    </div>
                </TabsTrigger>
                <TabsTrigger value="clash-royale">
                    <div className="flex items-center gap-2">
                        <Image src="/img/clash-logo.png" alt="Clash Royale" width={20} height={20} />
                        Clash Royale
                    </div>
                </TabsTrigger>
                <TabsTrigger value="marvel-rivals">
                    <div className="flex items-center gap-2">
                        <Image src="/img/rivals-logo.webp" alt="Marvel Rivals" width={20} height={20} />
                        Marvel Rivals
                    </div>
                </TabsTrigger>
            </TabsList>

            <TabsContent value="music" className="mt-4">
                <MusicTab />
            </TabsContent>
            
            <TabsContent value="clash-royale" className="mt-4" forceMount>
                <RoyaleTab isActive={activeTab === "clash-royale"} />
            </TabsContent>

            <TabsContent value="marvel-rivals" className="mt-4" forceMount>
                <RivalsTab isActive={activeTab === "marvel-rivals"} />
            </TabsContent>
        </Tabs>
    )
}