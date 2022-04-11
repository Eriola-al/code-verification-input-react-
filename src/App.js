import { useState } from 'react';
import './App.css';

function App() {
  const [code, setCode] = useState(new Array(6).fill(""))
  
  const handleFocus = (e, index) => {

    if(isNaN(e.target.value)) return false;

    const updateCode = [...code];

    if (e.target.value) {
      updateCode[index] = e.target.value;
      if (e.target.nextSibling) e.target.nextSibling.focus();
    }
    if (e.target.value === "") {
      updateCode[index] = "";
      if (e.target.previousSibling)
        e.target.previousSibling.focus();
    }
    setCode(updateCode);
  };

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
      onChange={(e) => handleFocus(e, index)}
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