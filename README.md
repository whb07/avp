![Screenshot of main page](./screenshot.png?raw=true "AVPBrainGu")

# AVP

The main goal of this project was to differentiate between images of an 
Alien or Predator from the movies. This repo shows the notebook and takes it a step further
by showing how to set it up for production.

### Installing
To get started

setup your own virtualenv using Python3.7+
```
python3 -m venv venv
```
then proceed to install it in the activated venv 
```
pip install -r requirements.txt
```

### Viewing on Jupyter Notebook
run:
```
jupyter notebook
```
and then head over to the address provided

### Using the model in production
using Quart, first set the env var
```
export QUART_APP=app.py
```
run:
```
quart run
```
Head over to `localhost:5000` and use model by uploading a picture.


## Built With

* [FastAI](https://github.com/fastai/fastai) - Incredible library for quick deep learning
* [Quart](https://gitlab.com/pgjones/quart) - Quart is a Python ASGI web
microframework.

## License

This project is licensed under the MIT License. Have at it!
