export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Product Name',
        type: 'string',
      },
      {
        name: 'color',
        title: 'Color',
        type: 'string',
      },
      {
        name: 'discountprice',
        title: 'Discount Price',
        type: 'number',
      },
      {
        name: 'actualamount',
        title: 'Actual Amount',
        type: 'number',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Product Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  }
  