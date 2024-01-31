import axios from 'axios';

class WebhookSenderService {
  
  private pageAccessToken: string;

  constructor(pageAccessToken: string) {
    this.pageAccessToken = pageAccessToken;
  }

  public sendTextMessage(recipientId: string, text: string): void {
    // Sending logic here
    const messageData = {
      recipient: {
        id: recipientId,
      },
      message: {
        text: text,
      },
    };

    axios.post(`https://graph.facebook.com/v12.0/me/messages?access_token=${this.pageAccessToken}`, messageData)
      .then((response) => {
        console.log('Message sent successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error sending message:', error.response.data);
      });
  }
}

export { WebhookSenderService };
