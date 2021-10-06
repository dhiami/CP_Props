import React from 'react';
import Profile from './Profile/Profile'

function App() {
  
  const handleName = (Name) => alert(`You are: ${Name}`);
  return(
      <div className="App" >
        
        <Profile  
        fullName="Missaoui Dhia" 
        profession="Full stack JS student"
        bio="Just keep moving" 
        handleName={handleName} 
        />
          
        </div>
    )
  
}

export default App;