
// day7
/*session task-profile name changes
implement a react component that allows users to change their profile name using the context api
-the component should consists of the two parts : a parent component called app and
- a child component called profile.


the app copmponent should:
   -import necessary dependencies from the react library
   -create a context object using the createcontext function from react.
   -define a state variable called profile name using the usestate hook anmd set its initial value to an empty string.
   -wrap the profile component with the context provider component,passing the profile name state and its corresponding settet fumction
   as the value prop.

the profile component should:
-import necessary dependencies from the react library
-use the usecontext hook to access the profile name state variable and its setter fumction from the the context.
-render an input field where users can enter thier profile name:with its value set to the profilename state variable
-add an onchange event handler to the input field that updates the profilename state variable with the entered value using the setter function
- make sure to export the app component as the default import.


*/


import React, { createContext, useContext, useState } from 'react'

const ProfileContext = createContext();

function Profile() {
  const { profileName, setProfileName } =useContext(ProfileContext)
  
  let onChangeProfileNameHandler = (event) => {
    setProfileName(event.target.value);
    //console.log(event.target.value);

  }
  
  
  
  return (
    <div>
      <h2>Profile Name:{profileName }</h2>
      <input
        type="text"
        value={profileName}
        onChange={onChangeProfileNameHandler}
      />
    </div>
    
  )
}





function App() {

  const [profileName, setProfileName] = useState('');

  return (
    <div>
      <ProfileContext.Provider value={{ profileName, setProfileName }}>
        <Profile />
      </ProfileContext.Provider>
      
    </div>
  )
}

export default App