import { arrayRemove, arrayUnion, collection, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { db } from './Firebase';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';






export const GETallProducts = async () => {




    try {

        const prdArr = [], prdAlternative = [], productsKeys = [];
        const productDB = await getDocs(collection(db, 'products'))

        console.log('connected  db successfully', 'getallprd', productDB.docs.length)

        productDB.docs.forEach(doc => {
            const prd = { ...doc.data(), id: doc.id, };
            const prdKey = prd.name + prd.gender + prd.category;
            if (!productsKeys.includes(prdKey)) {
                productsKeys.push(prdKey);
                prdArr.push(prd);
            } else {
                prdAlternative.push(prd);
            }
        }

        )


        return { filterProducts: prdArr, alternative: prdAlternative };



    } catch (err) {
        console.error('err', err);
    }


}

export const GETwishlist = async (userEmail) => {
    try {
        //   const userEmail = localStorage.getItem('email');
        const userDocRef = doc(db, 'wishlist', userEmail);
        const userDocSnap = await getDoc(userDocRef);
        console.log('wishlist request', 'firebase')

        if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            const wishlist = userData.fav;
            return wishlist;
        } else {
            return []; // Return an empty array if the document doesn't exist
        }
    } catch (error) {
        console.error('Error get wishlist', 'Firebase:', error);
        return [];
    }
};

export const addProductToFirebase = async (productId) => {
    //console.warn(productId)

    const [user,setUser] =useState("")

    useEffect(() => {
        const getName = async () => {
            try {
                const Name = await AsyncStorage.getItem("Email");
                setUser(Name); 
                // console.warn(Name); 
            } catch (error) {
                console.log('Error retrieving name:', error);
            }
        };
        getName();
    }, []);



    try {
        const userEmail = {user};
        const userDocRef = doc(db, 'wishlist', userEmail);
           const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
            await updateDoc(userDocRef, { fav: arrayUnion(productId) });
        } else {
            await setDoc(userDocRef, { fav: [productId] });
        }
        console.log('firebase request', 'add wishlist')



    } catch (error) {
        console.error('Error adding product to Firebase:', error);
    }
};

export const GETcart = async () => {



    const [user,setUser] =useState("")

    useEffect(() => {
        const getName = async () => {
            try {
                const Name = await AsyncStorage.getItem("Email");
                setUser(Name); 
                // console.warn(Name); 
            } catch (error) {
                console.log('Error retrieving name:', error);
            }
        };
        getName();
    }, []);

    try {
        const email = {user};
        const emailDoc = doc(db, 'cart', email);
        const emailSnap = await getDoc(emailDoc);
        let data = emailSnap.data()
        const newarr = [];
        Object.keys(data).map(id =>
            Object.keys(data[id]).map(size => {
                const prd = {
                    id: id,
                    qty: data[id][size].qty,
                    size: size
                }
                newarr.push(prd)
            }
            ))

        console.log('______________----get cart -----____________')
        console.log(newarr)
        return newarr;

    } catch (err) {
        // console.error('get from cart', 'firebase', err);
    }



}

export const addToCart = async ({ id, size, qty = 1 }) => {



    const [user,setUser] =useState("")

    useEffect(() => {
        const getName = async () => {
            try {
                const Name = await AsyncStorage.getItem("Email");
                setUser(Name); 
                // console.warn(Name); 
            } catch (error) {
                console.log('Error retrieving name:', error);
            }
        };
        getName();
    }, []);

    console.warn('_______________--------async')
    console.warn(id, size, qty)
    

    try {
        const email = {user};
        const emailDoc = doc(db, 'cart', email);
        const emailSnap = await getDoc(emailDoc);



        let data = emailSnap.data()
        //new doc
        if (!(data?.[id])) {
            data = {
                ...data,

                [id]: {
                    [size]: {
                        qty: qty
                    }
                }

            }

            await setDoc(emailDoc, data)

        } else {
            //update size / add new size
            data[id][size] = {
                qty: qty
            }
            await updateDoc(emailDoc, data)


        }

        const newarr = [];
        Object.keys(data).map(id =>
            Object.keys(data[id]).map(size => {
                const prd = {
                    id: id,
                    qty: data[id][size].qty,
                    size: size
                }
                newarr.push(prd)
            }

            )
        )

        return newarr;

    } catch (err) {
        console.error('add to cart', 'firebase', err);
    }



}

export const removeProductFromFirebase = async (productId) => {
    const [user,setUser] =useState("")

    useEffect(() => {
        const getName = async () => {
            try {
                const Name = await AsyncStorage.getItem("Email");
                setUser(Name); 
                // console.warn(Name); 
            } catch (error) {
                console.log('Error retrieving name:', error);
            }
        };
        getName();
    }, []);
    try {

        const userEmail = "{user}"
        const userDocRef = doc(db, 'wishlist', userEmail);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
            await updateDoc(userDocRef, { fav: arrayRemove(productId) });
        }

        console.log('firebase request', 'remove wishlist')

    } catch (error) {
        console.error('Error removing product from Firebase:', error);
    }
};
