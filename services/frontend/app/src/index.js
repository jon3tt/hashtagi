/* index.js */
import {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from 'react-router-dom';

// En ole vielä keksinyt näille paikkaa....
// TODO: Tee se?
Date.prototype.addHours = function(hoursToAdd) {
    this.setHours(this.getHours()+hoursToAdd);
    return this;
}
Date.prototype.addMinutes = function(minutesToAdd)  {
    this.setMinutes(this.getMinutes() + minutesToAdd);
    return this;
}


ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router>
            <App />
        </Router>
    </StrictMode>
)