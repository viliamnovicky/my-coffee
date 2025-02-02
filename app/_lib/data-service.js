import { collection, getDocs } from "firebase/firestore/lite";
import { database } from "./firebase"; // Ensure correct path

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
