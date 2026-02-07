import { CardData } from "../data"
import Card from "./Card"

const CardHolder = () => {
  return (
    <div className="flex px-4 gap-2">
        {CardData.map(({title,value,change,changeLabel,iconType,isPositive}) => (
            <Card
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