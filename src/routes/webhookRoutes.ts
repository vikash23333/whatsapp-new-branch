import express from 'express';
import WebhookController from '../controllers/WebhookController';
import { WebhookVerificationService } from '../services/WebhookVerificationService';
import { WebhookHandlerService } from '../services/WebhookHandlerService';
import { WebhookSenderService } from '../services/WebhookSenderService';

const router = express.Router();

const verificationService = new WebhookVerificationService(`${process.env.VERIFY_TOKEN}`);
const senderService = new WebhookSenderService(`${process.env.PAGE_ACCESS_TOKEN}`);
const handlerService = new WebhookHandlerService(senderService);

const webhookController = new WebhookController(verificationService, handlerService, senderService);
router.use('/webhook', webhookController.getRouter());

export default router;
