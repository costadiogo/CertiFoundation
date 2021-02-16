# 💪 Challenge CertiFoundation

Challenger of Certi Foundation


 ## 🏁 Getting Started

### Description!

## Na linguagem de sua preferência, crie um servidor HTTP que, para cada requisição GET, retorne um JSON cuja chave extenso seja a versão por extenso do número inteiro enviado no path. Os números podem estar no intervalo [-99999, 99999].

> Exemplos:</br></br>
λ curl http://localhost:3000/1 </br>
{ "extenso": "um" }</br></br>
λ curl http://localhost:3000/-1042</br>
{ "extenso": "menos mil e quarenta e dois" }</br></br>
λ curl http://localhost:3000/94587</br>
{ "extenso": "noventa e quatro mil e quinhentos e oitenta e sete" }</p>


### Prerequisites

Firstly, you will need to install:

* [Docker](https://docs.docker.com/v17.09/engine/installation/#server) 🐳

* [Node.js](https://nodejs.org/en/download/) 🚀

* [GitHub cli](https://gist.github.com/derhuerst/1b15ff4652a867391f03) :octocat:

### Installing


A step by step that will guide you on how to run the project on your computer.


Clone the project repository:
```
> git clone https://github.com/costadiogo/CertiFoundation
```


Go to the project directory:
```
> cd CertiFoundation
```

### Start without Docker


In your terminal type:

```
> yarn install
``` 
This command will install the dependencies and create the node_modules folder


After installing the dependencies we will start the server

In your terminal type:

```
> yarn start
``` 

This command will start the http server.


If everything has worked out so far in your terminal the following command will appear:

```
   Test Main route from API
     Test GET route 
       ✓ Should return an message home route
 
   Test GET route for return a number in full 
     Test GET/:id route
      ✓ Should return a number in full


> Server started at http://localhost:3000
``` 
## Testing the application

Then open your browser and in the url type:

http://localhost:3000/1

Your return should be:

{ "extenso": "um" }

### Start with Docker

In your terminal type:

```
> docker-compose up
``` 

This command will install the dependencies, run the tests and boot the server

If everything has worked out so far in your terminal the following command will appear:
```
Starting certifoundation_app_1 ... done
Attaching to certifoundation_app_1
app_1  | yarn run v1.22.5
app_1  | $ mocha --timeout 10000 && node server.js
app_1  | 
app_1  | 
app_1  |   Test Main route from API
app_1  |     Test GET route 
app_1  |       ✓ Should return an message home route
app_1  | 
app_1  |   Test GET route for return a number in full 
app_1  |     Test GET/:id route
app_1  |       ✓ Should return a number in full
app_1  | 
app_1  | 
app_1  |   2 passing (34ms)
app_1  | 
app_1  | Server started at http://localhost:3000
```

## Testing the application

Then open your browser and in the url type:

http://localhost:3000/1

Your return should be:

{ "extenso": "um" }



## 🔨Built With

* [Node.js](https://nodejs.org/en/download/) - JavaScript interpreter
* [Express](https://expressjs.com/) - Web framework
* [Docker](https://www.docker.com/) - Container environment



## 🙌 Author

* **Diogo Costa de Paula** - [LinkedIn](https://www.linkedin.com/in/diogo-costa-8138a69b)



## 📃License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details