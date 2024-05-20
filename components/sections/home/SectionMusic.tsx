import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '700', '800', '900']});

const SectionMusic = () => {
    return (
        <div className={`grid grid-cols-12 gap-2 h-[200px] bg-black ${poppins.className}`} style={{
            background: 'radial-gradient(circle at 30% 5%, rgb(82 60 130) 40%, rgb(115 79 201) 95%)'
        }}>
            <div className="col-span-8 p-6 text-music-primary">
                <p className="text-[36px] font-medium drop-shadow-sm">Electronic Music</p>
                <p className="font-normal text-dg-500">Producer & DJ</p>
            </div>
            <div className="col-span-4">
                <div className="h-[440px] w-[440px]" style={{
                    background: 'url()',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '250% 20%',
                }}></div>
            </div>
        </div>
    )
}

export default SectionMusic;