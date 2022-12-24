import React, { useContext, useState } from "react";
import { appWebFundamentalsData, uiColorData, uiContrastAndScaleData, uiFormData, uiTypographyData, UIWhitespaceAndAlignmentData, uiWhiteSpaceData } from "../data";

/**Flexbox-grid-sass-and-animations app version 59 -
 * 'UIDesignContext' - Features:
 * 
 *      --> Relocating all features and states
 *          related with ui design fundamentals.
 * 
 * Note: By this version everything is done in
 * this component.
 */

const UIDesignContext = React.createContext()

const UIDesignProvider = ({ children }) => {
    
    /**here i build state and handlers for UI Alignment */
    const [ line, setLine ] = useState('')
    const [ marginleft, setMarginleft ] = useState('')
    const [ transformnone, setTransformnone ] = useState('')
    
    const handleAlignment = () => {
        setMarginleft(!marginleft);
        setTransformnone(!transformnone);
        console.log('toggle marginleft ==>',marginleft, 'and toggle transformnone ==>', transformnone)
    }
    
    const handleLine = () => {
        setLine(!line)
        console.log('this is the handle line ',line)
    }
    
    /**here i build state and handlers for 'UIWhiteSpceApp' */
    const [ basketball, setBasketball ] = useState('')
    
    const handleBasketball = () => {
        setBasketball(!basketball)
    }
    
    /**here i build states and handlers for 'UIWhitespaceAndAlignmentApp'*/
    const [ spaceAndAligment, setSpaceAndAligment ] = useState(false)
    
    const handleSpaceAndAligment = () => {
        setSpaceAndAligment(!spaceAndAligment)   
        console.log(spaceAndAligment)
    }
    
    /**here i build states and handlers for UI contrast and scale */
    const [ sectionimprove, setSectionimprove ] = useState(false)
    
    const handleImprove = () => {
        setSectionimprove(!sectionimprove)
        console.log(sectionimprove)
    }
    
    /**here i build state and handlers for 'UITypographyApp' */
    const [ improvetypo, setImprove ] = useState(false)
    
    const handleImproveTypo = () => {
        setImprove(!improvetypo)
    }
    
    /**here i build states and handlers for 'UIColorApp' */
    /**web fundamentals */
    const [ color, setColor ] = useState(false)
    
    const handleColor = () => {
        setColor(!color)
        //console.log(color)    
    }

    /**here i build states and handlers for 'FORM UI' - first challenge */
    const [ improveform, setImproveform ] = useState(false)

    const handleImproveform = () => {
        setImproveform(!improveform)
    }
    
    /**here i build states and handlers for 'VisualHierarchyApp' */
    const [ important, setImportant ] = useState(false)
    const [ important1, setImportant1 ] = useState(false)
    const [ important2, setImportant2 ] = useState(false)
    const [ important3, setImportant3 ] = useState(false)
    const [ important4, setImportant4 ] = useState(false)
    const [ align, setAlign ] = useState(false)
    const [ lowcontrast, setLowcontrast ] = useState(false)
    const [ scale, setScale ] = useState(false)
    const [ improvevisual, setImprovevisual ] = useState(false)
    

    const handleImportantcecircle = () => {
        setImportant(!important)
    }

    const handleImportantcecircle1 = () => {
        setImportant1(!important1)
    }

    const handleImportantcecircle2 = () => {
        setImportant2(!important2)
    }

    const handleImportantcecircle3 = () => {
        setImportant3(!important3)
    }

    const handleImportantcecircle4 = () => {
        setImportant4(!important4)
    }

    const handleAling = () => {
        setAlign(!align)
        console.log(align)
    }

    const handleLowcontrast = () => {
        setLowcontrast(!lowcontrast)
        console.log(lowcontrast)
    }

    const handleScale = () => {
        setScale(!scale)
        console.log('this is the scale value ==>',scale)
    }

    const handleImprovevisual = () => {
        setImprovevisual(!improvevisual)
        console.log('this is the scale value ==>',improvevisual)
    }

    /**here i build states and handlers for UIDesignChallenge movies
     * - second challenge */
     const [ improvemovies, setImprovemovies ] = useState(false)

     const handleImprovemovies = () => {
         setImprovemovies(!improvemovies)
         console.log(improvemovies)
     }
    
    return(
        <UIDesignContext.Provider value={{
            line,
            marginleft,
            transformnone,
            basketball,
            spaceAndAligment,
            sectionimprove,
            improvetypo,
            color,
            improveform,
            important,
            important1,
            important2,
            important3,
            important4,
            align,
            lowcontrast,
            scale,
            improvevisual,
            improvemovies,
            handleAlignment,
            handleLine,
            handleBasketball,
            handleSpaceAndAligment,
            handleImprove,
            handleImproveTypo,
            handleColor,
            handleImproveform,
            handleImportantcecircle,
            handleImportantcecircle1,
            handleImportantcecircle2,
            handleImportantcecircle3,
            handleImportantcecircle4,
            handleAling,
            handleScale,
            handleLowcontrast,
            handleImprovevisual,
            handleImprovemovies,
            uiWhiteSpaceData,
            UIWhitespaceAndAlignmentData,
            uiContrastAndScaleData,
            uiTypographyData,
            uiColorData,
            uiFormData,
            appWebFundamentalsData
        }}>
            { children }
        </UIDesignContext.Provider>
    )
}

const useUIDesignContext = () => {
    return useContext(UIDesignContext)
}

export { useUIDesignContext, UIDesignProvider }