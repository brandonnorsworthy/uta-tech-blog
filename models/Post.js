const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
		author_id: {
			type: DataTypes.STRING,
			references: {
				model: 'author',
				key: 'id',
			},
		},
  },
  {
    sequelize,
    underscored: true,
    freezeTableName: true,
    modelName: 'post',
  }
);

module.exports = Post;
