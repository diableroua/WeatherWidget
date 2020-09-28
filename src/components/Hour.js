import React from 'react';
import { format, fromUnixTime } from 'date-fns';

const HourStyle = {
    textAlign: 'center',
};

const HourIconStyle = {
    maxWidth: '100%',
};

export default ( props ) => {

    return (
        <div className="Hour" style={HourStyle}>
            <div className="time">{format( fromUnixTime( props.hourData.dt ), 'HH:mm' )}</div>
            <div className="icon"><img style={HourIconStyle} alt="" src={`http://openweathermap.org/img/wn/${props.hourData.weather[ 0 ].icon}@2x.png`} /></div>
            <div className="temp">{props.hourData.temp}</div>
            {/* <List>
                <ListItem>
                    
                </ListItem>
                <ListItem divider>
                    Feels like: {props.hourData.feels_like}
                </ListItem>
                <ListItem divider>
                    Wind Speed: {props.hourData.wind_speed}
                </ListItem>
                <ListItem divider>
                    Humidity: {props.hourData.humidity}
                </ListItem>
            </List> */}
        </div>
    );
};