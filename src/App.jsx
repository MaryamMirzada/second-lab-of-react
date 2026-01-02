import './App.css'
import Greeting from './component/Greeting'
import Info from './component/Info'

function App(){
  return (
    // <div>
    //   <Greeting name="Maryam" role="Teacher"></Greeting>
    //   <Greeting name="Nasiba" role="Doctor"></Greeting>
    //   <Greeting name="Nasrat" role="Nurse"></Greeting>
    //   <Greeting name="Jawid" role="Manager"></Greeting>
    //   <Greeting name="Jawid" role="Manager"></Greeting>
    // </div>
    <div>
      <Info name=" Shabnam" site="Kabul" role="student" org="FBH"></Info>
      <Info
        name="Maryam"
        site="Parwan"
        role="Midwife"
        org="Swedish committee"
      ></Info>
      <Info
        name="Muzhda"
        site="Kapisa"
        role="enginneer"
        org="WFP"
      ></Info>
    </div>
  );

}
export default App
