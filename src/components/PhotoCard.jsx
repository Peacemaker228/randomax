import './PhotoCard.css';

function PhotoCard({image}) {
  return (
    <div className='photo-card'>
      <img src={image} className='photo-image' />
    </div>
  );
}

export default PhotoCard;
