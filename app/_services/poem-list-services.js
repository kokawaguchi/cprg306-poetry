import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

// Function to get poems from Firestore
export const getPoems = async () => {
  try {
    const poems = [];
    const poemsCollectionRef = collection(db, "poems"); // Update the collection path
    const poemsSnapshot = await getDocs(poemsCollectionRef);

    poemsSnapshot.forEach((doc) => {
      poems.push({ id: doc.id, ...doc.data() });
    });

    return poems;
  } catch (error) {
    console.error("Error getting poems: ", error);
    return [];
  }
};

// Function to add a poem to Firestore
export const addPoem = async (poem) => {
  const poemsCollectionRef = collection(db, "poems"); // Update the collection path
  const docRef = await addDoc(poemsCollectionRef, poem);
  return docRef.id;
};
