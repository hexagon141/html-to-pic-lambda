import {NowRequest, NowResponse} from '@now/node';
import {createScreenshot} from './create-screenshot';

async function handler(request: NowRequest, response: NowResponse) {
  const screenshot = await createScreenshot({
    html: request.body.html,
    extension: request.body.extension,
    viewport: request.body.viewport,
  });

  response.status(200);
  response.setHeader('Content-Type', `image/${request.body.type}`);
  response.send(screenshot);
}

export default handler;