import { Rye, Fredoka } from "next/font/google";

const medievalSharp = Rye({ subsets: ['latin'], weight: ['400'] });

const SectionClash = () => {
    return (
        <div className={`drop-shadow-md relative rounded-xl`} style={{
            background: 'linear-gradient(to bottom, #ffffff24 0%, #000000b2 100%), url(/img/bg-blue.png)',
            height: 'clamp(180px, 20vw, 200px)',
            transition: '.04s height ease',
            backgroundSize: '100% 100%'
        }}>
            <div className="p-4 text-music-primary">
                <p className={`text-[34px] font-normal drop-shadow-md ${medievalSharp.className}`}>Clash Royale</p>
                <p className="text-sm text-music-primary/70">Font test</p>
            </div>
        </div>
    )
}

export default SectionClash;