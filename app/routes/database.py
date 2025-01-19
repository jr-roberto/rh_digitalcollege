from flask import (
    Blueprint,
    jsonify,
    render_template
)

from sqlalchemy import create_engine

# Configurações do banco de dados
DATABASE_USER = 'app'
DATABASE_PASSWORD = '123mudar!'
DATABASE_HOST = '127.0.0.1'  # ou o IP do servidor
DATABASE_PORT = '3306'  # Porta padrão do MySQL
DATABASE_NAME = 'rh_digitalcollege'

# String de conexão
DATABASE_URL = f'mysql+pymysql://{DATABASE_USER}:{DATABASE_PASSWORD}@{DATABASE_HOST}:{DATABASE_PORT}/{DATABASE_NAME}'

engine = create_engine(DATABASE_URL)

db = Blueprint('db', __name__, url_prefix='/database/', template_folder="../templates/")

@db.route("/tables")
def tables():
    result = None

    with engine.connect() as cnn:
        try:
            result = cnn.exec_driver_sql("SHOW TABLES;").all()
            result = [ list(i) for i in result ]
        
        except:
            return jsonify({"response":400}), 400
    
    return render_template("tables.html", tables=result)
