import Link from 'next/link';
import { BiLinkExternal } from 'react-icons/bi';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ["latin"], weight: ['300', '400', '900'] });
const SectionChess = () => {
    return (
        <div className={`grid grid-cols-12 gap-2 h-[200px] bg-chess-secondary ${roboto.className}`} style={{
            background: 'radial-gradient(circle at 40% 5%, rgb(104, 135, 91) 5%, rgb(91 117 73) 45%, rgb(71 97 53) 100%)'
        }}>
            <div className="col-span-8 p-6 text-chess-primary">
                <p className="text-[54px] font-bold drop-shadow-sm">Chess</p>
                <Link rel='noopener noreferrer' target='_blank' href='https://chess.com/tecryan' className='flex items-center gap-2'>
                    Click here to view my profile
                    <BiLinkExternal />
                </Link>
            </div>
            <div className="col-span-4">
                <div className="h-[440px] w-[440px]" style={{
                    background: 'url(/img/chess.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '250% 20%',
                }}></div>
            </div>
        </div>
    )
}

export default SectionChess;