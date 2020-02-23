import json

with open('./data.json') as f:
  data = json.load(f)
f.close()

fix_data = {}

for item in data:
  print(item)

with open('./fixture_data.json', 'w') as fix_f:
  json.dump(fix_data, fix_f)

fix_f.close()

