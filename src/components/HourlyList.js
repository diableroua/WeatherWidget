import React from 'react';
import { format, fromUnixTime } from 'date-fns';
import Hour from './Hour';
import Grid from '@material-ui/core/Grid';

export default ( props ) => {

    const setHours = ( ) => {
        if( !props.data.hourly ) { return; }

        const hours = [ ];

        props.data.hourly.forEach( ( hour, index ) => {
            if( index % 3 === 0 && format( fromUnixTime( props.data.current.dt ), 'ccc' ) === format( fromUnixTime( hour.dt ), 'ccc' ) ) {
                hours.push( <Grid item xs={4} sm={2} key={index}>
                                <Hour hourData={hour} isLoading={props.isLoading} />
                            </Grid> );
            }
        } );

        return hours;
    };

    return (
        <div className="HourlyList">
            <Grid container spacing={3}>
                {setHours( )}
            </Grid>
        </div>
    );
};