import tweepy
import json
import geocoder

g = geocoder.google('Shasta')
latlng = g.latlng

class SearchTweet:

    def __init__(self, c_key, c_secret, at_token, at_secret, location):
        self.auth = tweepy.OAuthHandler(c_key, c_secret)
        self.auth.set_access_token(at_token, at_secret)
        self.api = tweepy.API(self.auth, parser=tweepy.parsers.JSONParser())
        self.location = geocoder.google(location)
        self.latlng = self.location.latlng
        self.user_info = []

    def query(self):
        geo=f"{self.latlng[0]},{self.latlng[1]},20mi"
        query = self.api.search(q='*', lang='en', rpp=10, count=20, geocode=geo)
        for quer in query['statuses']:
            coord = {
                'screen_name': '',
                'location': [],
                'text': ''
            }
            coord['screen_name'] = quer['user']['screen_name']
            loc = geocoder.google(quer['user']['location'])
            loc = loc.latlng
            if loc == None:
                loc = self.latlng
            coord['location'].append(loc[0])
            coord['location'].append(loc[1])
            coord['text'] = (quer['text'])
            self.user_info.append(coord)
        return self.user_info

    def printNames(self):
        for info in self.user_info:
            print(info)

# consumer_key = ''
# consumer_secret = ''

# access_token = ''
# access_token_secret = ''

# search = SearchTweet(consumer_key,consumer_secret,access_token,access_token_secret, "Shasta")

# print(search.query())

# search.printNames()

