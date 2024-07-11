// server.js
const express = require('express');
const sequelize = require('./config');
const Product = require('./Models/Products');
const Market = require('./Models/Market')
const Category = require('./Models/Category')
const Subcategory = require('./Models/Subcategory')
const ProductRoutes = require('./Routes/ProductRoute')
const SubSubcategory = require('./Models/SubSubcategory');
const Newsroom = require('./Models/Newsroom')
const FeaturedProduct = require('./Models/FeaturedProduct');
const authRoutes = require('./Routes/authRoutes');
const userRoutes = require('./Routes/userRoutes');
const multer = require('multer');
const path = require('path');
const Project = require('./Models/Project');
const Gallery = require('./Models/Gallery');
const projectRoutes = require('./Routes/projectRoutes');
const Wishlist = require('./Models/Wishlist');
const WishlistProduct = require('./Models/WishlistProduct');
const OrderHistory = require('./Models/OrderHistory')
const Order = require('./Models/Order')
const Cart = require("./Models/Cart")
const CartProduct = require('./Models/CartProduct')
const OrderProduct = require('./Models/Orderproduct')
const CartRoute = require('./Routes/CartRoute')
const WishlistRoute = require('./Routes/WishlistRoute')
const User = require('./Models/User')

const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
app.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });
app.use(upload.single('image'));


sequelize
  .authenticate()
  .then(async () => {
    console.log('Database connection has been established successfully.');

    // Define Sequelize associations
    Category.belongsTo(Market);
    Market.hasMany(Category);
    Subcategory.belongsTo(Category);
    Category.hasMany(Subcategory);
    SubSubcategory.belongsTo(Subcategory);
    Subcategory.hasMany(SubSubcategory);
    Product.belongsTo(Category);
    Product.belongsTo(Subcategory);
    Product.belongsTo(SubSubcategory);
    Product.belongsTo(Market);
    SubSubcategory.hasMany(Product);
    Subcategory.hasMany(Product);
    Category.hasMany(Product);
    Newsroom.belongsTo(Product);
    FeaturedProduct.belongsTo(Product);
    Project.hasMany(Gallery, { as: 'gallery' });
    Gallery.belongsTo(Project);
    User.hasMany(Order);
    Order.belongsTo(User);
    Order.hasMany(OrderHistory);
    Order.belongsToMany(Product, { through: OrderProduct });
    Product.belongsToMany(Order, { through: OrderProduct });
    OrderHistory.belongsTo(Order);
    User.hasOne(Cart);
    Cart.belongsTo(User);
    Cart.belongsToMany(Product, { through: CartProduct });
    Product.belongsToMany(Cart, { through: CartProduct });
    CartProduct.belongsTo(Product)
    Cart.hasMany(CartProduct)
    User.hasOne(Wishlist)
    Wishlist.belongsTo(User)
    Wishlist.belongsToMany(Product, { through: WishlistProduct });
    Product.belongsToMany(Wishlist, { through: WishlistProduct });
    Wishlist.hasMany(WishlistProduct)
    WishlistProduct.belongsTo(Product)
    


    await sequelize.sync();
    console.log('All models synced with database.');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

  app.use(cors());
  app.use(express.json());
  app.use('/pro',ProductRoutes)
  app.use('/auth', authRoutes);
  app.use('/user', userRoutes);
  app.use('/projects', projectRoutes);
  app.use("/cart",CartRoute)
  app.use("/wishlist",WishlistRoute)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
