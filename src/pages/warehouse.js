import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Warehouse() {
    const warehouseData = useSelector(state => state.warehouse.warehouseInfo)
    const {warehouseName,space,description }= warehouseData
    console.log(warehouseData)
    return (
        <div>
        
        <div>
            {warehouseName}
        </div>
        <div>
            {space}
        </div>
        <div>
            {description}
        </div>
            
            
        </div>
    )
}
