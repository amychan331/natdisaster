from flask import Flask, jsonify
from flask_cors import CORS
from nat_share import SearchTweet

app = Flask(__name__)
#Allow for CORS
CORS(app)

@app.route("/<string:city>")
def query(city):

    consumer_key = ''
    consumer_secret = ''

    access_token = ''
    access_token_secret = ''

    loc_search = SearchTweet(consumer_key,consumer_secret,access_token,access_token_secret,city)

    search = loc_search.query()

    return jsonify(search)

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=3134)

