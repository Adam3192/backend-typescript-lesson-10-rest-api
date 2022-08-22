import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class Message extends Model<InferAttributes<Message>, InferCreationAttributes<Message>>{
    declare messageId: number;
    declare message: string;
    declare username: string;
    declare createdAt?: Date;
    declare updatedAt?: Date;
}

export function MessageFactory(sequelize: Sequelize) {
    Message.init({
        messageId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }
    }, {
        freezeTableName: true,
        tableName: 'messages',
        sequelize
    });
}