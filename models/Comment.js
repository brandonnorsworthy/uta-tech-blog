const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
    },
		author_id: {
			type: DataTypes.STRING,
			references: {
				model: 'author',
				key: 'id',
			},
		},
    post_id: {
			type: DataTypes.STRING,
			references: {
				model: 'post',
				key: 'id',
			},
		},
  },
  {
    sequelize,
    underscored: true,
    freezeTableName: true,
    modelName: 'comment',
  }
);

module.exports = Comment;
