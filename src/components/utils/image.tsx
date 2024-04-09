import Image from 'next/image'
import React from 'react'


interface MyImage {
    imagePath : string
    altText : string
}
const Images : React.FC<MyImage> =({imagePath,altText}) => {
    return (
        <Image src={imagePath} alt={altText} width={200} height={200} className='ml-auto shadow-xl ' priority/>
    )
}

export default Images