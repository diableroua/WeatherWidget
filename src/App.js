import React, { useState, useEffect } from 'react';
import axios from 'axios';
import currentPosition from './currentPosition';
import { CircularProgress, Container, Grid } from '@material-ui/core';
import Current from './components/Current';
import HourlyList from './components/HourlyList';

function App( ) {
	const [ data, setData ] = useState( { } );
	const [ isLoading, setLoading ] = useState( true );

	useEffect( ( ) => {
        getData( );
    }, [ ] );
    
    const getData = async ( ) => {
        const position = await currentPosition( );

        axios.get( `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&exclude=daily,minutely,alerts&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_APIKEY}` )
        .then( function( response ) {
            setData( response.data );
            setLoading( false );
            console.log( response );
        } )
        .catch( function( error ) {
            console.log( error );
        } );
	};
	
  	return (
		<div className="App">
			<Container maxWidth="md">
				{isLoading
					?
						<Grid container spacing={3} justify="center">
							<Grid item>
								<CircularProgress />
							</Grid>
						</Grid>
					:
						<Grid container spacing={3} justify="center">
							<Grid item md={4}>
								<Current data={data} isLoading={isLoading} />
							</Grid>
							<Grid item md={8}>
								<HourlyList data={data} isLoading={isLoading} />
							</Grid>
						</Grid>
				}
			</Container>
		</div>
	);
}

export default App;