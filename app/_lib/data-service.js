import {
  collection,
  getDocs,
  query,
  where,
  addDoc,
  getDoc,
  doc,
  setDoc,
} from "firebase/firestore/lite";
import { database, storage } from "./firebase";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { resizeImage } from "../_helpers/resizeImage";
import toast from "react-hot-toast";

export async function getCoffees() {
  try {
    const coffeesCollection = collection(database, "coffees"); // Corrected usage
    const coffeesData = await getDocs(coffeesCollection);
    const coffeesList = coffeesData.docs.map((doc) => doc.data());
    return coffeesList;
  } catch (error) {
    //toast.error("Something went wrong while receiving the coffees data.");
    throw new Error("Something went wrong while receiving the coffees data: " + error.message);
  }
}

export async function getCoffee(slug) {
  try {
    const coffeesCollection = collection(database, "coffees");
    const q = query(coffeesCollection, where("slug", "==", slug)); // Filter by slug
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      //toast.error("No coffee found")
      throw new Error(`No coffee found with slug: ${slug}`);
    }

    return querySnapshot.docs[0].data(); // Return first matching document
  } catch (error) {
    throw new Error("Something went wrong while retrieving the coffee: " + error.message);
  }
}

// Generate slug from roasteryName and coffeeName
function generateSlug(roasteryName, coffeeName) {
  return `${roasteryName}-${coffeeName}`
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export async function addCoffee(coffeeData, router) {
  const slug = generateSlug(coffeeData.roasteryName, coffeeData.coffeeName);
  console.log("[addCoffee] Generated slug:", slug);
  const coffeesCollection = collection(database, "coffees");
  const coffeeDocRef = doc(coffeesCollection, slug);

  let imageUrl = null;
  let imageRef = null;

  try {
    const existingDoc = await getDoc(coffeeDocRef);
    console.log("[addCoffee] Checked existing doc");

    if (existingDoc.exists()) {
      throw new Error("A coffee with this slug already exists.");
    }

    if (coffeeData.image instanceof Blob) {
      imageRef = ref(storage, `coffee/${slug}.jpg`);
      const metadata = { contentType: "image/jpeg" };

      await uploadBytes(imageRef, coffeeData.image, metadata);
      imageUrl = await getDownloadURL(imageRef);
    }

    const coffeeWithSlug = {
      ...coffeeData,
      slug,
      image: imageUrl || coffeeData.image || null,
    };

    await setDoc(coffeeDocRef, coffeeWithSlug);
    //toast.success("Coffee added successfully!");

    // ✅ Redirect to the coffee detail page
    router.push(`/coffees/${slug}`);
    return {
      id: slug,
      ...coffeeWithSlug,
    };
  } catch (error) {
    console.error("[addCoffee] Error:", error);
    //toast.error("Something went wrong while adding the coffee.");

    if (imageRef) {
      try {
        await deleteObject(imageRef);
        console.log("[addCoffee] Uploaded image deleted due to error.");
      } catch (deleteError) {
        console.error("[addCoffee] Error deleting image:", deleteError);
      }
    }

    throw new Error("Something went wrong while adding the coffee: " + error.message);
  }
}
