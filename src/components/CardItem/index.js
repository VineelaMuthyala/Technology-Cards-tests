import './index.css'

const Cards = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList
  return (
    <li className={`${className} card`}>
      <h1 className="heading">{title}</h1>
      <p className="text">{description}</p>
      <img src={imgUrl} alt={title} className="image" />
    </li>
  )
}

export default Cards
