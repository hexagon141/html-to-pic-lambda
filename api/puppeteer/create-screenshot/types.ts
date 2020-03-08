export type Extension = 'png' | 'jpeg';

export type Viewport = {
  width: number,
  height: number,
};

export type Screenshot = {
  html: string,
  extension?: Extension,
  viewport?: Viewport,
};