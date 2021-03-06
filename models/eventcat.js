'use strict';
module.exports = (sequelize, DataTypes) => {
  const EventCat = sequelize.define('EventCat' ,{
    name: {
      type: DataTypes.STRING,
      validate: {notEmpty: true}
    }
  }, {});
  EventCat.associate = function(models){
    EventCat.hasMany(models.Event);
  }; 
  return EventCat;
};