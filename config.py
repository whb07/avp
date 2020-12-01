from quart import Quart
from dotenv import load_dotenv
import os
load_dotenv()


class Config:
    DEBUG = False
    SECRET_KEY = os.getenv("SECRET", "you-will-never-guess")


def create_app(config_class=Config):
    app = Quart(__name__)
    app.config.from_object(config_class)

    return app
