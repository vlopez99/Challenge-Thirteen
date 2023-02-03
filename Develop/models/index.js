const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsToMany(Category, {
  through: {
    model: Tag,
    unique: false
  },
  as: 'product_categorys'
});
// Categories have many Products

Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'product_tags'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'product_tags'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
