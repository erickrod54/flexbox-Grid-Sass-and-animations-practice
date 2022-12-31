import React from "react";
import styled from "styled-components";
import moment from "moment";
import { useWebResponsiveContext } from "../../apps-context/web.responsive.context";

  /**Flexbox-grid-sass-and-animations app version 60.08 -
   * WheaterUiApp- Features:
   * 
   *      ---> Redirecting states and features by 
   *          'useWebResponsiveContext()'. 
   * 
   *      --> Changing versioning to 2 digits.  
   *   
   * Note: pending make it dynamic
   */

const WheaterUiApp = () => {
    
    const { weatherAppIcons } = useWebResponsiveContext()
    console.log('weatherAppIcons data ==>', weatherAppIcons)
    
    const precipitation = weatherAppIcons[7].precipitation;
    const humidity = weatherAppIcons[7].humidity;
    const windspeed = weatherAppIcons[7].wind;
    const date = weatherAppIcons[7].date;

    /**single icons */
    const sun = weatherAppIcons[1].icon

    console.log('weatherAppIcons data ==>', precipitation, humidity, windspeed, date)

    return(
        <Wrapper>
            <h2>Wheater Ui App</h2>
                
            <section className="weather">
                <h1>sydney australia</h1>
                {/**weather infromation */}
                <div className="weather_info_temp">

                    <div className="weather__info">
                    thursday, apr 30
                        <div className="weather__info--date">
                            <p>{moment(date).format('MMMM Do, YYYY')}</p>
                            <p>sunny</p>
                            <div className="weather__info--date__icon__temp">
                                <i>{sun}</i>
                                <p>24 <sup>&#8451;</sup></p>
                            </div>
                        </div>

                        <div className="weather__info--data">
                            <p>precipitation: {precipitation}</p>
                            <p>humidity: {humidity}</p>
                            <p>wind: {windspeed}</p>
                        </div>    
                        
                        
                </div>
                {/**weather temperatures */}
                <div className="weather__temp">
                    {weatherAppIcons.filter((day) => day.id < 8 ).map((everyday) => {
                        const { id, day, icon, temperature1, temperature2 } = everyday

                        return(
                            <div key={id} className={`weather__temp--${day}`}>
                                <p>{day}</p>
                                <i>{icon}</i>
                                <p>{temperature1} <sup>&#8451;</sup></p>
                                <p>{temperature2} <sup>&#8451;</sup></p>
                            </div>
                        )
                    })}
                </div>
                        
                </div>
            </section>
        </Wrapper>        
    )
}

const Wrapper = styled.div`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
:root{
    font-size: 62.5%;
    
}

background-color: #0f9b8e;
color: white;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

/**rem - relative to the root element */
p{
    font-size: 1.5rem;
    margin: 0.5rem 0;
}

i{
    font-size: 5rem;
}

sup{
    font-size: 0.8rem;
}

::selection{
    color: #fcc000;
    background-color: #ff7052;
}

.weather{
    margin: 2rem auto 0;
    
    @media screen and (max-width:600px){
                
        h1{
            padding: 0 2rem;
            font-size: 2rem;
            font-weight: 600;
        }

       i{
        font-size: 2.5rem;
       }

       p{
        font-size: 1.2rem;
       }
    }
    
}

h1{
    text-align: center;
    font-size: 6rem;
    letter-spacing: 0.4rem;
    font-weight: 300;
}


.weather_info_temp{
    padding: 4rem;
    
    @media screen and (max-width:600px){
        padding: 1rem;
        
    }
    
}


.weather__info{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 5rem 0;
    
    @media screen and (max-width:600px){
        flex-direction: flex-end ;
        
    }

}

.weather__temp{
    display: flex;
    justify-content: space-evenly;
    
    
    @media screen and (max-width:800px){
        display: flex;
        flex-direction: column;

        div{
            display: flex;
            justify-content: space-evenly;
            margin-bottom: 2rem;
        }
    }

}


`

export default WheaterUiApp;