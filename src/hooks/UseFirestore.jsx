import {useState, useEffect}  from 'react'
import { db, onSnapshot, orderBy, query, collection } from '../firebase/config'
const UseFirestore = (allData) => {
    const [docs, setDocs] = useState([])

    useEffect(()=>{
        try{
            const q = query(collection(db, allData), orderBy('timeStamps', 'desc'))
            const unsub = onSnapshot(q, (snap) => {
             let documents = [];
             snap.forEach((doc)=>{
                 documents.push({...doc.data(), id:doc.id})
             })
             setDocs(documents)
           });
           
           return ()=>  unsub();
        }catch(error){
            console.log(error)
        }
           

    },[collection])
  return {docs}
}

export { UseFirestore}