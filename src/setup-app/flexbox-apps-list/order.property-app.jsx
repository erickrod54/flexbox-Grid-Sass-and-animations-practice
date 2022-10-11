import React from "react";
import ComplexTitle from "../../components/complex-title";
import FlexProp from "../../components/flex-prop.component";
import { useAppContext } from "../../context";
import { OrderPropertyWrapper } from "../flexbox.styled.components";

/**Flexbox-grid-sass-and-animations app version 16 -
 * OrderPropertyApp - Features:
 *
 *      --> Building 'OrderPropertyApp'.
 * 
 *      --> Testing values from context.
 * 
 * Note: Next versions will be implemented value dynamiclly
 */

const OrderPropertyApp = () => {

   const { order, handleItemOrder } = useAppContext()

   console.log('testing values from context ==>', order)

    return(
        <>
        <ComplexTitle title={<h2><span className="order-property-app">order property app:</span></h2>}/>
        <h2>This props only take effect on elements of the container, the order 
            default ( Default = 0, Value +ve or -ve number, values are located
            in the main axis which is horizontal -also can change based on the direction-),
            if the direction is row (default), so to apply it i have the container 'ul'
            and the child 'li', will be using 'pseudo-selectors', "li:nth-child(childNumber) and 
            with curley braces 'order:4' will change the item to number 4 in the container"
        </h2>

        <select 
                name="selection" 
                id="selection" 
                value={order.orderNumber} 
                onChange={handleItemOrder}>
                    {/**the first option with empty value is to 
                     * avoid 'row' as default option - is a select 
                     * tag behavior*/}
                    <option value="">Select a order</option>1
                    <option value={1}>order '1'</option>
                    <option value={2}>order '2'</option>
                    <option value={3}>order '3'</option>
                    <option value={4}>order '4'</option>
                    <option value={5}>order '5'</option>
                </select>

                <select 
                name="selection" 
                id="selection" 
                value={order.itemNumber} 
                onChange={handleItemOrder}>
                    {/**the first option with empty value is to 
                     * avoid 'row' as default option - is a select 
                     * tag behavior*/}
                    <option value="">Select an item</option>1
                    <option value={1}>item # '1'</option>
                    <option value={2}>item # '2'</option>
                    <option value={3}>item # '3'</option>
                    <option value={4}>item # '4'</option>
                    <option value={5}>item # '5'</option>
                </select>

        <OrderPropertyWrapper orderNumber={order.orderNumber} orderItemNumber={order.itemNumber}>
            <FlexProp />
        </OrderPropertyWrapper>
        </>
    )
}

export default OrderPropertyApp;