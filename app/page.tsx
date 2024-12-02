'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import NetflixAvatar from '@/lib/assets/Netflix-avatar.png'
import Logo from '@/lib/assets/NIKAH FIX.webp'
import HijirPoster from '@/lib/assets/nikahan ijir/Foto/famourapict-287.jpg'
import Title from '@/lib/assets/title.svg'
import DescriptionTitle from '@/lib/assets/family romantis get merried.png'
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import PlaySVG from '@/lib/assets/play-47.svg'
import NetflixLogo from '@/lib/assets/Netflix_Symbol_RGB.png'
import MainUndangan from "@/components/undangan/main";

export default function Home() {
  const [phase, setPhase] = useState<number>(1)
  const [bgClass, setBgClass] = useState<string>('bg-black')

  useEffect(() => {
    if(phase === 2) setBgClass('bg-gradient-to-t from-black/80 to-[#cda49f]')
    if(phase === 1 || phase === 3) setBgClass('bg-black')
  }, [phase])
  

  return (
    <main className={`min-h-screen w-full text-white ${bgClass}`}>
      { phase === 1 && 
        <div className="flex flex-col gap-8 py-10 items-center">
          <Image 
            src={Logo} 
            alt="Logo" 
            height={34} 
            width={125} 
            className="hover:cursor-pointer py-10"
          />
          <p>{`Who's Watching?`}</p>
          <div className="transition-transform duration-200 ease-in-out transform hover:scale-125 flex flex-col items-center gap-1">
            <Image 
              src={NetflixAvatar} 
              alt="Netflix Default Avatar" 
              height={100} 
              width={100} 
              className="hover:cursor-pointer rounded-md"
              onClick={() => setPhase(2)}
            />
            <label>Guest</label>
          </div>
        </div>
      }
      { phase === 2 &&
          <div className="flex flex-col items-center px-2">
            <div className="max-w-[400px] flex justify-between w-full py-2">
              <p className="text-2xl font-bold font-poppins">Undangan Pernikahan</p>

            </div>
            <div className="flex gap-2 pb-2 max-w-[400px] w-full">
              <div className="rounded-full px-3 py-1 border-2 border-white flex items-center justify-center">
                  <p>Akad Nikah</p>
              </div>
              <div className="rounded-full px-3 py-1 border-2 border-white flex items-center justify-center">
                  <p>Happy</p>
              </div>
              <div className="rounded-full px-3 py-1 border-2 border-white flex items-center justify-center">
                  <p>Agenda</p>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-lg items-center w-full h-full">
              <Image 
                src={HijirPoster} 
                alt="Poster Hijir dan Acha" 
                height={400} 
                width={400} 
                className="z-10 rounded-lg"
              />
              <div className="z-20 bg-gradient-to-t from-black to-transparent pointer-events-none w-[400px] h-[300px] -mt-[300px] rounded-b-lg"></div>
            </div>
              <div className="flex flex-col items-center z-20 w-full h-full -mt-[200px]">
                <div className="flex -mb-[3.5rem] items-center">
                  <Image 
                    src={NetflixLogo} 
                    alt="Netflix logo"
                    height={30} 
                    width={30} 
                    className="z-20"
                  />
                  <p className="text-sm font-poppins">S E R I A L</p>
                </div>
                <Image 
                  src={Title} 
                  alt="Title"
                  height={40} 
                  width={450} 
                  className="z-20 -ml-[1.3rem] mt-8"
                />
                <Image 
                  src={DescriptionTitle} 
                  alt="Title"
                  height={40} 
                  width={250} 
                  className="z-30 -mt-[1.5rem]"
                />
                <div className="flex gap-10 mt-2">
                  <Button className="bg-white text-black w-[110px] font-bold hover:bg-white/50 hover:text-black"
                  onClick={() => setPhase(3)}
                  >
                  <Image 
                    src={PlaySVG} 
                    alt="play icon"
                    height={17} 
                    width={17} 
                />
                    Open
                  </Button>
                  <Button className="bg-[#cda49f] w-[150px] font-bold hover:bg-[#cda49f]/50 flex">
                    <Plus className="h-10 w-10"/>
                    Daftar Saya
                  </Button>
                </div>
              </div>
          </div>
      }

      {
        phase === 3 &&
        <MainUndangan />
      }
    </main>
  );
}
