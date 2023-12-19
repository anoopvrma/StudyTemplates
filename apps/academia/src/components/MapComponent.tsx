import { Box } from '@mui/material';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import Image from 'next/image';
import mapImage from '@/public/map.png'

function MapComponent() {
    const position = { lat: 53.54992, lng: 10.00678 };

    return (
        <Box position={"relative"} minHeight={"280px"}>
            <Image src={mapImage.src} alt="Laptop Image" fill>

            </Image>
        </Box>
    );

    /**
    
    Uncomment for production use when we have apiKey from Google APIs
     
    return (
        <APIProvider apiKey={''}>
            <Map center={position} zoom={10}>
                <Marker position={position} />
            </Map>
        </APIProvider>
    );
    */
}

export default MapComponent;