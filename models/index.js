const List = require("./list");
const User = require("./user");
const Item = require("./items");

User.hasMany(List)
List.belongsTo(User)

List.hasMany(Item)
Item.belongsTo(List)

module.exports = {List, User, Item}