import React from "react";

function App() {

  const [munch, setMunch]=React.useState(3);

  return (
    <div className="App">
      <div className="cookie" onClick={()=>setMunch(munch-1)}>
          {munch>=3&&<div className="munch">1</div>}
          {munch>=2&&<div className="munch">2</div>}
          {munch>=1&&<div className="munch">3</div>}
      </div>
    </div>
  );
}

export default App;
