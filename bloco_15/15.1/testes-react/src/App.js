    // App.js
    import React from 'react';
    import './App.css';

    function App() {
      return (
        <div className="App">
          <label htmlFor="id-email">
            Email
          </label>
          <input id="id-email" type="email" />
          <input id="btn-send" type="button"  value="Send" data-testid="id-send" />
          <input id="btn-back" type="button"  value="Back" />
        </div>
      );
    }

    export default App;