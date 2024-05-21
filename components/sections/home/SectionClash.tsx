import { Almendra, MedievalSharp } from "next/font/google";

const medievalSharp = Almendra({ subsets: ['latin'], weight: ['400'] });

const SectionClash = () => {
    return (
        <div className={`bg-chess-secondary drop-shadow-md relative`} style={{
            background: 'radial-gradient(circle at 40% 5%, rgb(50, 28, 45) 5%, rgb(21, 4, 24) 45%, rgb(61, 17, 23) 100%)',
            height: 'clamp(180px, 20vw, 200px)',
            transition: '.04s height ease'
        }}>
            <div className="p-4 text-music-primary">
                <p className={`text-[54px] font-semibold drop-shadow-sm ${medievalSharp.className}`}>Testing</p>
                <p className="text-sm text-music-primary/70">Font test</p>
            </div>
        </div>
    )
}

export default SectionClash;