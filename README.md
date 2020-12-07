Template taken from Wekinator input example bundle. Tested with public domain hosting to support remote OSC messages.

OSC library cahgnged from from `osc-min` to `node-osc`. However, I have ont rested the orginal example so this may not be neccessary. Some parts of the code have been commented out, meaning this can only be used to send OSC messages.

# wekp5

This example weds Wekinator machine learning and P5.js.

Mouse locations control background colors.

Simply:
- `npm install`
- `node app.js`
- navigate to http://localhost:3000
- train in Wekinator

# Remote Hosting (Free)

Follow the instrctions to install ngrok on the host machine that will be recieving messages: [https://ngrok.com](https://ngrok.com) 

Once configuresd, cd into the main directory in a separate tab/window and run the following command:

> `./ngrok http 3000`

![Screenshot 2020-12-07 at 16 40 59](https://user-images.githubusercontent.com/9369774/101378784-6cbfbc00-38ab-11eb-8ece-e824c787a74d.png)

Copy the unique url to the client's browser to send data.

To quickly test if data is being received by the host, try netcat:

> `nc -u -l 12000`