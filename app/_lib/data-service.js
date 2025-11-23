import {
  collection,
  getDocs,
  query,
  where,
  addDoc,
  getDoc,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  arrayUnion,
} from "firebase/firestore/lite";
import { database, storage } from "./firebase";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { resizeImage } from "../_helpers/resizeImage";
import { revalidatePath } from "next/cache";
//import toast from "react-hot-toast";

export async function getCoffees({ user }) {
  try {
    const coffeesCollection = collection(database, `users/${user}/coffees`); // Corrected usage
    const coffeesData = await getDocs(coffeesCollection);
    const coffeesList = coffeesData.docs.map((doc) => doc.data());

    return coffeesList;
  } catch (error) {
    //toast.error("Something went wrong while receiving the coffees data.");
    throw new Error("Something went wrong while receiving the coffees data: " + error.message);
  }
}

export async function getAllCoffees() {
  try {
    const coffeesCollection = collection(database, `coffees`); // Corrected usage
    const coffeesData = await getDocs(coffeesCollection);
    const coffeesList = coffeesData.docs.map((doc) => doc.data());

    return coffeesList;
  } catch (error) {
    //toast.error("Something went wrong while receiving the coffees data.");
    throw new Error("Something went wrong while receiving the coffees data: " + error.message);
  }
}

