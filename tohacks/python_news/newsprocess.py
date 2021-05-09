import requests
import json
import sys


def get_articles_from_kw_and_loc(kw, loc):
    try:
        '''url = "https://google-news.p.rapidapi.com/v1/search"

        querystring = {"q":kw,"country":loc,"lang":"en"}

        headers = {
            'x-rapidapi-key': "ea3264f0bcmsh20a82b041845d76p1dbf33jsna2dd2b132228",
            'x-rapidapi-host': "google-news.p.rapidapi.com"
            }

        response = requests.request("GET", url, headers=headers, params=querystring)'''
        url = "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI"

        querystring = {"q":kw,"pageNumber":"1","pageSize":"100","autoCorrect":"true","fromPublishedDate":"null","toPublishedDate":"null"}

        headers = {
            'x-rapidapi-key': "ea3264f0bcmsh20a82b041845d76p1dbf33jsna2dd2b132228",
            'x-rapidapi-host': "contextualwebsearch-websearch-v1.p.rapidapi.com"
            }

        response = requests.request("GET", url, headers=headers, params=querystring)
        data = json.loads(response.text)

        #print(data)

        article_items = []

        '''for article in data["articles"]:
            new_item = {}
            new_item["id"] = article["id"]
            new_item["title"] = article["title"]
            new_item["link"] = article["link"]
            new_item["date"] = article["published"]
            article_items.append(new_item)'''

        for article in data["value"]:
            new_item = {}
            new_item["id"] = article["id"]
            new_item["title"] = article["title"]
            new_item["link"] = article["url"]
            new_item["date"] = ""
            article_items.append(new_item)

        with open('python_news/news_sample.json', 'w') as outfile:
            outfile.truncate(0)
            json.dump(article_items, outfile, indent=4)
        
        print(kw)
    except Exception as e:
        print(e)


if __name__ == "__main__":
    #get_articles_from_kw_and_loc("business", "CA")
    get_articles_from_kw_and_loc(sys.argv[1], sys.argv[2])
else:
    get_articles_from_kw_and_loc(sys.argv[1], sys.argv[2])
