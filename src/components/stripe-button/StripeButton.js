import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price * 100
    const publishablekey = 'pk_test_JiTF1iEtBW0cgRq3rRodt60P00LAags2jz'

    const onToken = token => {
        console.log(token)
        alert('paymemt successfull')
    }
    
    return(
        <StripeCheckout
           label = 'Pay Now'
           name = 'Easy Shop'
        //    <strong>
        //    <span style={{color:'orange' ,fontSize:'30px'}}>Easy</span> Shop</strong>
           billingAddress
           shippingAddress
           description={`Your total is $${price}`}
           amount={priceForStripe}
           placeLabel='Pay Now'
           token = {onToken}
           stripeKey = {publishablekey}

        />
    )
}

export default StripeCheckoutButton