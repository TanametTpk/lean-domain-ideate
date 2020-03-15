import requests
from bs4 import BeautifulSoup
import re
import json

r = requests.get("https://en.wiktionary.org/wiki/Appendix:1000_basic_English_words") 
soup = BeautifulSoup(r.content, "html.parser")

ddTags = soup.findAll("dd")
words = []

for ddTag in ddTags:
    for aTag in ddTag.findAll("a"):
        words.append(aTag.text)

r = requests.get("https://www.shorteng.com/%E0%B8%84%E0%B8%B3%E0%B8%A8%E0%B8%B1%E0%B8%9E%E0%B8%97%E0%B9%8C%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%84%E0%B8%94%E0%B9%89%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B9%83%E0%B8%993500-%E0%B8%84%E0%B8%B3/") 
soup = BeautifulSoup(r.content, "html.parser")

trTags = soup.findAll("tr")[1:]
for trTag in trTags:
    word = trTag.find("td").text
    regex = re.compile('[@_!#$%^&*()<>?/\|}{~:\-, ]')  
    if(regex.search(word) == None): 
        words.append(word)

words = list(set(words))

result = {
    "words":words
}

f = open("words.json", "w")
f.write(json.dumps(result))
f.close()