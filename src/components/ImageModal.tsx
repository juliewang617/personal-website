import Image from "next/image";
import * as React from 'react'; 

export default function ImageModal({image}:{image: [string, string]}){
    const [open, setOpen] = React.useState(false)

    const handleModal = () => {
        setOpen(!open);  
    }
    return(
        <div>
            <div className="bg-blue2 h-48 w-48 mr-2 rounded-xl min-w-48 relative
            cursor-pointer"
            onClick={handleModal}>
                <Image src={image[0]} alt={image[1]} layout="fill" className="object-cover rounded-xl"/>
            </div>

            {open && 
            <div 
            className="fixed inset-0 bg-blue3 bg-opacity-75 z-10" 
            aria-hidden="true"
            onClick={handleModal}>
                <div className="flex flex-col mt-20">
                    <div className="bg-blue1 rounded-xl m-auto relative">
                        <Image src={image[0]} alt={image[1]} width={0} height={0} sizes="100vw" className="w-auto h-[550px] rounded-xl"/>
                    </div>
                    <div className="text-offwhite mt-5 m-auto">{image[1]}</div>
                </div>
             </div>
            }
        </div>
    )
; }