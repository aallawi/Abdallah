import images from './images';

// wines
const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

// cocktails
const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

// awards
const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

// chefs
const chefs = [
  {
    imgUrl: images.chef1,
    name: 'Kevin Luo',
    job: 'Head Chef',
  },
  {
    imgUrl: images.chef2,
    name: 'Patrick Choi',
    job: 'Deputy Chef',
  },
  {
    imgUrl: images.chef3,
    name: 'Jack Biscoff',
    job: 'Station Chef',
  },
  {
    imgUrl: images.chef4,
    name: 'Stacy Lee',
    job: 'Station Chef',
  },
  {
    imgUrl: images.chef5,
    name: 'Aren Goodman',
    job: 'Junior Chef',
  },
  {
    imgUrl: images.chef6,
    name: 'Javier Dowsing',
    job: 'Junior Chef',
  },
];

const customers = [
  {
    imgUrl: images.customers1,
    name: 'Wade Warren',
    job: 'Sommelier',
    Opinion: 'Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.',
  },
  {
    imgUrl: images.customers2,
    name: 'Jane Cooper',
    job: 'Chef',
    Opinion: 'Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.',
  },
  {
    imgUrl: images.customers3,
    name: 'Robert Fox',
    job: 'Chef',
    Opinion: 'Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.',
  },
  {
    imgUrl: images.customers4,
    name: 'Brooklyn',
    job: 'Chef',
    Opinion: 'Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.',
  }
];

export default { wines, cocktails, awards, chefs , customers };
