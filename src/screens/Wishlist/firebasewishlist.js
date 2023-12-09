import firestore from '@react-native-firebase/firestore';
import { useState } from 'react';

export const addProductToFirebase = async (productId) => {


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
    const userEmail = {user}; // Fetch user email (perhaps from async storage or state)
    const userDocRef = firestore().collection('wishlist').doc(userEmail);

    const userDocSnap = await userDocRef.get();

    if (userDocSnap.exists) {
      await userDocRef.update({ fav: firestore.FieldValue.arrayUnion(productId) });
    } else {
      await userDocRef.set({ fav: [productId] });
    }
  } catch (error) {
    console.error('Error adding product to Firebase:', error);
  }
};




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
      const userEmail = {user}; // Fetch user email (perhaps from async storage or state)
      const userDocRef = firestore().collection('wishlist').doc(userEmail);
  
      const userDocSnap = await userDocRef.get();
  
      if (userDocSnap.exists) {
        await userDocRef.update({ fav: firestore.FieldValue.arrayRemove(productId) });
      }
    } catch (error) {
      console.error('Error removing product from Firebase:', error);
    }
  };



  export const getWishlistByEmail = async () => {

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
      const userEmail = {user}; // Fetch user email (perhaps from async storage or state)
      const userDocRef = firestore().collection('wishlist').doc(userEmail);
      const userDocSnap = await userDocRef.get();
  
      if (userDocSnap.exists) {
        const userData = userDocSnap.data();
        const wishlist = userData && userData.fav ? userData.fav : [];
        return wishlist;
      } else {
        return []; // Return an empty array if the document doesn't exist
      }
    } catch (error) {
      console.error('Error getting product from Firebase:', error);
      return []; // Return an empty array in case of an error
    }
  };
   