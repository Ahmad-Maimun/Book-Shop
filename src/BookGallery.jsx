import GalleryItem from "./GalleryItem"

function BookGallery({books, onAdd}) {
  return (
    <>
        {books.map(book => <GalleryItem key={book.id} gallery={book} onAdd={onAdd} />)}
    </>
  )
}

export default BookGallery