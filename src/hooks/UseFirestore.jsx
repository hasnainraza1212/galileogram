import {useState, useEffect}  from 'react'
import { db, onSnapshot, orderBy, query, collection, limit } from '../firebase/config'
import { startAfter } from 'firebase/firestore'
const UseFirestore = (allData,  limiter) => {
    const [docs, setDocs] = useState([])
    const [lastItem, setLastItem] = useState(null)

    useEffect(()=>{
        try{
            const q = query(collection(db, allData), orderBy('timeStamps', 'desc'), limit(`${limiter}`, startAfter(lastItem || 0)))
            const unsub = onSnapshot(q, (snap) => {
             let documents = [];
             snap.forEach((doc)=>{
                 documents.push({...doc.data(), id:doc.id})
             })
             setLastItem(documents.length-1)
             setDocs(documents)
           });
           
           return ()=>  unsub();
        }catch(error){
            console.log(error)
        }
           

    },[allData])
  return {docs}


  
}

export { UseFirestore}