import './index.css'
import Header from './components/Header/Header.jsx'
import Network from './components/Network.jsx'
import { Cartoon_Network } from './data.js'



function App() {


  return (
    <>
      <Header/>
        <main>
          <section id='core-concepts' >
          <h2>CarTonn NetWork</h2>
          <ul>
              <Network
                title={Cartoon_Network[0].title}
                description={Cartoon_Network[0].description}
                image={Cartoon_Network[0].image}
              /><Network
                title={Cartoon_Network[1].title}
                description={Cartoon_Network[1].description}
                image={Cartoon_Network[1].image}
              /><Network
                title={Cartoon_Network[2].title}
                description={Cartoon_Network[2].description}
                image={Cartoon_Network[2].image}
              /><Network
                title={Cartoon_Network[3].title}
                description={Cartoon_Network[3].description}
                image={Cartoon_Network[3].image}
          />
           
          </ul>
          </section>
        </main>
           
     
        
    

       
    </>
  )
}

export default App
