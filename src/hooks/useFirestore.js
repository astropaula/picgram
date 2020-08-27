import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    // Communicate with database
    useEffect(() => {
        // Returns a function
        const unsub = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc').onSnapshot((snap) => {
                // Retrieving documents
                let documents = [];
                snap.forEach(doc => {
                    documents.push({ ...doc.data(), id: doc.id })
                });
                setDocs(documents);
            })

        // Cleanup function - get rid of the collection.
        return () => unsub();
    }, [collection])

    return { docs };
}

export default useFirestore;