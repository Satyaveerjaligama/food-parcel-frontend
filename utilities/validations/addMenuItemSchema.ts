import * as yup from 'yup';

const addMenuItemSchema = yup.object().shape({
  name: yup.string().required('Item name is required'),
  price: yup.number().notOneOf([0], 'Price cannot not be zero').required('Price is required').default(0),
  isVeg: yup.boolean().required('Please answer this questions'),
  isAvailable: yup.boolean().required('Please answer this questions'),
  type: yup.string().required('Please select the Cuisine type'),
  category: yup.string().required('Please select the Category'),
  mainIngredients: yup.string().required('Please enter the main ingredients')
});

export default addMenuItemSchema;