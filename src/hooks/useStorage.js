import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

// Keep firebase logic outside the components (UploadForm)

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // reference to the file inside default firebase storage - when file will be uploaded it should have that name
        //where file should be saved
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images');

        // Uploading file to the reference. Asynchronous, attached event listner - when file changes, snap function starts.
        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            console.log(createdAt);
            // Add new document.
            await collectionRef.add({ url, createdAt });
            setUrl(url);
        });

    }, [file]); //useEffect is on when changes in file happens

    return { progress, url, error }
}

export default useStorage;