import json
from newspaper import Article
from newspaper import Config
import sys
import datetime


def get_article_info(url):
    true_title = "Error!"
    true_text = "Article could not be retrieved."
    true_authors = ""
    true_date = ""
    try:
        user_agent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'
        config = Config()
        config.browser_user_agent = user_agent
        article = Article(url, language="en", config=config)
        article.download()
        article.parse()
        true_title = article.title
        true_text = article.text
        true_authors = article.authors
        true_date = article.publish_date.strftime("%Y-%m-%d")
    except:
        pass
    new_item = {}
    new_item["title"] = true_title
    new_item["text"] = true_text
    new_item["authors"] = true_authors
    new_item["date"] = true_date
    with open('python_news/article_sample.json', 'w') as outfile:
        outfile.truncate(0)
        json.dump(new_item, outfile, indent=4)
    
    print("Done!")


if __name__ == "__main__":
    get_article_info("https://www.forbes.com/sites/mikeozanian/2021/05/07/worlds-most-valuable-sports-teams-2021/")
else:
    print("mama mia!")
    get_article_info(sys.argv[1])
