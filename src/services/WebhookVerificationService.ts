import { Request, Response } from 'express';

class WebhookVerificationService {

  private verifyToken: string;

  constructor(verifyToken: string) {
    this.verifyToken = verifyToken;
  }

  public verifyWebhook(req: Request, res: Response): void {
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    // Check if the verification tokens match
    if (mode && token === this.verifyToken) {
      // Respond with the challenge token to verify the webhook
      res.status(200).send(challenge);
    } else {
      // Respond with '403 Forbidden' if tokens do not match
      res.sendStatus(403);
    }
  }
  
}

export { WebhookVerificationService };
