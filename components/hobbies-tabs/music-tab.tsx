import { SiSpotify } from "react-icons/si";

export default function MusicTab() {
    return (
        <div className="grid grid-cols-12 gap-4">

            <div className="col-span-12 flex items-center gap-2">
                <h1 className="text-md font-semibold">RYVN Popular Songs</h1>
            </div>

            <div className="col-span-12 sm:col-span-6 md:col-span-4">
                <iframe data-testid="embed-iframe" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/3NgxErbRJX5Bnw1wtLrgw7?utm_source=generator" width="100%" height="152" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-4">
                <iframe data-testid="embed-iframe" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/6CtP1XWSOOvqTLYMiUshoO?utm_source=generator" width="100%" height="152" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-4">
                <iframe data-testid="embed-iframe" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/61P1CJS0gJdD8ALSyUJrU1?utm_source=generator" width="100%" height="152" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>

            <div className="col-span-12 flex items-center gap-2">
                <h1 className="text-md font-semibold">2GU Popular Remixes</h1>
            </div>

            <div className="col-span-12 sm:col-span-6 md:col-span-4">
                <iframe width="100%" height="166" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2105629578&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-4">
                <iframe width="100%" height="166" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2076571528&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-4">
                <iframe width="100%" height="166" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2098887120&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
            </div>

        </div>
    )
}