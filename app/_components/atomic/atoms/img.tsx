import Image from 'next/image'
import bookBg from '../../../_public/images/bg/old_paper_book.png'
 
export function OldBookBackground() {
  return (
    <Image
        className='book_bg'
        alt="old book"
        src={bookBg}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
            objectFit: 'cover',
        }}
    />
  )
}