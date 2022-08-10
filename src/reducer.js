import { TOGGLE_FLEX, TOGGLE_FLEX_MANIPULATION_APP } from './actions'
/**Flexbox-grid-sass-and-animations app version 9 -
 * reducer file - Features:
 * 
 *      --> Building 'TOGGLE_FLEX' action. 
 * 
 *      --> Building 'TOGGLE_FLEX_MANIPULATION_APP'
 *          action
 * 
 * Note: These first two actions are going to 
 * handle the functionality of the first two
 * apps 'flexbox-app' and 'flexbox.manipulation-app'
 * 
 */

const reducer = ( state, action ) => {

    if (action.type === TOGGLE_FLEX) {
        return { ...state, flex: !state.flex}
    }

    if (action.type === TOGGLE_FLEX_MANIPULATION_APP) {
        return { ...state, flexmanapp: !state.flexmanapp}
    }

    throw new Error(`No Matching "${action.type}" - action type`)
}

export default reducer;