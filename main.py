from flask import Flask, render_template
import json
import random

app = Flask(__name__)

@app.route('/')
def index():
  return render_template('index.html')


@app.route('/impromptu')
def defaultImproptu():
  count = 0

  with open("prompts.json", "r") as read_file:
      data = json.load(read_file)
      for x in data:
        count += 1


  #print(data[0]["title"])
  #print(count)

  nums = list(range(0, count))
  random.shuffle(nums)
  n1 = data[nums[0]]
  n2 = data[nums[1]]
  n3 = data[nums[2]]
  js="src=../static/redirect.js"

  return render_template('prompts.html', n1=n1, n2=n2, n3=n3, type="impromptu", js=js)


@app.route('/impromptu/<topic>')
def impTimer(topic):
  return render_template('timer.html', topic=topic)

@app.route('/extemporaneous/<topic>')
def extTimer(topic):
  return render_template('timer.html', topic=topic)

@app.route('/extemporaneous')
def extemp():
  count = 0

  with open("extemps.json", "r") as read_file:
      data = json.load(read_file)
      for x in data:
        count += 1


  #print(data[0]["title"])
  #print(count)

  nums = list(range(0, count))
  random.shuffle(nums)
  n1 = data[nums[0]]
  n2 = data[nums[1]]
  n3 = data[nums[2]]
  js="src=../static/extemp.js"
  return render_template('prompts.html', n1=n1, n2=n2, n3=n3, type="extemporaneous", js=js)

app.run(host='0.0.0.0', port=8080, debug=True)