export async function getCoffee(slug, user) {
  try {
    const coffeesCollection = collection(database, `users/${user}/coffees`);
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

export async function getCoffeeLoggedOut(slug) {
  try {
    const coffeesCollection = collection(database, `coffees`);
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

export async function addCoffee(coffeeData, user, router) {
  const slug = generateSlug(coffeeData.roasteryName, coffeeData.coffeeName);
  console.log("[addCoffee] Generated slug:", slug);
  const coffeesCollection = collection(database, `users/${user}/coffees`);
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

export async function addNewCoffee(coffeeDataUser, coffeeData, user, router) {
  const slug = generateSlug(coffeeData.roasteryName, coffeeData.coffeeName);
  console.log("[addCoffee] Generated slug:", slug);
  const coffeesCollectionUser = collection(database, `users/${user}/coffees`);
  const coffeesCollection = collection(database, `coffees`);

  const coffeeDocRefUser = doc(coffeesCollectionUser, slug);
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

    const coffeeWithSlugUser = {
      ...coffeeDataUser,
      slug,
      image: imageUrl || coffeeData.image || null,
    };

    await setDoc(coffeeDocRef, coffeeWithSlug);
    await setDoc(coffeeDocRefUser, coffeeWithSlugUser);
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

export async function updateCoffee(slug, coffeeData, user, router) {
  try {
    const coffeesCollection = collection(database, `users/${user}/coffees`);
    const q = query(coffeesCollection, where("slug", "==", slug));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      throw new Error("Coffee not found.");
    }

    const coffeeDocRef = querySnapshot.docs[0].ref;
    const existingData = querySnapshot.docs[0].data();

    let newImageUrl = coffeeData.image;
    let newImageRef = null;

    // 🖼 Handle image update
    if (coffeeData.image instanceof Blob) {
      if (existingData.image) {
        try {
          const oldImageRef = ref(storage, existingData.image);
          await deleteObject(oldImageRef);
          console.log("[updateCoffee] Old image deleted:", existingData.image);
        } catch (err) {
          console.warn("[updateCoffee] Failed to delete old image:", err);
        }
      }

      newImageRef = ref(storage, `coffee/${slug}.jpg`);
      const metadata = { contentType: "image/jpeg" };
      await uploadBytes(newImageRef, coffeeData.image, metadata);
      newImageUrl = await getDownloadURL(newImageRef);
    }

    const updatedCoffee = {
      ...existingData,
      ...coffeeData,
      image: newImageUrl || existingData.image || null,
    };

    await updateDoc(coffeeDocRef, updatedCoffee);

    if (router) router.push(`/coffees/${slug}`);

    return {
      id: coffeeDocRef.id, // Firestore ID
      ...updatedCoffee,
    };
  } catch (error) {
    console.error("[updateCoffee] Error:", error);
    if (newImageRef) {
      try {
        await deleteObject(newImageRef);
        console.log("[updateCoffee] Rolled back uploaded new image.");
      } catch (deleteError) {
        console.error("[updateCoffee] Error deleting uploaded new image:", deleteError);
      }
    }
    throw new Error("Something went wrong while updating the coffee: " + error.message);
  }
}

export async function getUser(email) {
  const usersCollection = collection(database, "users");
  const q = query(usersCollection, where("email", "==", email));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    return null; // No user found
  }

  return querySnapshot.docs[0].data(); // Return first matching user
}

export async function addUser(data) {
  try {
    if (!data.email) {
      throw new Error("Email is required to create a user");
    }

    const userRef = doc(database, "users", data.email);
    await setDoc(userRef, data);

    return data.email;
  } catch (error) {
    throw new Error("Error adding user: " + error.message);
  }
}

export async function updateUser(data, email) {
  try {
    const userRef = doc(database, "users", email);

    // --- BREWER IMAGE UPLOAD ---
    if (data.newBrewer && data.newBrewer.image instanceof Blob) {
      const fileName = `${data.newBrewer.mark}-${data.newBrewer.model}.jpg`
        .toLowerCase()
        .replace(/\s+/g, "-");

      const imageRef = ref(storage, `brewers/${email}/${fileName}`);
      const metadata = { contentType: "image/jpeg" };

      await uploadBytes(imageRef, data.newBrewer.image, metadata);

      const imageUrl = await getDownloadURL(imageRef);
      data.newBrewer.image = imageUrl;
    }

    // --- GRINDER IMAGE UPLOAD ---
    if (data.newGrinder && data.newGrinder.image instanceof Blob) {
      const fileName = `${data.newGrinder.mark}-${data.newGrinder.model}.jpg`
        .toLowerCase()
        .replace(/\s+/g, "-");

      const imageRef = ref(storage, `grinders/${email}/${fileName}`);
      const metadata = { contentType: "image/jpeg" };

      await uploadBytes(imageRef, data.newGrinder.image, metadata);

      const imageUrl = await getDownloadURL(imageRef);
      data.newGrinder.image = imageUrl;
    }

    // --- FIRESTORE UPDATES ---
    if (data.newBrewer) {
      await updateDoc(userRef, {
        coffeeMakers: arrayUnion(data.newBrewer),
      });
    }

    if (data.newGrinder) {
      await updateDoc(userRef, {
        grinders: arrayUnion(data.newGrinder),
      });
    }

    revalidatePath("/account");
    return true;

  } catch (error) {
    throw new Error("Error updating user: " + error.message);
  }
}


export async function deleteCoffee(slug, user) {
  try {
    const coffeeDocRef = doc(database, `users/${user}/coffees`, slug);
    const coffeeDoc = await getDoc(coffeeDocRef);

    if (!coffeeDoc.exists()) {
      throw new Error("Coffee not found.");
    }

    const coffeeData = coffeeDoc.data();

    // Delete image from storage if it's a Firebase-hosted image
    if (coffeeData.image && coffeeData.image.includes("firebasestorage.googleapis.com")) {
      const imageRef = ref(storage, `coffee/${slug}.jpg`);
      try {
        await deleteObject(imageRef);
        console.log(`[deleteCoffee] Image deleted for slug: ${slug}`);
      } catch (imageError) {
        console.warn(`[deleteCoffee] Failed to delete image: ${imageError.message}`);
      }
    }

    // ✅ Hard delete the Firestore document
    await deleteDoc(coffeeDocRef);
    console.log(`[deleteCoffee] Document deleted for slug: ${slug}`);
  } catch (error) {
    console.error(`[deleteCoffee] Error: ${error.message}`);
    throw new Error("Failed to delete coffee: " + error.message);
  }
}
