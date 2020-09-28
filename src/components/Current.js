import React from 'react';
import { format, fromUnixTime } from 'date-fns';
import { List, ListItem } from '@material-ui/core';
  
export default ( props ) => {

    return (
        <div className="Current">
            <List>
                <ListItem>
                    {props.data.current.temp}
                    <img alt="" src={`http://openweathermap.org/img/wn/${props.data.current.weather[ 0 ].icon}@2x.png`} />
                    {format( fromUnixTime( props.data.current.dt ), 'ccc, d MMMM, HH:mm' )}
                </ListItem>
                <ListItem divider>
                    Feels like: {props.data.current.feels_like}
                </ListItem>
                <ListItem divider>
                    Wind Speed: {props.data.current.wind_speed}
                </ListItem>
                <ListItem divider>
                    Humidity: {props.data.current.humidity}
                </ListItem>
            </List>
        </div>
    );
};