import './card.css'

const Card = ({children, className, onclick}) => {
  return (
    <article className={'card $ {className}'}  onclick={onclick}>
        {children}
        </article>
  )
}

export default Card