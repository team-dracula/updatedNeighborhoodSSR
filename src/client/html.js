const Html = ({ body, title }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
    </head>
    <body style="margin:0">
      <div id="neighborhood">${body}</div>
    </body>
    <script src="https://unpkg.com/react@16.8.6/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16.8.6/umd/react-dom.development.js"></script>
    <script src="/app.js"></script>
    <script>
      ReactDOM.hydrate(
          React.createElement(NeighborhoodSection),
          document.getElementById("neighborhood")
        );
    </script>
  </html>
`;

module.exports = Html;