import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter, matchPath } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';
import routes from '../routes';
import store from '../client/store';

const htmlTemplate = (reactDom, sheets, state) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta content="width=device-width,initial-scale=1" name="viewport">
      <title>SSR</title>
      <style type="text/css" id="server-side-styles">
        ${sheets}
      </style>
    </head>
    <body>
      <div id="root">${reactDom}</div>
    </body>
    <script>window.REDUX_DATA = ${JSON.stringify(state)}</script>
    <script type="text/javascript" src="/client.bundle.js"></script>
  </html>
`;

export default () => async (req, res, next) => {
  const url = req.originalUrl;
  const route = (routes || [])
    .filter(({ type }) => type === 'route')
    .find(({ path }) => matchPath(url, path));

  if (route) {
    const { params } = matchPath(url, route.path);
    const { component: Component, setupState } = route;
    const context = {};
    const sheet = new ServerStyleSheet();

    await setupState(params)(store.dispatch, store.getState);

    const reactApp = (
      <Provider store={store}>
        <StaticRouter context={context} location={url}>
          <Component/>
        </StaticRouter>
      </Provider>
    );
    const reactDom = renderToString(sheet.collectStyles(reactApp));
    const styleTags = sheet.getStyleTags();
    const state = store.getState();

    res.writeHead(200, { 'Content-Type': 'text/html' });

    return res.end(htmlTemplate(reactDom, styleTags, state));
  }

  return next();
};
