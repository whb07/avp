from quart import render_template, request
from fastai.vision import Path, load_learner, open_image
from io import BytesIO
from config import create_app

app = create_app()


@app.route('/')
async def hello():
    return await render_template('index.html')


@app.route('/infer', methods=['POST'])
async def infer():
    path = Path('data/')
    learn = load_learner(path)
    data = await request.get_data()
    img = open_image(BytesIO(data))
    pred_class, pred_idx, outputs = learn.predict(img)
    return str(pred_class)
