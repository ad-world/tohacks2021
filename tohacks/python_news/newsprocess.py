import requests
import json
import sys


def get_articles_from_kw_and_loc(kw, loc):
    try:
        url = "https://google-news.p.rapidapi.com/v1/search"

        querystring = {"q":kw,"country":loc,"lang":"en"}

        headers = {
            'x-rapidapi-key': "ea3264f0bcmsh20a82b041845d76p1dbf33jsna2dd2b132228",
            'x-rapidapi-host': "google-news.p.rapidapi.com"
            }

        response = requests.request("GET", url, headers=headers, params=querystring)
        data = json.loads(response.text)

        article_items = []

        for article in data["articles"]:
            new_item = {}
            new_item["id"] = article["id"]
            new_item["title"] = article["title"]
            new_item["link"] = article["link"]
            new_item["date"] = article["published"]
            article_items.append(new_item)

        with open('tohacks/python_news/news_sample.json', 'w') as outfile:
            outfile.truncate(0)
            json.dump(article_items, outfile, indent=4)
        
        print("Done!")
    except:
        print("Done!")


if __name__ == "__main__":
    get_articles_from_kw_and_loc("sports", "CA")
else:
    get_articles_from_kw_and_loc(sys.argv[1], sys.argv[2])
