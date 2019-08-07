import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Map from './map.jsx';
import NeighborhoodInfo from './neighborhoodInfo.jsx';
import NearbyHomes from './nearbyHomes.jsx';


export default class NeighborhoodSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            properties: [],
            currentProperty: undefined
        }

        this.getProperties = this.getProperties.bind(this);
        this.changeCurrentProperty = this.changeCurrentProperty.bind(this);
    }

    componentDidMount() {
        this.getProperties();
    }

    getProperties() {
        Axios.get('/items')
        .then(response => this.setState({
            properties: response.data,
            currentProperty: response.data[window.location.pathname.substring(1) - 1] || response.data[0]
        }))
        .catch(err => console.log('error fetching data'))
    }

    changeCurrentProperty(propertyId) {
        // console.log('propertyId when clicked: ', propertyId);
        
        for (var i = 0; i < this.state.properties.length; i++) {
            if (this.state.properties[i].uniqueId === propertyId) {
                this.setState({
                    currentProperty: this.state.properties[i]
                })
            }
        }
    }

    render() {
        if (this.state.properties.length > 0) {
            return (
                <div>
                    <NeighborhoodInfo properties={this.state.properties} currentProperty={this.state.currentProperty}/>
                    <Map properties={this.state.properties} currentProperty={this.state.currentProperty} changeCurrentProperty={this.changeCurrentProperty}/>
                    <NearbyHomes properties={this.state.properties}/>
                </div>
            );
        } else {
            return (
                <div></div>
            )
        }
    }
}







// import React from 'react';
// import Axios from 'axios';
// import Map from './map.jsx';


// export default class App extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             properties: this.props.coordinates,
//             currentProperty: this.props.coordinates[0]
//         }

//         this.getProperties = this.getProperties.bind(this);
//         this.changeCurrentProperty = this.changeCurrentProperty.bind(this);
//         this.handleOnChange = this.handleOnChange.bind(this);
//     }

//     componentDidMount() {
//         console.log('getting here');
//         this.getProperties();
//     }

//     getProperties() {
//         // change axios to a post request
//         // pas this function down as a prop
//         // pass the bounds obj to it
//         // send the bounds obj to the /mapChange route
//         // populate the state based on the bounds of the window
        
        
//         // Axios.get('/items')
//         //     .then(response => {   
                
                
//         //         return this.setState({
//         //             properties: response.data,
//         //             currentProperty: response.data[window.location.pathname.substring(1) - 1] || response.data[0]
//         //         }) 
//         //     })
//         //     .catch(err => console.log('error fetching data'))
//     }

//     changeCurrentProperty(propertyId) {
//         for (var i = 0; i < this.state.properties.length; i++) {
//             if (this.state.properties[i].uniqueId === propertyId) {
//                 this.setState({
//                     currentProperty: this.state.properties[i]
//                 })
//             }
//         }
//     }

//     handleOnChange(data) {
//         // console.log('data inside handleOnChange Func: ', data) 
//         this.setState({
//             properties: data,
//             currentProperty: data[0] 
//         })
//         // console.log('this.state inside index.jsx: ', this.state)
//     }

//     render() {
//         if (this.state.properties.length > 0) {
//             return (
//                 <div>
//                     <Map handleOnChange={this.handleOnChange} properties={this.state.properties} currentProperty={this.state.currentProperty} changeCurrentProperty={this.changeCurrentProperty}/>
//                 </div>
//             );
//         } else {
//             return (
//                 <div>No Properties yet Brett</div>
//             )
//         }
//     }
// }

// module.exports = App;
