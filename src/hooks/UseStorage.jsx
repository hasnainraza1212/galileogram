import { useState, useEffect } from "react";
import { storage, ref, uploadBytesResumable, getDownloadURL, db,addDoc, collection, serverTimestamp } from "../firebase/config";

const useStorage = (file) => {
  const [urlError, setUrlError] = useState(null);
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // Create a reference to the file in Firebase storage
    const mountainsRef = ref(storage, file.name);

    // Upload the file using resumable upload
    const uploadTask = uploadBytesResumable(mountainsRef, file);

    // Event listener for upload progress
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.floor(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
        console.log(progress);
      },
      (error) => {
        setUrlError(error);
        console.log(error);
      },
      async () => {
        try {
          // Get the download URL after successful upload
          const url = await getDownloadURL(uploadTask.snapshot.ref);

          // Save the download URL and current timestamp to Firestore
          const docRef = await addDoc(collection(db, "images"), {
            url,
            timeStamps: serverTimestamp(),
          });

          console.log("Document written with ID: ", docRef.id);
          setUrl(url);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
    );

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      uploadTask.cancel();
    };
  }, [file]);

  return { progress, url, urlError };
};

export { useStorage };
