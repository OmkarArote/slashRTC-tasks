const express = require('express')
const cors = require('cors')
const app = express()
const port = 8080

app.use(express.json());
app.use(cors());

let list = [
    { "id": 1, "name": "Omkar" },
    { "id": 2, "name": "Hemant" },
    { "id": 3, "name": "Shubham" }
]

let faq = [
    {
        "id": 1,
        "question": "Why you should make an FAQ page?",
        "answer": "An FAQ page is a time-saving customer service tactic that provides the most commonly asked questions and answers for current or potential customers."
    },
    {
        "id": 2,
        "question": "When is an FAQ page appropriate?",
        "answer": "If you’re considering making an FAQ page and don’t know if it’s completely necessary, that’s ok. An FAQ page is almost always appropriate. If you get lots of the same questions over and over again, then you definitely need to create an FAQ page. When you have a blog with a multitude of great content, an FAQ page is needed to educate customers about your product through those articles."
    },
    {
        "id": 3,
        "question": "What are the most frequently asked questions?",
        "answer": "A good FAQ is general enough to address many issues. There are questions that just about every company answers on their FAQ page, so if you’re struggling to get started use these are your starting point. If they’re relevant to your company, of course."
    }
]

app.get('/pull', (req, res) => {
    res.send(list)
})

app.get('/pull_faq', (req, res) => {
    res.send(faq)
})

app.post('/pull', (req, res) => {
    ret_obj = list.find(obj => obj.id == req.body.id);
    res.send(ret_obj)
})


app.post('/push', (req, res) => {
    list.push(req.body);
    res.status(201);
    res.send(list);
})

app.post('/update', (req, res) => {
    upd_obj = list.findIndex(obj => obj.id == req.body.id);
    list[upd_obj].name = req.body.name;
    res.send(list);
})

app.post('/delete', (req, res) => {
    del_obj = list.findIndex(obj => obj.id == req.body.id);
    list.splice(del_obj, 1);
    res.send(list);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})