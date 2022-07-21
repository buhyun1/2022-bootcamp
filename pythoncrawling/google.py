from urllib.parse import quote_plus
from bs4 import BeautifulSoup
from selenium import webdriver

baseurl = 'https://www.google.com/search?q='
plusurl = input('검색할까요? : ')

url = baseurl + quote_plus(plusurl)

driver = webdriver.Chrome()
driver.get(url)

html = driver.page_source
soup = BeautifulSoup(html)
r = soup.select('.yuRUbf')
print(type(r))
# for i in yuRUbf
