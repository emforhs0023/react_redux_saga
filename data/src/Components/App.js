import React from 'react';
import Router from "./Router";
import GlobalStyles from "./GlobalStyles";


const App = () => {
	return (
		<div className="App">
			<div>
				<GlobalStyles />
				<Router />
			</div>
			
		</div>

		
	);	
}

export default App;
