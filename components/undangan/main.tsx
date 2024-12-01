'use client'

import NetflixLogo from '@/lib/assets/Netflix_Symbol_RGB.png'
import Image from 'next/image'
import FourKLogo from '@/lib/assets/4k.png'
import HDLogo from '@/lib/assets/HDlogo.png'
import Picture1 from '@/lib/assets/nikahan ijir/Foto/famourapict-695.jpg'
import Picture2 from '@/lib/assets/nikahan ijir/Foto/famourapict-684.jpg'
import Lamaran from '@/lib/assets/nikahan ijir/Foto/FGL00212.jpg'
import Nikahan from '@/lib/assets/nikahan ijir/Foto/famourapict-295.jpg'
import Kenalan from '@/lib/assets/nikahan ijir/Foto/famourapict-652.jpg'
import Film1 from '@/lib/assets/nikahan ijir/Foto/famourapict-247.jpg'
import Film2 from '@/lib/assets/nikahan ijir/Foto/famourapict-269.jpg'
import Film3 from '@/lib/assets/nikahan ijir/Foto/famourapict-280.jpg'
import Film4 from '@/lib/assets/nikahan ijir/Foto/famourapict-669.jpg'
import Film5 from '@/lib/assets/nikahan ijir/Foto/famourapict-670.jpg'
import Film6 from '@/lib/assets/nikahan ijir/Foto/famourapict-683.jpg'
import User1 from '@/lib/assets/user-1.jpg'
import User2 from '@/lib/assets/user-2.jpg'
import User3 from '@/lib/assets/user-3.jpg'
import User4 from '@/lib/assets/user-4.jpg'
import { Button } from '../ui/button'
import { useState } from 'react'
import { ImageModal } from '../image-modal'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Acha2 from '@/lib/assets/nikahan ijir/Foto/acha2.jpeg'
import Jira2 from '@/lib/assets/nikahan ijir/Foto/jira2.jpeg'
import MohonDoaRestu from '@/lib/assets/judul film/mohon doa restu.png'
import AdaApaDenganCinta from '@/lib/assets/judul film/ada apa dengan cinta.png'
import JatuhCinta from '@/lib/assets/judul film/jatuh cinta seperti di film film.png'
import PerfectDate from '@/lib/assets/judul film/the perfect date.png'
import TuneInForLove from '@/lib/assets/judul film/tune in for love.png'
import WeddingSeason from '@/lib/assets/judul film/wedding seseon.png'
import Lokasi from '@/lib/assets/gambar alamat.png'
import Bank from '@/lib/assets/gambar atm.png'
import { FileStack, MapPinHouse } from 'lucide-react'

type CoverImage = {
    titleImage: string | StaticImport
    isTop: boolean
    top: number
    titlePosition: string
    isBottom: boolean
    titleBottom: string
}

