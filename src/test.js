import firebase from 'firebase/app'
import 'firebase/firestore'

const firestore = firebase.firestore()

firestore.collection('users').doc('DphzNe1G2FQYehaxU4q0').collection('cartItems').doc('2T5YwMvWxSr8cPCB8nmu');
firestore.doc('/users/DphzNe1G2FQYehaxU4q0/cartItems/2T5YwMvWxSr8cPCB8nmu');
firestore.collection('/users/DphzNe1G2FQYehaxU4q0/cartItems');