import React from 'react';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';
import config from '../../config.js';
import MapProperty from './mapProperty.jsx';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.center = {
          lat: this.props.currentProperty.latitude,
          lng: this.props.currentProperty.longitude
        }

        this._onClick = this._onClick.bind(this);
        this.zoom = 15;

        this.boundsChange = this.boundsChange.bind(this);
    }

    boundsChange(obj) {
      console.log('obj: ', obj);
      console.log('this.props.properties: ', this.props.properties);
      axios.post('/mapChange', obj).then(response => {
        console.log('response from mapChange: ', response)
        console.log('this.props ', this.props)
        this.props.handleOnChange(response.data)
      });
      
    }

    _onClick(obj) {
      console.log(obj.x, obj.y, obj.lat, obj.lng, obj.event);
    }

    // currently renders all of the properties in state
    // considering changing this to be only the properties that fit the range of the screen
    render() {
      
        return (
          // Important! Always set the container height explicitly
          <div style={{ height: '50vh', width: '100%' }}>

            <GoogleMapReact bootstrapURLKeys={{ key: config }} defaultCenter={this.center} center={{lat: this.props.currentProperty.latitude, lng: this.props.currentProperty.longitude}} defaultZoom={this.zoom} >
            {this.props.properties.map( (property, i) => {
              return (
                    <MapProperty key={i} lat={property.latitude} lng={property.longitude} property={property} currentProperty={this.props.currentProperty} changeCurrentProperty={this.props.changeCurrentProperty}/>
                )
            })}
            
            </GoogleMapReact>
          </div>
        );
    }
}

module.exports = Map;

