import React from 'react';
import './styles.css' 

const weatherConfig = {
    summer: {
        text: "Simbora pegar um bronze",
        iconName: 'sun'
    },
    winter: {
        text: "Let it go",
        iconName: 'snowflake'
    }
}

const getWeather = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const WeatherDisplay = props => {

    const season = getWeather(props.lat, new Date().getMonth());
    const { text, iconName } = weatherConfig[season]

    return (
        <div className={`weather-display ${season}`}>
            <i className={`massive ${iconName} icon`} />
            <h1>
                {text}
            </h1>
            <i className={`massive ${iconName} icon`} />
        </div>
    );
};

export default WeatherDisplay;