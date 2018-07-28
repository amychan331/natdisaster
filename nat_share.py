import tweepy
import requests

class SearchTweet:

    def __init__(self, c_key, c_secret, at_token, at_secret):
        self.auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
        self.auth.set_access_token(access_token, access_token_secret)
        self.api = tweepy.API(self.auth, parser=tweepy.parsers.JSONParser())

    def query(self, geo=''):
        query = self.api.search(q='Shasta', lang='en', rpp=10, count=20, geocode=geo)
        screen_names = []
        for quer in query['statuses']:
            screen_names.append(quer['user']['screen_name'])
        return screen_names

consumer_key = ''
consumer_secret = ''

access_token = ''
access_token_secret = ''

search = SearchTweet(consumer_key,consumer_secret,access_token,access_token_secret)

print(search.query())