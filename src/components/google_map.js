import React from 'react'; // eslint-disable-line no-unused-vars
import { GoogleMapLoader, GoogleMap} from 'react-google-maps'; // eslint-disable-line no-unused-vars

export default (props) => {
    return (
        <GoogleMapLoader
            containerElement={ <div style={{height: '100%'}}></div> }
            googleMapElement={
                <GoogleMap
                    defaultZoom={12}
                    defaultCenter={{lat: props.lat, lng: props.lon}}
                />
            }
        />
    );
};
