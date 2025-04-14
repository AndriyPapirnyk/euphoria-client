import './CartItem.scss'
import Image from 'next/image'
import cartIcon from '../../../../public/background/cartItem1.png'
import minIcon from '../../../../public/icons/min.png'
import addIcon from '../../../../public/icons/add.png'
import deleteIcon from '../../../../public/icons/delete.png'

export default function CartItem() {
  return (
    <div className='cartItem'>
        <div className="cartItem__info">
            <Image src={cartIcon} alt={'cart item icon'} style={{width: "105px", height: "120px"}} />
            <div className="cartItem__info-text">
                <h3>Blue Flower Print Crop Top</h3>
                <p>Color: Yellow</p>
                <p>Size: M</p>
            </div>
        </div>
        <div className="cartItem__content">
            <h1>222EU</h1>
            <div className="cartItem__content-quantity">
                <Image src={minIcon} alt={'cart item icon'} style={{width: "10px"}} />
                <p>1</p>
                <Image src={addIcon} alt={'cart item icon'} style={{width: "10px"}} />
            </div>
            <h2>FREE</h2>
            <h1>222EU</h1>
            <button>
                <Image src={deleteIcon} alt={'cart item icon'} style={{width: "15px"}} />
            </button>
        </div>
    </div>
  )
}
