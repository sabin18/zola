import express from "express";
import messagesController from "../../controllers/messageController";
import Inputvalidation from "../../helpers/validation"
const router = express.Router();

const { 
    sendUsMessage
} = messagesController;
const {validateMessage}=Inputvalidation
router.post('/',validateMessage,sendUsMessage);


export default router;
