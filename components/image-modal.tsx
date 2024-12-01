import Image from "next/image";
import Modal from "./ui/modal"
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Image {
    // orientation: 'landscape' | 'portrait'
    img: string | StaticImport
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    isCoverMovie?: boolean
    titleImage?: string | StaticImport
    top?: number
    titleCoverPosition?: string
    isTop?: boolean
    isBottom?: boolean
    titleBottom?: string
}

export const ImageModal = ({ img, onClose, isOpen, title, isCoverMovie = false, isTop, titleCoverPosition, top, titleImage, isBottom, titleBottom }: Image) => {
    return (
        <Modal onClose={onClose} isOpen={isOpen} title={title}>
            { !isCoverMovie && (
                    <Image
                        src={img} 
                        alt="Gambar"
                        height={1000} 
                        width={1000} 
                        className="rounded"
                    />
                )
            }
            { isCoverMovie && (
                    <div className='overflow-hidden relative rounded'>
                        { isTop && (
                                <div className='absolute top-0 right-0 z-30 sm:hidden'>
                                    <div className='bg-red-600 flex flex-col text-xs text-white px-1.5 py-0.5 justify-center items-center rounded-bl-xl'>
                                        <p className='text-base -mt-1'>TOP</p>
                                        <p className='-mt-1.5 font-bold text-3xl'>{top}</p>
                                    </div>
                                </div>
                            )
                        }
                        <Image
                            src={img} 
                            alt="Cover film"
                            height={800} 
                            width={800} 
                        />
                        <Image
                            src={titleImage!} 
                            alt="Judul film"
                            height={300} 
                            width={300}
                            className={`${titleCoverPosition} sm:hidden`}
                        />
                        { isBottom && (
                            <div className='absolute bottom-2 px-1 z-20 inset-x-0 sm:hidden'>
                                <div className='flex bg-red-600 rounded px-2.5 py-1 text-lg font-bold justify-center'>
                                    <p>{titleBottom}</p>
                                </div>
                            </div>
                        )}
                    </div>
                )
            }
        </Modal>
    )
}