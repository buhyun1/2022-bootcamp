import csv
from urllib.request import urlopen
from urllib.parse import quote_plus
from bs4 import BeautifulSoup


# title_area

search = input('검색어 입력 : ')
url = f'https://m.search.naver.com/search.naver?sm=mtp_hty.top&where=m&query={quote_plus(search)}'
html = urlopen(url).read()
soup = BeautifulSoup(html, 'html.parser')

total = soup.select('.title_area')
searchlist = []

for i in total:
    temp = []
    temp.append(i.text)
    # temp.append(i.attrs['href'])
    searchlist.append(temp)

f = open(f'{search}.csv', 'w', encoding='utf-8', newline='')
csvwriter = csv.writer(f)
for i in searchlist:
    csvwriter.writerow(i)

f.close()
print('완료')
