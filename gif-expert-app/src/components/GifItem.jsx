function GifItem({title, url, id }) {
  return (
    
      <div className="column">
        <img className="img-card" src={url} alt={title} />
      </div>
      
  );
}

export default GifItem;
