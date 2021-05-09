from currentsapi import CurrentsAPI

api = CurrentsAPI(api_key='Xv8moUsGDBZedToKeUcs4xfd4LuTYuBx0mghd3cQOJiUjLut')

print(api.latest_news())

print(api.search(keywords='Canada', start_date='2021-05-08'))

