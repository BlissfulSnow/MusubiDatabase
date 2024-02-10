import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom'

const Foods = () => {

    const column = [
        {
            name: "FOOD_ID",
            selector : row => row.FOOD_ID
        },
        {
            name: "FOOD_NAME",
            selector : row => row.FOOD_NAME
        },
        {
            name: "FOOD_DESC",
            selector : row => row.FOOD_DESC
        },
        {
            name: "DATA_SOURCE",
            selector : row => row.DATA_SOURCE
        }
    ]



    const [foods,setFoods] = useState([])

    useEffect(() => {
        const fetchAll = async ()=> {
            try{
                const res = await axios.get("http://localhost:8080/food");
                setFoods(res.data);
            }catch(err) {
                console.log(err);
            }
        }
        fetchAll();
    }, []);
  
  
    return <div>
        <DataTable columns={column} data={foods}>

        </DataTable>

        <button className='button1'>
                <Link to="/add" className='addtext'>Add New Food</Link>
        </button>
    </div>;

};

export default Foods