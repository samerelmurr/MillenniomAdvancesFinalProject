import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
// import allReducer from './reducer';

// const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// class RouterNavigationSample extends React.Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <Router>
//           <div className="container">
//             <>
//               <Route exact path="/" render={(props) => <Table {...props} />} />

//               <Route
//                 path="/userform"
//                 render={(props) => <UserForm {...props} />}
//               />
//             </>
//           </div>
//         </Router>
//       </Provider>
      
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<RouterNavigationSample />, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
