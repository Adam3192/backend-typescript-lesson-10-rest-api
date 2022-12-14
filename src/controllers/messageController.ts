import { RequestHandler } from "express";
import { Message } from "../models/message";

export const getAllMessages: RequestHandler = async (req, res, next) => {
    let messages = await Message.findAll();
    res.status(200).json(messages);
}

export const createMessage: RequestHandler = async (req, res, next) => {
 let newMessage: Message = req.body;
 if (newMessage.message && newMessage.username) {
     let created = await Message.create(newMessage);
     res.status(201).json(created);
 }
 else {
     res.status(400).send();
 }
}

export const getMessage: RequestHandler = async (req, res, next) => {
 let messageId = req.params.messageId;
 let messageFound = await Message.findByPk(messageId);
 if (messageFound) {
     res.status(200).json(messageFound);
 }
 else {
     res.status(404).json();
 }
}

export const updateMessage: RequestHandler = async (req, res, next) => {
 let messageId = req.params.messageId;
 let newMessage: Message = req.body;
 
 let messageFound = await Message.findByPk(messageId);
 
 if (messageFound && messageFound.messageId == newMessage.messageId
     && newMessage.message && newMessage.username) {
         await Message.update(newMessage, {
             where: { messageId: messageId }
         });
         res.status(200).json();
 }
 else {
     res.status(400).json();
 }
}

export const deleteMessage: RequestHandler = async (req, res, next) => {
 let messageId = req.params.messageId;
 let messageFound = await Message.findByPk(messageId);
 
 if (messageFound) {
     await Message.destroy({
             where: { messageId: messageId }
     });
     res.status(200).json();
 }
 else {
     res.status(404).json();
 }
}