function MainUndangan() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [modalImage, setModalImage] = useState<string | StaticImport>('')
    const [modalTitle, setModalTitle] = useState<string>('')
    const [isCoverMovie, setIsCoverMovie] = useState<boolean>(false)
    const [coverImage, setCoverImage] = useState<CoverImage | null>(null)
    const [isCopied, setIsCopied] = useState<boolean>(false)


    const onImageClick = (img: string | StaticImport, title: string, isCover?: boolean, cover?: CoverImage ) => {
        setModalImage(img)
        setIsModalOpen(true)
        setModalTitle(title)
        if(isCover) {
            setIsCoverMovie(isCover)
            if(cover) {
                setCoverImage({ isTop: cover.isTop, 
                    top: cover.top, titlePosition: cover.titlePosition, titleBottom: cover.titleBottom, 
                    titleImage: cover.titleImage, isBottom: cover.isBottom  })
            }
        }
        else setIsCoverMovie(false)
    }

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText('1234565779');
            setIsCopied(true);
            const timer = setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        
            // Clean up the timer
            return () => clearTimeout(timer);

            } catch (err) {
            console.error('Failed to copy text: ', err);
            }
    }
  return (
    <>
        <div className="flex flex-col items-center px-2">
            <video 
                src="/video/video-1.mp4" 
                autoPlay 
                loop 
                muted
                playsInline 
                className="max-w-[400px] w-full rounded-b"
            />
            <div className='flex flex-col max-w-[400px] w-full'>
                <div className='flex items-center -ml-2'>
                    <Image
                        src={NetflixLogo} 
                        alt="Netflix logo"
                        height={30} 
                        width={30} 
                    />
                    <p className="text-sm font-poppins text-white/70">D O C U M E N T E R</p>
                </div>
                <p className='text-xl font-bold -mt-2'>Acha & Hijir: Sebelum Hari H</p>
                <div className='flex gap-2 items-center text-sm'>
                    <p className='text-green-600'>100% match</p>
                    <div className='rounded-[2px] bg-gray-600 flex items-center max-h-4 px-0.5'>
                        <p className='font-poppins text-[10px]'>SU</p>
                    </div>
                    <p>2024</p>
                    <p>1h 26m</p>
                    <Image
                        src={FourKLogo} 
                        alt="4K logo"
                        height={18} 
                        width={18} 
                        className='mb-0.5'
                    />
                    <Image
                        src={HDLogo} 
                        alt="HD logo"
                        height={18} 
                        width={18} 
                        className='mb-0.5'
                    />
                </div>

                <div className='rounded bg-red-600 px-2 py-0.5 text-sm font-bold w-[330px] my-2'>
                    <p>Cooming soon on Monday, 16 December 2024</p>
                </div>
                <p className='text-sm'>Setelah Acha dan Hijir dipertemukan dalam situasi yang tepat, di mana keduanya telah siap untuk memulai hubungan bersama, tibalah mereka di awal perjalanan baru menuju pernikahan.</p>
                <p className='text-xs text-gray-500 mt-4'>{`"Segala sesuatu Kami ciptakan berpasang-pasangan agar kamu mengingat (kebesaran Allah)" (Q.S Az-Zariyah: 49)`}</p>
            </div>
            <div className='flex flex-col max-w-[400px] w-full mt-4 gap-2'>
                <h2 className='font-bold text-lg'>Breaking News</h2>
                <Image
                    src={Picture2} 
                    alt="Hijir & acha"
                    height={400} 
                    width={400} 
                    className='rounded cursor-pointer'
                    onClick={() => onImageClick(Picture2, 'Jira dan Acha')}
                />
                <div className='flex flex-col gap-2 text-sm text-gray-400 italic'>
                    <p>{`Dalam perjalanan hidup yang penuh warna ini, kami telah menemukan kebahagiaan yang tak ternilai saling melengkapi satu sama lain. Dengan penuh rasa syukur dan cinta, kami ingin berbagi momen istimewa ini bersama orang-orang terdekat.`}</p>
                    <p>Dengan segala kerendahan hati, kami mengundang kehadiran Anda, sahabat, teman, dan kerabat tercinta, untuk turut merayakan hari bahagia kami, hari yang menjadi awal dari perjalanan baru sebagai pasangan suami istri. Kehadiran Anda akan menjadi doa dan restu yang paling berarti bagi kami.</p>
                    <p>The Bride and Groom ❤️</p>
                </div>
            </div>
            <div className='flex flex-col max-w-[400px] w-full mt-4 gap-2'>
                <h2 className='font-bold text-lg'>Bride & Groom</h2>
                <div className='grid grid-cols-2'>
                    <div className='flex flex-col gap-1'>
                        <div className='max-w-[180px] max-h-[134px] overflow-hidden rounded'>
                            <Image
                                src={Acha2} 
                                alt="Foto Acha"
                                height={180} 
                                width={180} 
                                className='rounded -mt-8 cursor-pointer'
                                onClick={() => onImageClick(Acha2, `As'ad Rachman, S.Pd`)}
                            />
                        </div>
                        <div className='grid grid-rows-2'>
                            <p className='font-bold text-sm'>{`As'ad Rachman, S.Pd`}</p>
                            <p className='mt-1.5 text-xs'>Putra dari Bapak Abdul Rachman Hafid & Ibu Nurfah</p>

                        </div>
                    </div>
                    <div className='flex flex-col'>
                    <div className='max-w-[180px] max-h-[134px] overflow-hidden rounded'>
                        <Image
                            src={Jira2} 
                            alt="Foto Jira"
                            height={180} 
                            width={180} 
                            className='rounded -mt-12 cursor-pointer'
                            onClick={() => onImageClick(Jira2, `Muhajiratul Haq Suburan, S.Pd., Gr.`)}
                        />
                         
                        </div>
                        <div className='grid grid-rows-2'>
                            <p className='font-bold text-sm mt-0.5'>{`Muhajiratul Haq Suburan, S.Pd., Gr.`}</p>
                            <p className='mt-2 text-xs'>Putri dari Bapak Suburan & Ibu Hadiani</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='flex flex-col max-w-[400px] w-full mt-4 gap-3'>
                <h2 className='font-bold text-lg'>Breaking News</h2>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-3 items-center'>
                        <Image
                            src={Kenalan} 
                            alt="Hijir & acha"
                            height={200} 
                            width={200} 
                            className='rounded cursor-pointer'
                            onClick={() => onImageClick(Kenalan, `Episode 1: Kenalan - Acha & Jira`)}
                            
                        />
                        <div className='flex flex-col gap-3'>
                            <p>Episode 1: Kenalan</p>
                            <p className='text-xs text-gray-400'>30m 5s</p>
                        </div>
                    </div>
                    <p className='text-xs text-gray-400'>Tidak ada yang kebetulan di dunia ini, semua sudah tersusun rapih oleh sang maha kuasa, kita tidak bisa memilih kepada siapa kita akan jatuh cinta, Kami berkenalan pada bulan juli, uniknya kami bertemu di social media yang berakhir saling DM.</p>
                </div>
            
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-3 items-center'>
                        <Image
                            src={Picture1} 
                            alt="Hijir & acha"
                            height={200} 
                            width={200} 
                            className='rounded cursor-pointer'
                            onClick={() => onImageClick(Picture1, `Episode 2: Pendekatan - Acha & Jira`)}
                        />
                        <div className='flex flex-col gap-3'>
                            <p>Episode 2: Pendekatan</p>
                            <p className='text-xs text-gray-400'>28m 23s</p>
                        </div>
                    </div>
                    <p className='text-xs text-gray-400'>Katanya cinta dapat tumbuh dengan kebersamaan, seiring berjalannya waktu kami semakin dekat , kami LDR karena berjarak cukup jauh, tidak ada kata pacaran diantara kami tapi alam seakan terus berkonspirasi untuk menyatukan kami berdua. Pada pertengahan Bulan agustus dia mengajak untuk bertemu pertama kali dan menyampaikan niat seriusnya.</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-3 items-center'>
                        <Image
                            src={Lamaran} 
                            alt="Hijir & acha"
                            height={200} 
                            width={200} 
                            className='rounded cursor-pointer'
                            onClick={() => onImageClick(Lamaran, `Episode 3: Lamaran - Acha & Jira`)}
                        />
                        <div className='flex flex-col gap-3'>
                            <p>Episode 3: Lamaran</p>
                            <p className='text-xs text-gray-400'>32m 5s</p>
                        </div>
                    </div>
                    <p className='text-xs text-gray-400'>Pada tanggal 4 Oktober 2024 keluarganya datang untuk silaturahmi sekaligus membahas soal pernikahan. Kami melangsungkan acara lamaran pada tanggal bulan Oktober </p>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-3 items-center'>
                        <Image
                            src={Nikahan} 
                            alt="Hijir & acha"
                            height={200} 
                            width={200} 
                            className='rounded cursor-pointer'
                            onClick={() => onImageClick(Nikahan, `Episode Final: Nikahan - Acha & Jira`)}
                        />
                        <div className='flex flex-col gap-3'>
                            <p className='-mb-3'>{`[Cooming Soon]`}</p>
                            <p>Episode Final: Menikah</p>
                            <p className='text-xs text-gray-400'>35m 5s</p>
                        </div>
                    </div>
                    <p className='text-xs text-gray-400'>{`Percayalah, bukan karna bertemu lalu berjodoh tapi karna berjodoh lah maka kami dipertemukan, kami memutuskan untuk mengikrarkan janji suci pernikahan kami di bulan Desember ini insya allah sebagai mana yang pernah dikatakan oleh saydina ali bin abi thalib “Apa yang menjadi takdirmu akan menemukan jalannya untuk menemukanmu”.`}</p>
                </div>
            </div>

            <div className='flex flex-col max-w-[400px] w-full mt-4 gap-3'>
                <h2 className='font-bold text-lg'>Our Gallery</h2>
                <div className='grid grid-cols-3 gap-4'>
                    <div className='overflow-hidden relative rounded-md transition-transform duration-200 ease-in-out transform hover:scale-110 cursor-pointer'
                        onClick={() => onImageClick(Film2, `Mohon Doa Restu`, true, {
                            isBottom: true,
                            isTop: true,
                            top: 3,
                            titleImage: MohonDoaRestu,
                            titlePosition: 'absolute -bottom-10 left-5',
                            titleBottom: "Groom's Favorite"
                        })}
                    >   
                        <div className='absolute top-0 right-0 z-30'>
                            <div className='bg-red-600 flex flex-col text-xs text-white px-1.5 py-0.5 justify-center items-center rounded-bl-md'>
                                <p className='text-[5px] -mt-1'>TOP</p>
                                <p className='-mt-1.5 font-bold'>3</p>
                            </div>
                        </div>
                        <Image
                            src={Film2} 
                            alt="Film 2"
                            height={140} 
                            width={140} 
                            
                        />
                         <Image
                            src={MohonDoaRestu} 
                            alt="Mohon doa restu"
                            height={140} 
                            width={140} 
                            className='absolute -bottom-1'
                        />
                        <div className='absolute bottom-2 px-1 z-20'>
                            <div className='flex bg-red-600 rounded px-2.5 py-1 text-[10px] font-bold'>
                                <p>{`Groom's Favorite`}</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className='overflow-hidden flex rounded-md transition-transform duration-200 ease-in-out transform hover:scale-110 flex-col relative'
                        onClick={() => onImageClick(Film1, `Jatuh Cinta Seperti Di Film Film`, true, {
                            isBottom: false,
                            isTop: false,
                            top: 3,
                            titleImage: JatuhCinta,
                            titlePosition: 'absolute -bottom-5 left-5',
                            titleBottom: "Groom's Favorite"
                        })}
                    >
                        <Image
                            src={Film1} 
                            alt="Film 1"
                            height={140} 
                            width={140} 
                        />
                        <Image
                            src={JatuhCinta} 
                            alt="Jatuh cinta seperti di film film"
                            height={140} 
                            width={140} 
                            className='absolute -bottom-6'
                        />
                    </div>
                    <div className='overflow-hidden relative rounded-md transition-transform duration-200 ease-in-out transform hover:scale-110'
                        onClick={() => onImageClick(Film3, `Wedding Season`, true, {
                            isBottom: true,
                            isTop: true,
                            top: 1,
                            titleImage: WeddingSeason,
                            titlePosition: 'absolute -bottom-10 left-5',
                            titleBottom: "Our Favorite <3"
                        })}
                    >
                        <div className='absolute top-0 right-0 z-30'>
                            <div className='bg-red-600 flex flex-col text-xs text-white px-1.5 py-0.5 justify-center items-center rounded-bl-md'>
                                <p className='text-[5px] -mt-1'>TOP</p>
                                <p className='-mt-1.5 font-bold'>1</p>
                            </div>
                        </div>
                        <Image
                            src={Film3} 
                            alt="Film 3"
                            height={140} 
                            width={140} 
                        />
                        <Image
                            src={WeddingSeason} 
                            alt="Wedding season"
                            height={140} 
                            width={140} 
                            className='absolute -bottom-1 right-3'
                        />
                        
                        <div className='absolute bottom-2 px-1 z-20'>
                            <div className='flex bg-red-600 rounded px-2.5 py-1 text-[10px] font-bold'>
                                <p>{`Our Favorite <3`}</p>
                            </div>
                        </div>
                    </div>
                    <div className='overflow-hidden relative rounded-md transition-transform duration-200 ease-in-out transform hover:scale-110'
                        onClick={() => onImageClick(Film4, `Perfect Date`, true, {
                            isBottom: false,
                            isTop: true,
                            top: 10,
                            titleImage: PerfectDate,
                            titlePosition: 'absolute -top-[5rem] left-5',
                            titleBottom: ""
                        })}
                    >
                        <div className='absolute top-0 right-0 z-30'>
                            <div className='bg-red-600 flex flex-col text-xs text-white px-1.5 py-0.5 justify-center items-center rounded-bl-md'>
                                <p className='text-[5px] -mt-1'>TOP</p>
                                <p className='-mt-1.5 font-bold'>10</p>
                            </div>
                        </div>
                        <Image
                            src={Film4} 
                            alt="Film 4"
                            height={140} 
                            width={140} 
                        />
                        <Image
                            src={PerfectDate} 
                            alt="Perfect date"
                            height={140} 
                            width={140} 
                            className='absolute -top-6 left-1'
                        />
                    </div>
                    <div className='overflow-hidden flex rounded-md transition-transform duration-200 ease-in-out transform hover:scale-110'
                        onClick={() => onImageClick(Film5, `Tune In For Love`, true, {
                            isBottom: false,
                            isTop: true,
                            top: 5,
                            titleImage: TuneInForLove,
                            titlePosition: 'absolute -top-[5rem] left-5',
                            titleBottom: ""
                        })}
                    >
                    <div className='absolute top-0 right-0 z-30'>
                            <div className='bg-red-600 flex flex-col text-xs text-white px-1.5 py-0.5 justify-center items-center rounded-bl-md'>
                                <p className='text-[5px] -mt-1'>TOP</p>
                                <p className='-mt-1.5 font-bold'>5</p>
                            </div>
                        </div>
                        <Image
                            src={Film5} 
                            alt="Film 5"
                            height={140} 
                            width={140} 
                        />
                        <Image
                            src={TuneInForLove} 
                            alt="Tune in for love"
                            height={200} 
                            width={200}
                            className='absolute -top-6 left-1'
                        />
                    </div>
                    <div className='overflow-hidden relative rounded-md transition-transform duration-200 ease-in-out transform hover:scale-110'
                        onClick={() => onImageClick(Film6, `Ada Apa Dengan Cinta?`, true, {
                            isBottom: true,
                            isTop: false,
                            top: 10,
                            titleImage: AdaApaDenganCinta,
                            titlePosition: 'absolute -bottom-10 left-[4.4rem]',
                            titleBottom: "Bride's Favorite"
                        })}
                    >
                        <Image
                            src={Film6} 
                            alt="Film 6"
                            height={140} 
                            width={140} 
                        />
                        <Image
                            src={AdaApaDenganCinta} 
                            alt="Ada apa dengan cinta"
                            height={140} 
                            width={140}
                            className='absolute -bottom-0.5 left-2'
                        />
                        <div className='absolute bottom-2 px-1 z-20'>
                            <div className='flex bg-red-600 rounded px-2.5 py-1 text-[10px] font-bold'>
                                <p>{`Bride's Favorite`}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='flex flex-col max-w-[400px] w-full mt-4 gap-3'>
                <h2 className='font-bold text-lg'>Save The Date</h2>
                <div className='flex gap-2 text-lg font-black justify-center'>
                    <div className='flex px-2 py-1 bg-red-600 rounded'>
                        <p>16</p>
                    </div>
                    <div className='flex px-2 py-1 bg-red-600 rounded'>
                        <p>Desember</p>
                    </div>
                    <div className='flex px-2 py-1 bg-red-600 rounded'>
                        <p>2024</p>
                    </div>
                </div>
                <div className='flex flex-col font-poppins text-center mt-6 text-sm items-center'>
                    <p>WAKTU AKAD: PUKUL 10.00 WITA</p>
                    <p>WAKTU RESEPSI: PUKUL 11.00 - SELESAI</p>
                    <p>TEMPAT: KOTU, DESA BAMBAPUANG, KEC. ANGGERAJA,</p>
                    <p>KAB. ENREKANG</p>
                    <Image
                        src={Lokasi} 
                        alt="Map"
                        height={300} 
                        width={300} 
                    />
                    <Button className={`font-poppins border-2 flex items-center -mt-20 border-white`}>
                        <MapPinHouse />
                        GOOGLE  MAPS</Button>
                </div>
                
            </div>

            <div className='flex flex-col max-w-[400px] w-full mt-4 gap-3'>
                <h2 className='font-bold text-lg'>Wedding Gift</h2>
                <div className='flex flex-col items-center text-center font-poppins'>
                    <p>BANK: B R I</p>
                    <p>- a/n : Muhajirahtul Haq Suburan</p>
                    <Image
                        src={Bank} 
                        alt="Bank"
                        height={300} 
                        width={300} 
                        className='-mt-[3.4rem] -ml-4'
                    />
                    
                    <Button className={`font-poppins border-2 flex items-center -mt-14 ${isCopied ? 'border-gray-400 text-gray-400' : 'border-white'}`} onClick={handleCopy}>
                        <FileStack />
                        { isCopied && 'TERSALIN' }
                        { !isCopied && 'SALIN' }
                        </Button>
                </div>
            </div>

            <div className='flex flex-col max-w-[400px] w-full mt-4 gap-3'>
                <h2 className='font-bold text-lg'>Wish for the couple</h2>

                <div className='overflow-auto w-full max-h-[350px] flex flex-col gap-4'>
                    <div className='flex gap-3'>
                        <Image 
                            src={User1} 
                            alt="Netflix Default Avatar" 
                            height={30} 
                            width={30} 
                            className="hover:cursor-pointer rounded-md h-[30px]"
                        />

                        <div className='flex flex-col gap-2'>
                            <p className='font-bold'>Indah aulia</p>
                            <p className='text-sm text-gray-500'>{`Kak konsepnya cocok bgt sama aku yg suka nonton, jadi izin kak mau aku referensi kan utk aku yh kak, btw kakaknya selamat yah atas pernikahannya, semoga menjad keluarga yang kakak impikan, aamiin🥰🤍`}</p>
                        </div>
                    </div>

                    <div className='flex gap-3'>
                        <Image 
                            src={User2} 
                            alt="Netflix Default Avatar" 
                            height={30} 
                            width={30} 
                            className="hover:cursor-pointer rounded-md h-[30px]"
                        />

                        <div className='flex flex-col gap-2'>
                            <p className='font-bold'>Indah aulia</p>
                            <p className='text-sm text-gray-500'>{`Kak konsepnya cocok bgt sama aku yg suka nonton, jadi izin kak mau aku referensi kan utk aku yh kak, btw kakaknya selamat yah atas pernikahannya, semoga menjad keluarga yang kakak impikan, aamiin🥰🤍`}</p>
                        </div>
                    </div>

                    <div className='flex gap-3'>
                        <Image 
                            src={User3} 
                            alt="Netflix Default Avatar" 
                            height={30} 
                            width={30} 
                            className="hover:cursor-pointer rounded-md h-[30px]"
                        />

                        <div className='flex flex-col gap-2'>
                            <p className='font-bold'>Indah aulia</p>
                            <p className='text-sm text-gray-500'>{`Kak konsepnya cocok bgt sama aku yg suka nonton, jadi izin kak mau aku referensi kan utk aku yh kak, btw kakaknya selamat yah atas pernikahannya, semoga menjad keluarga yang kakak impikan, aamiin🥰🤍`}</p>
                        </div>
                    </div>

                    <div className='flex gap-3'>
                        <Image 
                            src={User4} 
                            alt="Netflix Default Avatar" 
                            height={30} 
                            width={30} 
                            className="hover:cursor-pointer rounded-md h-[30px]"
                        />

                        <div className='flex flex-col gap-2'>
                            <p className='font-bold'>Indah aulia</p>
                            <p className='text-sm text-gray-500'>{`Kak konsepnya cocok bgt sama aku yg suka nonton, jadi izin kak mau aku referensi kan utk aku yh kak, btw kakaknya selamat yah atas pernikahannya, semoga menjad keluarga yang kakak impikan, aamiin🥰🤍`}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col max-w-[400px] w-full mt-4 gap-3 mb-10'>
                <p>Name</p>
                <input type='text' className='h-8 rounded px-2 text-black' />
                <p>Message</p>
                <input type='text' className='h-8 rounded px-2 text-black' />
                <Button >Submit</Button>
                <div className='flex flex-col items-center'>
                    <p>{`Thank you for checking up all the things up there!`}</p>
                    <p className='-mt-1'>{`Can’t wait to see u again! <3`}</p>
                    <p className='mt-4 text-[9px] text-gray-400'>E-invitation made by Irwan with ♥</p>
                </div>
            </div>
        </div>
        <ImageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} img={modalImage} title={modalTitle} isCoverMovie={isCoverMovie}
                isTop={coverImage?.isTop}
                top={coverImage?.top}
                titleCoverPosition={coverImage?.titlePosition}
                isBottom={coverImage?.isBottom}
                titleImage={coverImage?.titleImage}
                titleBottom={coverImage?.titleBottom}
        />
    </>
  )
}

export default MainUndangan