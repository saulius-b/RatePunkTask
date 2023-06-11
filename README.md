# Ratepunk task
Project created with my template using Webpack with React, TypeScript, EsLinter, SASS modules - https://github.com/saulius-b/Webpack-React-TS-EsLinter-SASS-template

When the user enters a valid email and clicks on "Get referral link", the email is sent to JSONBIN.IO, and saved there. Each other submit overwrites the current stored email. After successfully saving the email, the user can press "Copy Url" button, which copies the recieved referral code to the clipboard and resets the form. Each succesfull email sent generates a different referral code.

JSONBIN.IO "X-Access-Key" is left in the code on purpose, so that anyone can run the project an test it.

## How to run development mode
  type npm install
  
  type npm run start and when webpack successfully compiles, click on the given address to launch the project in your browser
  
 ## How to test the build
  type npm run build
  
  type npx serve build and when webpack successfully compiles, click on the given address
  
  
