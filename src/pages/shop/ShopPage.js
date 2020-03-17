import React from 'react'

import {Route} from 'react-router-dom'

import CollectionPage from '../collection/collection'

import CollectionOverview from '../../components/collection-overview/CollectionOverview'

const ShopPage =({match}) =>(
         
            <div className='shop-page' >
              
            <Route exact path={`${match.path}`} component={CollectionOverview} />    
            <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />            
            </div>
        )



export default ShopPage