'''
old frontend similar code

  // getBio = (person: string) => {
  //   return new Promise((resolve, reject) => {
  //     this.dataService.getPage(person)
  //     .subscribe(res => this.handleWikiQuery(res));
  //     setTimeout(resolve, 1000);
  //   });
  // }

  // handleWikiQuery(result: string) {
  //   const parsedHTML = this.parser.parseFromString(JSON.parse(result).parse.text['*'], 'text/html');
  //   const content = parsedHTML.getElementsByClassName('mw-parser-output')[0];
  //   const elements = [];
  //   // tslint:disable-next-line: prefer-for-of
  //   for (let i = 0; i < content.children.length; i++) {
  //     elements.push(content.children[i]);
  //   }
  //   const bioElement = elements.find(element => element.tagName === 'P' && element.className !== 'mw-empty-elt');
  //   const nameContent = JSON.parse(result).parse.title;

  //   this.bios.push({ name: nameContent, bio: bioElement.textContent });
  // }

  // updateBioAndWiki(person: string) {
  //   const personToUpdate = this.people.find(o => o.name === person);
  //   personToUpdate.bio = this.bios.find(bio => bio.name === person).bio;
  //   personToUpdate.wiki = `https://en.wikipedia.org/wiki/${person.replace(/ /g, '_')}`;
  // }

  // getPage(name: string) {
  //   return this.http.get(this.generateAPIurl(name), {responseType: 'text'});
  // }

  // generateAPIurl(name: string) {
  //   return `https://en.wikipedia.org/w/api.php?action=parse&page=${name.replace(/ /g, '%20')}&format=json&origin=*`;
  // }
'''

import json
import requests
import os
from bs4 import BeautifulSoup as domparser


def generate_wiki_api_url(name):
  return 'https://en.wikipedia.org/w/api.php?action=parse&page=' + name.replace(" ", "%20") + '&format=json&origin=*'

def get_wiki_api_page(name):
  return requests.get(url=generate_wiki_api_url(name))

def get_wiki_page(name):
  return 'https://en.wikipedia.org/wiki/' + name.replace(" ", "%20")

def get_person_bio(name):
  api_response = get_wiki_api_page(generate_wiki_api_url(name))
  response_json = json.loads(api_response.text)
  page_html_text = response_json['parse']['text']['*']
  parsed_html = domparser(page_html_text, features='html.parser')
  content = parsed_html.findAll('div', {'class': 'mw-parser-output'})[0]
  bioElement = content.findAll('p', class_=None, recursive=False)
  return bioElement[0].getText()

if __name__=="__main__":
  print('Processing data from ' + os.path.realpath('key_people_api/fixtures/data.json') + '...')
  with open(os.path.realpath('key_people_api/fixtures/data.json')) as f:
    json_data = json.load(f)
  f.close()

  fix_data = []

  print('Constructing new fixtures from data...')
  for item in json_data:
    item['order'] = json_data.index(item)
    item['wiki'] = get_wiki_page(item['name'])
    item['bio'] = get_person_bio(item['name'])
    new_json = {}
    new_json['model'] = 'key_people_api.person'
    new_json['pk'] = json_data.index(item) + 1
    new_json['fields'] = item
    fix_data.append(new_json)

  print('Printing new fixtures to fixture_data.json, run \'python manage.py loaddata [path to fixtures folder]/fixture_data.json\' to upload new data to the database')
  with open(os.path.realpath('key_people_api/fixtures/fixture_data.json'), 'w') as fix_f:
    # print(json.dumps(fix_data, indent=2))
    json.dump(fix_data, fix_f)
  fix_f.close()
