import { useEffect, useState } from 'react';
import Auth from './components/Auth'
import {db} from './config/firebase'
import { collection,getDocs,addDoc,deleteDoc,doc,updateDoc } from 'firebase/firestore';

function App() {
  const [list, setList] = useState([])
  const [movieTitle, setMovieTitle] = useState('')
  const [movieRelease, setMovieRelease] = useState(0)
  const [movieAward, setMovieAward] = useState(false)
  const [newTitle, setNewTitle] = useState('')

  const ref = collection(db, 'movies')

  useEffect(() => {
    const getList= async() => {
      try{
        const data = await getDocs(ref)
        const list = data.docs.map(doc => ({...doc.data(), id: doc.id}))
        setList(list)
      }catch(err){
        
      }
    }
    getList()
    console.log(list)
  }, [])

  const addMovie = async() => {
    try{
      await addDoc(ref, {
        title: movieTitle,
        release: movieRelease,
        award: movieAward
      })
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Auth />

      <div>
        <input type="text" placeholder='Title' onChange={(e) => setMovieTitle(e.target.value)}/>
        <input type="number" placeholder='Release' onChange={(e) => setMovieRelease(e.target.value)}/>
        <label>Award</label>
        <input type="checkbox" onChange={(e) => setMovieAward(e.target.checked)}/>
        <button onClick={addMovie}>Add Movie</button>
      </div>

      {list?.map((item) => 
        <div key={item.id}>
          <h1>{item.title}</h1>
          <h3>{item.release}</h3>

          <input onChange={(e) => setNewTitle(e.target.value)} placeholder='New Title'/>
          <button onClick={()=>{updateDoc(doc(ref, item.id), {title: newTitle})}}>Update</button>

          <button onClick={() => deleteDoc(doc(ref, item.id))}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default App;
