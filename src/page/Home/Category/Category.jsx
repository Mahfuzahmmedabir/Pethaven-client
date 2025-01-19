import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  tabs,
} from '@material-tailwind/react';
import { useState } from 'react';
import SocialLogin from '../../../Components/SocialLogin/SocialLogin';
import usePets from '../../../hooks/usePets/usePets';
import CategoryCard from './CategoryCard/CategoryCard';

const Category = () => {
  const [activeTab, setActiveTab] = useState('');
  console.log(activeTab);
  const [pets] = usePets();
  console.log(pets);
  const cat = pets.filter(item => item.category === 'cat');
  const rabbit = pets.filter(item => item.category === 'rabbit');
  const dog = pets.filter(item => item.category === 'dog');
  const fish = pets.filter(item => item.category === 'fish');
  const birds = pets.filter(item => item.category === 'birds');
  // {
  //   <CategoryCard item={cat}></CategoryCard>;
  // }

  const data = [
    {
      label: 'Cat',
      value: 'cat',
      desc: <CategoryCard item={cat}></CategoryCard>,
    },
    {
      label: 'Rabbit',
      value: 'Rabbit',
      desc: <CategoryCard item={rabbit}></CategoryCard>,
    },
    {
      label: 'Dog',
      value: 'dog',
      desc: <CategoryCard item={dog}></CategoryCard>,
    },
    {
      label: 'Fish',
      value: 'fish',
      desc: <CategoryCard item={fish}></CategoryCard>,
    },
    {
      label: 'Birds',
      value: 'svelte',
      desc: <CategoryCard item={birds}></CategoryCard>,
    },
  ];

  return (
    <div className="py-3">
      <div>
        <h2 className="text-center text-2xl"> Select you category</h2>
      </div>
      <Tabs className="text-red-500" value={activeTab}>
        <TabsHeader
          className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
          indicatorProps={{
            className:
              'bg-transparent border-b-2 border-gray-900 shadow-none rounded-none',
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={
                activeTab === value ? 'text-blue-gray-800 text-xl' : ' text-xl'
              }
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        {activeTab ? (
          ''
        ) : (
          <>
            <CategoryCard item={pets}></CategoryCard>
          </>
        )}

        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default Category;
