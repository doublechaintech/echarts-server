
const express = require('express')

const sampecharts = require('./sample-charts')
const echartsservice=require('./echarts-service')
const errorImageService=require('./error-image')
const {SampleChartServivce}=sampecharts;
const {EChartsServivce}=echartsservice
const {ErrorImage} = errorImageService
const app = express()
const port = 3000
app.use(express.json())
console.log(sampecharts)


app.get('/', (req, res) => {

    res.send('Hello World!')
})
  
app.post('/', (req, res) => {
    
    EChartsServivce({req,res,sampleData:req.body})

})

app.get('/err', (req, res) => {
    ErrorImage({req,res,text:"测试错误场景"})
})


app.post('/body', (req, res) => {
    res.send("'"+JSON.stringify(req.body)+"'\n")
    res.sendStatus(200);
    res.end();
})

app.get('/sample', (req, res) => {
    SampleChartServivce({req, res})
})

app.get('/ping', (req, res) => {
    res.send('ok!')
})
    

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
