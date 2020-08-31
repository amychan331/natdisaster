from flask import Flask, jsonify
from flask_cors import CORS
from nat_tweet import SearchTweet
import geojson
import sys

app = Flask(__name__)
#Allow for CORS
CORS(app)

tweetStore = []

@app.route("/<string:city>")
def query(city):

    consumer_key = ''
    consumer_secret = ''

    access_token = ''
    access_token_secret = ''

    loc_search = SearchTweet(consumer_key,consumer_secret,access_token,access_token_secret,city)

    search = loc_search.query()

    if len(search) >= 1:
        for tweet in search:
            tweetStore.append(tweet)

    format_search = geojson.FeatureCollection(search)
    
    return jsonify(format_search)

@app.route("/cachedtweets")
def cache():

    formatted = geojson.FeatureCollection(tweetStore)

    return jsonify(formatted)



if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=3134)

