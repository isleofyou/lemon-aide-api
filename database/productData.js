let productData = [
  {
    name: 'Sculpt Tank',
    color: 'Rainforest Green',
    img_url:'https://images.lululemon.com/is/image/lululemon/LW1CS9S_049106_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category:'top'
  },
  {
    name: 'All Yours Tank',
    color: 'White',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW1CGLS_0002_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category:'top'
  },
  {
    name: 'Full Day Ahead Short Sleeve',
    color: 'Aquila Rhino Grey Multi',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW3EMPS_049466_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'top'
  },
  {
    name: 'All Days Shirt',
    color: 'White',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW3DZYS_0002_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'top'  
  },
  {
    name: 'lulu Align™ Tank Top',
    color: 'Black',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW1BSWS_0001_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'top'
  },
  {
    name: 'lulu Align™ High-Rise Pant',
    color: 'Black',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW5CT3S_0001_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'bottom'
  },
  {
    name: 'Fast and Free High Rise Tight',
    color: 'Dark Red',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW5BXQS_028948_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'bottom'
  },
  {
    name: 'Wunder Under High-Rise Tight',
    color: 'Black',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW5BP4S_0001_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'bottom'
  },
  {
    name: 'Invigorate High-Rise',
    color: 'Red Merlot',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW5CQFS_047809_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'bottom'
  },
  {
    name: 'Wunder Train High-Rise',
    color: 'Capture Blue',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW5CQDS_027590_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'bottom'
  },
  {
    name: 'Cross Paths Rucksack',
    color: 'Green',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW9BOJS_044629_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'accessory'
  },
  {
    name: 'Light Locks Scrunchie',
    color: 'White',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW9CDCS_044981_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'accessory'
  },
  {
    name: 'All Hours Belt Bag',
    color: 'Black',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW9CJZS_028928_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'accessory'
  },
  {
    name: 'Fill your Day Backpack',
    color: 'Brown',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW9CQGS_034093_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'accessory'
  },
  {
    name: 'City Adventurer Backpack',
    color: 'Red',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW9DMTS_051630_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'accessory'
  }, 
  {
    name: 'Swiftly Tech Racerback',
    color: 'White',
    img_url:'https://images.lululemon.com/is/image/lululemon/LW1960S_012826_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category:'top'
  },
  {
    name: 'Essential Tank',
    color: 'White',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW1BSAS_0002_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category:'top'
  },
  {
    name: 'Full Day Ahead Short Sleeve',
    color: 'White',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW3EMPS_049466_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'top'
  },
  {
    name: 'Love Tank Top',
    color: 'White',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW1DAGS_0002_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'top'
  },
  {
    name: 'Brunswick Muscle Tank',
    color: 'Grey',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW1CH0S_042593_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'top'
  },
  {
    name: 'Here to There 7/8 Pant',
    color: 'Heathered Black',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW5CPPS_046580_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'bottom'
  },
  {
    name: 'City Sleek 5 Pocket 7/8 Pant',
    color: 'Black',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW5CZIS_0001_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'bottom'
  },
  {
    name: 'Wunder Under Crop',
    color: 'Floral Electric Multi',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW6AW6S_052541_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'bottom'
  },
  {
    name: 'Ready to Fleece Jogger',
    color: 'Black',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW5CZ9S_0001_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'bottom'
  },
  {
    name: 'Pace Rival Mid-Rise Crop',
    color: 'Black',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW6AVNS_037108_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'bottom'
  },
  {
    name: 'Out Of Range Backpack',
    color: 'Black',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW9CQAS_044165_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'accessory'
  },
  {
    name: 'Now and Always Tote',
    color: 'Black',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW9CUES_0001_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'accessory'
  },
  {
    name: 'On The Beat Belt Bag',
    color: 'Yellow',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW9CW4S_045740_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'accessory'
  },
  {
    name: 'On My Level Bag',
    color: 'Blue',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LW9BYCS_043629_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'accessory'
  },
  {
    name: 'Command The Day Backpack',
    color: 'Dark Yellow',
    img_url: 'https://images.lululemon.com/is/image/lululemon/LM9767S_045657_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
    category: 'accessory'
  }
];

module.exports = productData;