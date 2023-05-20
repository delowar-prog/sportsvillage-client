import React, { useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
const Category = () => {
  const[categories, setCategories]=useState([])
  const [catToy, setCatToy]=useState([])
  useEffect(()=>{
    fetch(`http://localhost:5000/categories`)
    .then(res=>res.json())
    .then(data=>setCategories(data))
  },[])

    const handleCategoryWiseData=name=>{
      fetch(`http://localhost:5000/category/${name}`)
      .then(res=>res.json())
      .then(data=>setCatToy(data))
    }

  return (
    <div className='px-14 bg-current'>
      <h1 className='text-3xl font-bold text-center text-white uppercase py-8'>Shop by category</h1>
      <Tabs forceRenderTabPanel defaultIndex={1}>
        <TabList className="border-b-2 border-indigo-600">
        <Tab className="btn btn-info btn-outline rounded-none border-0" onClick={()=>handleCategoryWiseData('cricket')}>Cricket</Tab>
        <Tab className="btn btn-info btn-outline rounded-none border-0" onClick={()=>handleCategoryWiseData('football')}>Football</Tab>
        </TabList>
        
        <TabPanel>
          {
            catToy.map(item=><h1 key={item._id}>{item.toyName}</h1>)
          }    
        </TabPanel>
        <TabPanel>
              <h3>keriiiidfiii</h3>
        </TabPanel>

    </Tabs>
  </div>
    )
}

export default Category