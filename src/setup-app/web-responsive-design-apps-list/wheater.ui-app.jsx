import { faCloud, faCloudMeatball, faCloudShowersHeavy, faCloudSun, faCloudSunRain, faSun, faWind } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

  /**Flexbox-grid-sass-and-animations app version 53 -
   * WheaterUiApp- Features:
   * 
   *      --> Applying 'queries'
   *   
   * Note: pending make it dynamic
   */

const WheaterUiApp = () => {

    const cloud = <FontAwesomeIcon icon={faCloud}/>
    const sun = <FontAwesomeIcon icon={faSun}/>
    const cloudsun = <FontAwesomeIcon icon={faCloudSun}/>
    const wind = <FontAwesomeIcon icon={faWind}/>
    const sunrain = <FontAwesomeIcon icon={faCloudSunRain}/>
    const showersheavy = <FontAwesomeIcon icon={faCloudShowersHeavy}/>
    const cloudmeatball = <FontAwesomeIcon icon={faCloudMeatball}/>

    return(
        <Wrapper>
            <h2>Wheater Ui App</h2>
                
            <section className="weather">
                <h1>sydney australia</h1>
                {/**weather infromation */}
                <div className="weather_info_temp">

                    <div className="weather__info">

                        <div className="weather__info--date">
                            <p>thursday, apr 30</p>
                            <p>sunny</p>
                            <div className="weather__info--date__icon__temp">
                                <i>{sun}</i>
                                <p>24 <sup>&#8451;</sup></p>
                            </div>
                        </div>

                        <div className="weather__info--data">
                            <p>precipitation: 10%</p>
                            <p>humidity: 5%</p>
                            <p>wind: 4 kmpm NW</p>
                        </div>    
                        
                        
                </div>
                {/**weather temperatures */}
                <div className="weather__temp">
                    <div className="weather__temp--monday">
                        <p>monday</p>
                        <i>{cloudsun}</i>
                        <p>20 <sup>&#8451;</sup></p>
                        <p>16 <sup>&#8451;</sup></p>
                    </div>
                    <div className="weather__temp--tuesday">
                        <p>tuesday</p>
                        <i>{sun}</i>
                        <p>20 <sup>&#8451;</sup></p>
                        <p>16 <sup>&#8451;</sup></p>
                    </div>
                    <div className="weather__temp--wednesday">
                        <p>wednesday</p>
                        <i>{wind}</i>
                        <p>20 <sup>&#8451;</sup></p>
                        <p>16 <sup>&#8451;</sup></p>
                    </div>
                    <div className="weather__temp--thursday">
                        <p>thursday</p>
                        <i>{sunrain}</i>
                        <p>18 <sup>&#8451;</sup></p>
                        <p>16 <sup>&#8451;</sup></p>
                    </div>
                    <div className="weather__temp--friday">
                        <p>friday</p>
                        <i>{cloud}</i>
                        <p>14 <sup>&#8451;</sup></p>
                        <p>10 <sup>&#8451;</sup></p>
                    </div>
                    <div className="weather__temp--saturday">
                        <p>saturday</p>
                        <i>{showersheavy}</i>
                        <p>14 <sup>&#8451;</sup></p>
                        <p>10 <sup>&#8451;</sup></p>
                    </div>
                    <div className="weather__temp--sunday">
                        <p>sunday</p>
                        <i>{cloudmeatball}</i>
                        <p>23 <sup>&#8451;</sup></p>
                        <p>18 <sup>&#8451;</sup></p>
                    </div>
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