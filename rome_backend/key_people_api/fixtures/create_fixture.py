import json

with open('./data.json') as f:
  json_data = json.load(f)
f.close()

fix_data = []

for item in json_data:
  new_json = {}
  new_json['model'] = 'key_people_api.person'
  new_json['pk'] = json_data.index(item) + 1
  new_json['fields'] = item
  fix_data.append(new_json)


with open('./fixture_data.json', 'w') as fix_f:
  print(fix_data)
  json.dump(fix_data, fix_f)

fix_f.close()

