import express, { Router } from 'express';
import { WebhookVerificationService } from '../services/WebhookVerificationService';
import { WebhookHandlerService } from '../services/WebhookHandlerService';
import { WebhookSenderService } from '../services/WebhookSenderService';

class WebhookController {
    
  private router: Router;

  constructor(
    private verificationService: WebhookVerificationService,
    private handlerService: WebhookHandlerService,
    private senderService: WebhookSenderService
  ) {
    this.router = express.Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.verificationService.verifyWebhook.bind(this.verificationService));
    this.router.post('/', this.handlerService.handleIncomingMessages.bind(this.handlerService));
  }

  public getRouter(): Router {
    return this.router;
  }
}

export default WebhookController;
