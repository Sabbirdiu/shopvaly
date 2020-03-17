const INITIAL_STATE = {
    sections : [
        {
          title: 'hats',
          imageUrl: 'https://thehatstore.com.au/media/catalog/product/cache/7/image/1000x/9df78eab33525d08d6e5fb8d27136e95/i/m/img_6216.1518762991.jpg',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://cf.shopee.ph/file/f141ddd75804a526b85c3bae0194573e',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41xCWDx-OyL.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        },
        {
          title: 'camera',
          imageUrl: 'https://static.bhphoto.com/images/images2500x2500/1455749513_1225877.jpg',
          size: 'large',
          id: 6,
          linkUrl: 'shop/mens'
        },
        {
          title: 'Fridge',
          imageUrl: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1550071937-gh-institute-fridgesmaytag-1550071923.jpg',
          size: 'large',
          id: 7,
          linkUrl: 'shop/mens'
        },
        {
          title: 'Watch & Clock',
          imageUrl: 'https://ae01.alicdn.com/kf/HTB1jHCEjNHI8KJjy1zbq6yxdpXa2/LIGE-Mens-Watches-Top-Brand-Luxury-Business-Schoolboy-Automatic-Mechanical-Watch-Sports-Waterproof-Men-Watch-Military.jpg',
          size: 'large',
          id: 8,
          linkUrl: 'shop/mens'
        },
        {
          title: 'Glasses',
          imageUrl: 'https://freebestbd.com/wp-content/uploads/2019/07/2_BRAND-DESIGN-Classic-Polarized-Sunglasses-Men-Women-Driving-Square-Frame-Sun-Glasses-Male-Goggle-UV400-Gafas.jpg',
          size: 'large',
          id: 9,
          linkUrl: 'shop/mens'
        },{
          title: 'Furniture',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQrRz7bQSrD-MUTFxwrO4eX844Rec36cYQUvdXs_cTA_TZFtkp',
          size: 'large',
          id: 10,
          linkUrl: 'shop/mens'
        },
        {
          title: 'Electronics Media',
          imageUrl: 'https://www.mega.pk/items_images/t_19154.png',
          size: 'large',
          id: 11,
          linkUrl: 'shop/mens'
        }
      ]
}

const directoryReducer = (state = INITIAL_STATE,action)=>{
    switch(action.type){
        default:
            return state;
    }
}

export default directoryReducer