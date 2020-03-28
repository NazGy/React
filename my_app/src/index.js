import React from 'react';
import ReactDOM from 'react-dom';

// A Class Componenet
class Car extends React.Component {

    render() {
        return <h2>Hi, I am a Car!</h2>;
      }
}

// A function Component
function Drive() {
        return <h2>Drive the car!</h2>;
}

const myfirstelement = 
(<div>
    <h1>I am a Header.</h1>
    <h1>I am a Header too.</h1>
</div>)

ReactDOM.render(<Drive/>, document.getElementById('root'));

