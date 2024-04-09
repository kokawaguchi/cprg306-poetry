import { db } from "../_utils/firebase";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";

// Function to get poems from Firestore
export const getPoems = async () => {
  try {
    const poems = [];
    const poemsCollectionRef = collection(db, "poems");
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
  const poemsCollectionRef = collection(db, "poems");
  const docRef = await addDoc(poemsCollectionRef, poem);
  return docRef.id;
};

// Function to return poem from Firestore based on user selected author/title
export const getPoemFromSelection = async (authorName, poemTitle) => {
  try {
    const q = query(
      collection(db, "poems"),
      where("name", "==", authorName),
      where("title", "==", poemTitle)
    );
    const querySnapshot = await getDocs(q);

    // Error shouldn't occur as selections are straight from db
    if (querySnapshot.empty) {
      throw new Error("Poem not found");
    }

    const poemData = querySnapshot.docs[0].data();
    const poemContent = poemData.poem;
    return poemContent;
  } catch (error) {
    throw error;
  }
};
