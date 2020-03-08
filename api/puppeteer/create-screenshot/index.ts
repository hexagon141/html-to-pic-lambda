import chromium from 'chrome-aws-lambda';
import type {Extension, Screenshot, Viewport} from './types';

const defaultExtension: Extension = 'jpeg';
const defaultViewport: Viewport = {
  width: 1440,
  height: 900,
};

export async function createScreenshot({html, extension = defaultExtension, viewport = defaultViewport}: Screenshot) {
  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: viewport,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
  });

  const page = await browser.newPage();

  await page.setContent(html);

  const screenshot = await page.screenshot({
    type: extension,
  });

  await page.close();
  await browser.close();

  return screenshot;
}

