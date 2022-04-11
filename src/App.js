import { useState } from 'react';
import './App.css';

function App() {
  const [code, setCode] = useState(new Array(6).fill(""))
  
  const handleChange = (element, index) => {

    setCode([...code.map((d,idx) => (idx === index) ? element.value : d)]);

    if(element.nextSibling){
      element.nextSibling.focus()
    }
  }
  
//   const deleteHandler = (e) => {
//     let key = e.keyCode || e.charCode;

//     if( key === 'Backspace' || key === 'Delete' )
//         setCode("");
// };

  return (
    <div className="card">
    <h2 className='title'>Verify your account</h2>
    <p className='subtitle'>We emailed you the six digit code to cool_guy@email.com
      <br/>
    Enter the code below to confirm your email address.</p>
    {code.map((data,index) => {
      return <input 
      className="code-input"
      type="text"
      name="code"
      maxLength="1"
      key={index}
      value={data}
      placeholder={["0"-"0"-"0"-"0"-"0"-"0"]}
      onChange={e => handleChange(e.target,index)}
      onFocus={e => e.target.select()}
      // onDelete={deleteHandler}
      />
    }) }
    <div className='footer'>
    <p className='endtitle'>This is design only. We didn't actually send you an email as we
    <br/>
    don't have your email, right?</p>
    </div>
    </div>
  );
}

export default App;
