import { collection, getDocs, query, where, addDoc } from "firebase/firestore/lite";
import { database } from "./firebase";

export async function getCoffees() {
  try {
    const coffeesCollection = collection(database, "coffees"); // Corrected usage
    const coffeesData = await getDocs(coffeesCollection);
    const coffeesList = coffeesData.docs.map((doc) => doc.data());
    return coffeesList;
  } catch (error) {
    throw new Error("Something went wrong while receiving the coffees data: " + error.message);
  }
}

export async function getCoffee(slug) {
  try {
    const coffeesCollection = collection(database, "coffees");
    const q = query(coffeesCollection, where("slug", "==", slug)); // Filter by slug
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      throw new Error(`No coffee found with slug: ${slug}`);
    }

    return querySnapshot.docs[0].data(); // Return first matching document
  } catch (error) {
    throw new Error("Something went wrong while retrieving the coffee: " + error.message);
  }
}

export async function addCoffee(coffeeData) {
  try {
    const coffeesCollection = collection(database, "coffees");
    const docRef = await addDoc(coffeesCollection, coffeeData);
    return { id: docRef.roasteryName, ...coffeeData };
  } catch (error) {
    throw new Error("Something went wrong while adding the coffee: " + error.message);
  }
}
