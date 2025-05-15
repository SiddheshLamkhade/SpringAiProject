import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageGenerator from './ImageGenerator';

function App() {
  const [activeTab, setActiveTab] = useState('img-generator');
  const handleTabChange=(tab)=>{
    setActiveTab(tab);
  }
  return (<>
    <div className="App">    

      <button className={activeTab=== 'image-generator'   ?   'active'   :   ''} 
      onClick={()=>handleTabChange('image-generator')}>Image Generator</button>

      <button className={activeTab==='chat'   ?   'active'  :  ''} 
      onClick={()=>handleTabChange('chat')}>Chat</button>

      <button className={activeTab==='recipe-generator'  ?  'active'   :   ''}
      onClick={()=>handleTabChange('recipe-generator')}>Recipe Generator</button>

    </div>
    <div>
      {activeTab === 'image-generator' && <ImageGenerator/>}
      {activeTab === 'chat' && <ChatGenerator/>}
      {activeTab === 'recipe-generator' && <RecipeGenerator/>}
    </div>
    </>
  )
}

export default App
