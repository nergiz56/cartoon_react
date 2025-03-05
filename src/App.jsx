import './index.css'
import Header from './components/Header/Header.jsx'
import Network from './components/Network.jsx'
import { Cartoon_Network, Example } from './data.js'
import Button from './components/Button.jsx'
import { useState } from 'react'



function App() {

const [selectedNetwork, setSelectedNetwork]= useState("BugsBunny");

function handleSelect(selectedButonNetwork){

  setSelectedNetwork(selectedButonNetwork);
}

  return (
    <>
      <Header/>
        <main>
          <section id='core-concepts' >
          <h2>CarTonn NetWork</h2>
          <ul>
            {Cartoon_Network.map((network_item) => (
              <Network key={network_item.title} {...network_item}/>
            ))} 

              {/* Bu kod alanını dinamikleştiriceğiz!
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
                image={Cartoon_Network[3].image} />*/}
          </ul>
          </section>
          <section id="examples">
            <h2><br></br></h2>
            <menu>
            <Button isSelected={selectedNetwork==='BugsBunny'}  onSelect={()=> handleSelect('BugsBunny')}>Bugs Bunny</Button>
            <Button isSelected={selectedNetwork==='Sirinler'} onSelect={()=> handleSelect('Sirinler')}>Şirinler</Button>
            <Button isSelected={selectedNetwork==='PowerpuffGirls'} onSelect={()=> handleSelect('PowerpuffGirls')}>Powerpuff-Girls</Button>
            <Button isSelected={selectedNetwork==='PinkPanther'} onSelect={()=> handleSelect('PinkPanther')}>Pink-Panther</Button>
            </menu>

              
                <div id='tab-content'>
                <h3>{Example[selectedNetwork].title}</h3>
                <p>{Example[selectedNetwork].description}</p>
                </div>
          </section>
        </main>
           
     
    </>
  )
}

export default App
