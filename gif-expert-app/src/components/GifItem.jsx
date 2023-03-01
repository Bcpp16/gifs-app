
function GifItem({ title, url, id }) {
  return (
    <div className="column">
      <a href={url} className="column" target="_blank">
        <img className="img-card" src={url} alt={title}/>
      </a>
      

      <div className="container-name-gif">
        <a className="link-name-gif" href={url} target="_blank">
          <p className="name-gif">{title}</p>
        </a>
      </div>

    </div>
  )
}

export default GifItem;
