import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

function GifGrid({ category }) {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <main>
      <h2 className="category">
        {category}
      </h2>

      {isLoading && (
        <img className="loading" src="./assets/loading.gif" alt="emoji" />
      )}

      <div className="row">
       
          {images.map((image) => (
            <GifItem key={image.id} {...image} />
          ))}

       
      </div>
    </main>
  );
}

export default GifGrid;
