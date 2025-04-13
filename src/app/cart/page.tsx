import "./page.scss"
import Link from "next/link"
import Image from "next/image"
import arrow from "../../../public/icons/arrow_1.png"

export default function page() {
  return (
    <div className="cart">
        <div className="cart__container">
            <div className="cart__top">
                <h1><Link href={''}>Home</Link> <Image src={arrow} alt={'arrow icon'} style={{width: "7px", height: "14px"}} /> <Link href={'cart'}>Add To Cart</Link></h1>
                <p>Please fill in the fields below and click place order to complete your purchase! <br /> Already registered? <Link href={"login"}>Please login here</Link></p>
            </div>
            <div className="cart__info-holder">
            <div className="cart__info">
                <h1>PRODUCT DETAILS</h1>
                <div>
                    <h1>PRICE</h1>
                    <h1>QUANTITY</h1>
                    <h1>SHIPPING</h1>
                    <h1>SUBTOTAL</h1>
                </div>
            </div>
            </div>
            <div className="cart__list">
                list
            </div>
            <div className="cart__bottom-holder">
            <div className="cart__bottom">
                <div className="cart__bottom-left">
                    <div>
                    <h1>Discount Codes</h1>
                    <p>Enter your coupon code if you have one</p>
                    </div>
                    <div className="input-group">
                        <input type="text" />
                        <button>Apply Coupon</button>
                    </div>
                    <button>Coutinue Shopping</button>
                </div>
                <div className="cart__bottom-right">
                    <div>
                        <div className="text-holder">
                            <h1>Sub Total</h1>
                            <span>222EU</span>
                        </div>
                        <div className="text-holder">
                            <h1>Shipping</h1>
                            <span>222EU</span>
                        </div>
                    </div>
                    <div className="text-holder">
                        <h2>Grand Total</h2>
                        <span>444EU</span>
                    </div>
                    <div className="line"></div>
                    <button>Proceed To Checkout</button>
                </div>
            </div>
            </div>
            {/* footer */}
        </div>
    </div>
  )
}
