import { ClashRoyaleCard } from "@/app/api/clash-royale/route";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

export default function RoyaleDeck({ deck, towerTroop }: {
    deck: ClashRoyaleCard[];
    towerTroop: ClashRoyaleCard;
}) {
    const topRow = deck.slice(0, 4);
    const bottomRow = deck.slice(4);

    const averageElixirCost = Math.round((deck.reduce((acc, card) => acc + card.elixirCost, 0) / deck.length) * 10) / 10;

    return (
        <div className="relative">
            <TooltipProvider>
                <p className="text-sm font-semibold">Current Deck</p>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        {topRow.map((card, index) => (
                            <div key={`${card.id}`}>
                                <Tooltip>
                                    <TooltipTrigger className="relative">
                                        <Image src={card.iconUrls?.evolutionMedium ?? card.iconUrls?.medium} alt={card.name} width={50} height={50} />
                                        <Image src="/img/elixir-cost.png" alt={card.elixirCost.toString()} width={24} height={24} className="absolute top-0 -right-2" />
                                        <span className="absolute top-[2px] right-0 text-sm font-bold text-white">{card.elixirCost}</span>

                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{card.name}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center gap-2">
                        {bottomRow.map((card, index) => (
                            <div key={`${card.id}`}>
                                <Tooltip>
                                    <TooltipTrigger className="relative">
                                        <Image src={card.iconUrls?.evolutionMedium ?? card.iconUrls?.medium} alt={card.name} width={50} height={50} />
                                        <Image src="/img/elixir-cost.png" alt={card.elixirCost.toString()} width={24} height={24} className="absolute top-0 -right-2" />
                                        <span className="absolute top-[2px] right-0 text-sm font-bold text-white">{card.elixirCost}</span>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{card.name}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                        ))}
                        
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="">
                        <Tooltip>
                            <TooltipTrigger>
                                <Image src={towerTroop.iconUrls?.evolutionMedium ?? towerTroop.iconUrls?.medium} alt={towerTroop.name} width={30} height={30} />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{towerTroop.name}</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                    <Image src='/img/elixir-cost.png' alt='elixir-cost' width={24} height={24} />
                    <span className="text-sm font-semibold">{averageElixirCost} average elixir</span>
                </div>
            </TooltipProvider>
        </div>
    )
}