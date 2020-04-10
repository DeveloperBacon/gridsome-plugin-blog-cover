module.exports = function(title, { backgroundColors, imgHeight, imgWidth, border, borderColor, domain, favicon }) {
  const bgColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];

  const template = `
    <html>
      <head>
        <style>
          * {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
          }

          body{
            min-width: ${imgWidth};
            min-height: ${imgHeight};
            padding: 40px;
            background: ${bgColor};
            color: #ffffff;
            font-family:  -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
          }

          div.container{
            border: ${border ? '3px solid ' + borderColor ? borderColor : '#ffffff' : 'none'};
            text-align: left;
            padding: 30px;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between
          }
          h1.title{
            font-size: 3.7rem;
            text-transform: capitalize;
          }
          img.favicon {
            text-align: left;
            height: 50px;
            width: 50px;
          }
          div.footer {
            display: flex;
            justify-content: space-between;
          }
          p.domain{
            text-align: right;
            font-style: italic;
            margin-top: 30px;
          }
        </style>
      </head>
      <body>
          <div class="container">
            <h1 class="title">${title}</h1>
            
            <div class="footer">
              ${favicon ? '<img class="favicon" height="100" width="100" src="'+favicon+'">' : ''}
              
              <p class="domain">${domain}</p>
            </div>
          </div>
      </body>
    </html>
  `;
  return template;
};
