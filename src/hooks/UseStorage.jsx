import { useState, useEffect } from "react";
import { storage, ref, uploadBytesResumable, getDownloadURL, db, addDoc, collection, serverTimestamp } from "../firebase/config";
const useStorage = (file) => {
  const [urlError, setUrlError] = useState(null);
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);
  useEffect(() => {
    const mountainsRef = ref(storage, file.name);
    const uploadTask = uploadBytesResumable(mountainsRef, file);
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
          const url = await getDownloadURL(uploadTask.snapshot.ref);
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
    return () => {
      uploadTask.cancel();
    };
  }, [file]);
  return { progress, url, urlError };
};
export { useStorage };
