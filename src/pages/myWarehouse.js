import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import WCard from '../components/whsCard/WCard'


export default function MyWarehouse() {

    const my_Warehouse = useSelector(state => state.AddForm.warehouseInfo)

    return (
        <div>
        {my_Warehouse.length > 0?  <p>tru</p> : <p>no warehouse</p>}
                {
                    my_Warehouse.map((item , ref) => {
                        return <WCard  key={item.warehouseName} {...item} ref ={ref} />
                    })
                }
        </div>
    )
}
