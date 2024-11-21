import { getImage } from "./utils/getImages"

function GalleryItem({gallery, onAdd}) {
  return (
    <div className="w-3/12">
        <img className="my-3 px-2" src={getImage(`../assets/book_images/${gallery.image}`)} alt="" />
        <p>{gallery.price}</p>
        <button onClick={() => onAdd(gallery)} className="bg-sky-500 text-white p-3">Add To Cart</button>
    </div>
  )
}

export default GalleryItem