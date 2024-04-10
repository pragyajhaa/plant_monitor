import Navbar from './Navbar.jsx'
import './Disease.css'
import diseaseList from "./data/diseaseList.json"

function Disease() {
  const list = diseaseList.diseaseList;

  return (

    <div className='container'>
      <Navbar/>
      <h1>Disease GUI</h1>
      <div className='diseases'>
          {list.map((list) => (
            <div className='list' key={list.plant_id}>
              <p className='plant_id'>plant#{list.plant_id}</p>
              <h2 className='title'>{list.title}</h2>
              <p className='content'>{list.content}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Disease