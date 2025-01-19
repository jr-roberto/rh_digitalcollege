from flask import Flask
from routes.database import db

app = Flask(__name__)
app.register_blueprint(db)

if __name__=="__main__":
    app.run()
    