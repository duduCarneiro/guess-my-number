<h1 align="center">
  💻<br>Guess my number game
</h1>


<p align="center">
  <img src="./img/1 screen.jpg" alt="Size Limit CLI" width="738">
</p>

# 👨‍💻 About
This project is part of the content of <a href="https://www.udemy.com/course/the-complete-javascript-course/" target="_blank">The Complete JavaScript Course by Jonas Schmedtman</a> available on Udemy. 
<br> It has a retro design inspired by the old 80s games. The goal of this game is to simply guess a secret number which is between one and 20. 

## Contents
- [Get started](#features)
- [Building](#building)
- [Using Edlib in your project](#using-edlib-in-your-project)
- [Usage and examples](#usage-and-examples)
- [API documentation](#api-documentation)
- [Alignment methods](#alignment-methods)
- [Aligner](#aligner)
- [Running tests](#running-tests)
- [Development and contributing](#development-and-contributing)
- [Publication](#publication)
- [Acknowledgements](#acknowledgements)
- 


## Usage and examples
In the input box we can type a number. And then on the right side, after click on the check buttom, we get a message. It can say our guess was too low or to high. Also we can see that we started with a Score of 5. Each time we failed, it decreases by 1.
<br> Let's say the secret number is 19, we don´t know it yet. So, we try 5. It's too low! and our score decreased. Let's try another one. 20! Now it's too high and we get a different message.
Finally, we guess 19. So we get a correct number message.
<p align="center">
  <img src="./img/2 screen.jpg" alt="Size Limit CLI" width="738">
</p>
The screen turns green and also we now have the Highscore reached during this turn.

A Highscore is another feature of this small application. Then if you want to play again, we can simply click the Again! button and it all resets everything except for the Highscore. The Highscore is kept and so if I'm quicker in this round, my Highscore will then become better.






Features
Usage and examples How It Works





# 👨‍💻✍️ 🌟 ⚠️  📒 🥳 🚀🚨📚💼 How It Works

1. Size Limit contains a CLI tool, 3 plugins (`file`, `webpack`, `time`)
   and 3 plugin presets for popular use cases (`app`, `big-lib`, `small-lib`).
   A CLI tool finds plugins in `package.json` and loads the config.
2. If you use the `webpack` plugin, Size Limit will bundle your JS files into
   a single file. It is importa
   
   
   
   
## Built with

<h2>Usage Examples</h2>
Start server on dump file:
<pre>
java -jar df.jar --dump dump.txt
</pre>
Start server with built-in OpenAPI client:
<pre>java -jar df.jar --openapi-path /api --dump dump.txt
</pre>

<details>
<summary>
  more examples&hellip;
</summary>
<br>
Start server on few dump files:
<pre>
java -jar df.jar --dump dump1.txt dump2.txt dump3.txt
</pre>
Start server with built-in OpenAPI client with custom title:
<pre>
java -jar df.jar --openapi-path /api --openapi-title 'My REST API v18.2.1' --dump dump.txt
</pre>
</details>
<details>
<summary>
	even more examples&hellip;
</summary>
<br>
Collect live request/response to file:
<pre>
java -jar df.jar --collect /home/john/live.txt --dump dump.txt
</pre>
Specify JSON data file to populate templates:
<pre>
java -jar df.jar --data /home/john/data.json --dump dump.txt
</pre>
  
 ```sh
git clone https://github.com/thelounge/thelounge.git
cd thelounge
yarn install
NODE_ENV=production yarn build
yarn start
```
</details>
  <h2>Features</h2>
  &nbsp;&nbsp;&nbsp;&nbsp;&check;&nbsp;&nbsp;no dependencies<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&check;&nbsp;&nbsp;no installation<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&check;&nbsp;&nbsp;no configs<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&check;&nbsp;&nbsp;crossplatform<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&check;&nbsp;&nbsp;single-file executable<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&check;&nbsp;&nbsp;command-line interface<br>
  <details>
  <summary>
   more features&hellip;
  </summary>
  <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&check;&nbsp;&nbsp;fully asynchronous<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&check;&nbsp;&nbsp;HTTP message formats RFC 7230<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&check;&nbsp;&nbsp;multiple entries per dump<br>
  &nbsp;&nbsp;&nbsp;&nbsp;&check;&nbsp;&nbsp;multiple request/response entries per dump<br> 

