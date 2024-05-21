import Link from 'next/link';
import { BiLinkExternal } from 'react-icons/bi';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ["latin"], weight: ['300', '400', '900'] });
const SectionChess = () => {
    return (
        <div className={`bg-chess-secondary drop-shadow-md relative ${roboto.className}`} style={{
            background: 'radial-gradient(circle at 40% 5%, rgb(104, 135, 91) 5%, rgb(91 117 73) 45%, rgb(71 97 53) 100%)',
            height: 'clamp(180px, 20vw, 200px)',
            transition: '.04s height ease',
        }}>
            <div className="p-4 text-chess-primary z-[2] relative">
                <p className="text-[54px] font-bold drop-shadow-sm">Chess</p>
                <Link rel='noopener noreferrer' target='_blank' href='https://chess.com/tecryan' className='flex items-center gap-2 underline
                    text-chess-primary/70'>
                    My profile
                    <BiLinkExternal />
                </Link>
            </div>
            <div className="absolute right-[-200px] top-[20px] z-[1]">
                <div className="h-[440px] w-[440px] bg-no-repeat" style={{
                    background: 'url(/img/chess.png)',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                }}></div>
            </div>
        </div>
    )
}

export default SectionChess;