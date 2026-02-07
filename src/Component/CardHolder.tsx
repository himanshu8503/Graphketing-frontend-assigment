import { CardData } from "../data"
import Card from "./Card"

const CardHolder = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 px-4 gap-2 mb-8">
        {CardData.map(({title,value,change,changeLabel,iconType,isPositive}) => (
            <Card
                key={title}
                title={title}
                value={value}
                change={change}
                changeLabel={changeLabel}
                iconType={iconType}
                isPositive={isPositive}
            />
        ))}
    </div>
  )
}

export default CardHolder