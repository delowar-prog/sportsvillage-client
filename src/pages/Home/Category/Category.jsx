import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
const Category = () => {
    return (
        <div className='px-14 bg-current'>
        <h1 className='text-3xl font-bold text-center text-white uppercase py-8'>Shop by category</h1>
        <Tabs forceRenderTabPanel defaultIndex={1}>
        <TabList className="border-b-2 border-indigo-600">
          <Tab className="btn btn-info btn-outline rounded-none border-0">Cricket</Tab>
          <Tab className="btn btn-info btn-outline rounded-none border-0">Football</Tab>
          <Tab className="btn btn-info btn-outline rounded-none border-0">Batmintone</Tab>
        </TabList>
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab>Cricket Bat</Tab>
              <Tab>Cricket Ball</Tab>
            </TabList>
            <TabPanel>
              <p>Middle child and eldest daughter of Homer and Marge; sister of Bart and Maggie.</p>
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Lisa_Simpson.png/200px-Lisa_Simpson.png" alt="Lisa Simpson" />
            </TabPanel>
            <TabPanel>
              <p>Youngest child and daughter of Homer and Marge; sister of Bart and Lisa.</p>
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Maggie_Simpson.png/223px-Maggie_Simpson.png" alt="Maggie Simpson" />
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab>Ball</Tab>
              <Tab>Shuse</Tab>
            </TabList>
            <TabPanel>
              <p>Protagonist, from the 20th Century. Delivery boy. Many times great-uncle to Professor Hubert Farnsworth. Suitor of Leela.</p>
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Philip_Fry.png/175px-Philip_Fry.png" alt="Philip J. Fry" />
            </TabPanel>
            <TabPanel>
              <p>Mutant cyclops. Captain of the Planet Express Ship. Love interest of Fry.</p>
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Turanga_Leela.png/150px-Turanga_Leela.png" alt="Turanga Leela" />
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab>Bat</Tab>
              <Tab>Cork</Tab>
            </TabList>
            <TabPanel>
              <p>Protagonist, from the 20th Century. Delivery boy. Many times great-uncle to Professor Hubert Farnsworth. Suitor of Leela.</p>
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Philip_Fry.png/175px-Philip_Fry.png" alt="Philip J. Fry" />
            </TabPanel>
            <TabPanel>
              <p>Mutant cyclops. Captain of the Planet Express Ship. Love interest of Fry.</p>
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Turanga_Leela.png/150px-Turanga_Leela.png" alt="Turanga Leela" />
            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
        </div>
    )
}

export default Category