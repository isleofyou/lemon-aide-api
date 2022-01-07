let productData = [
  {
    name: 'Sculpt Tank',
    color: 'pink',
    img_url:'https://images.lululemon.com/is/image/lululemon/LW1CS9S_049106_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category:'tops'
  },
  {
    name: 'All Yours Tank',
    color: 'white',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW1CGLS_0002_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category:'tops'
  },
  {
    name: 'Full Day Ahead Short Sleeve Shirt',
    color: 'white',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW3EMPS_049466_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'tops'
  },
  {
    name: 'All Days Shirt',
    color: 'white',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW3DZYS_0002_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'tops'  
  },
  {
    name: 'lululemon Align™ Tank Top',
    color: 'black',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW1BSWS_0001_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'tops'
  },
  {
    name: 'lululemon Align™ Jogger Cool *Vent',
    color: 'purple',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW5CT1S_045720_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'bottoms'
  },
  {
    name: 'Fast and Free High Rise Tight',
    color: 'brown',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW5CTRS_046553_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'bottoms'
  },
  {
    name: 'Wunder Under High-Rise Tight',
    color: 'black',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW5BP4S_0001_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'bottoms'
  },
  {
    name: 'Invigorate High-Rise Tight',
    color: 'brown',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW5CX1S_045881_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'bottoms'
  },
  {
    name: 'Wunder Train High-Rise Tight',
    color: 'blue',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW5CQDS_027590_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'bottoms'
  },
  {
    name: 'Cross Paths Rucksack',
    color: 'green',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW9BOJS_044629_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'accessories'
  },
  {
    name: 'Light Locks Scrunchie',
    color: 'white',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW9CDCS_044981_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'accessories'
  },
  {
    name: 'All Hours Belt Bag',
    color: 'black',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW9CJZS_028928_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'accessories'
  },
  {
    name: 'Fill your Day Backpack',
    color: 'brown',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW9CQGS_034093_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'accessories'
  },
  {
    name: 'City Adventurer Backpack',
    color: 'red',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW9DMTS_051630_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'accessories'
  }, 
  {
    name: 'Swiftly Tech Racerback',
    color: 'white',
    img_url:'https://images.lululemon.com/is/image/lululemon/LW1960S_012826_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category:'tops'
  },
  {
    name: 'Essential Tank',
    color: 'white',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW1BSAS_0002_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category:'tops'
  },
  {
    name: 'Full Day Ahead Short Sleeve Shirt',
    color: 'white',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW3EMPS_049466_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'tops'
  },
  {
    name: 'Love Tank',
    color: 'white',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW1CJ5S_045772_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'tops'
  },
  {
    name: 'Brunswick Muscle Tank',
    color: 'grey',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW1CH0S_042593_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'tops'
  },
  {
    name: 'Here to There High-Rise 7/8 Pant',
    color: 'black',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW5CPPS_046580_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'bottoms'
  },
  {
    name: 'City Sleek 5 Pocket 7/8 Pant',
    color: 'black',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW5CZIS_0001_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'bottoms'
  },
  {
    name: 'Wunder Under Crop (High-Rise) *Full-On Luxtreme 21',
    color: 'dark olive',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW6AW6S_052541_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'bottoms'
  },
  {
    name: 'Ready to Fleece Jogger',
    color: 'black',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW5CZ9S_0001_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'bottoms'
  },
  {
    name: 'Pace Rival Mid-Rise Crop',
    color: 'black',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW6AVNS_037108_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'bottoms'
  },
  {
    name: 'Out Of Range Backpack',
    color: 'black',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW9CQAS_044165_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'accessories'
  },
  {
    name: 'Now and Always Tote',
    color: 'black',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW9CUES_0001_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'accessories'
  },
  {
    name: 'On The Beat Belt Bag',
    color: 'yellow',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW9CW4S_045740_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'accessories'
  },
  {
    name: 'On My Level Bag',
    color: 'blue',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW9BYCS_043629_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'accessories'
  },
  {
    name: 'Command The Day Backpack',
    color: 'dark yellow',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LM9767S_045657_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'accessories'
  }
];

module.exports = productData;