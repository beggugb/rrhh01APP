import React from "react";

import { Route, Switch } from "react-router-dom";
import InicioView from "../../pages/RRHH/InicioView"
function Post(){
return(
    <Switch>
        <Route path="/inicio/" component={InicioView}/>                
    </Switch>
)    
}
export default Post;
