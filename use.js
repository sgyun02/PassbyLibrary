const express = require('express')
const app = express()
const port = 3000

app.use(express.static('web'))

app.get('/info', function(req,res){
    var request = require('request');
    var url = 'http://apis.data.go.kr/6260000/BusanLibraryInfoService/getLibraryInfo?serviceKey=a0HzUjdhfiDRG2V%2FjMIlAzgk1QEk6W4zt2B9TAEBe7a1FjXLS90DPxsidoetDbYSeljkTdKvXKSGeYw%2BPawgww%3D%3D';
    var library_area = req.query.library_area;
    var encodedLibraryArea = encodeURIComponent(library_area); // 인코딩

    url = url + "&library_area="+ encodedLibraryArea + "&resultType=json"

    var options = {
        'method': 'GET',
        'url': url
      };
      request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
        res.send(response.body);
      }); 
    })

app.get('/book', function(req,res){
    var request = require('request');
    var url = 'http://apis.data.go.kr/6260000/BookSearchWordBestService/getBookSearchWordBest?serviceKey=a0HzUjdhfiDRG2V%2FjMIlAzgk1QEk6W4zt2B9TAEBe7a1FjXLS90DPxsidoetDbYSeljkTdKvXKSGeYw%2BPawgww%3D%3D&numOfRows=10&pageNo=1&resultType=json';
      
    var options = {
        'method': 'GET',
        'url': url
      };
      request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
        res.send(response.body);
      }); 
     })

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))