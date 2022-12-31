import React from "react";

/**Flexbox-grid-sass-and-animations app version 60.08 -
 * RepeatAndFrUnit - Features:
 * 
 *      --> Building 'SelectionForm' to simplify
 *          selection feature in the whole app
 *  
 * Note: pending apply it to all components with
 * this feature.
 */

const SelectionForm = ({ propertyvalue, handler, propertiesArray, propertyname }) => {

    return(
        <select 
                name="selection" 
                id="selection" 
                value={propertyvalue} 
                onChange={handler}>
                    {/**the first option with empty value is to 
                     * avoid 'row' as default option - is a select 
                     * tag behavior*/}
                    <option value="">Select a {propertyname} to change</option>
                    {propertiesArray.map((options) => {
                        const {id, value} = options; 
                        return(
                            <option key={id} value={value}> set {propertyname} in {value}</option>
                        )
                    })} 
            </select>
    )
}

export default SelectionForm;