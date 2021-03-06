var express = require('express');
var json_file = require('./test_str(1).json');
const axios = require('axios')

var app = express();
var t1;
const results = [];

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(process.argv.includes("delayresponse")) {
        setTimeout(function(){
            next();
        }, 2000);
    } else {
        next();
    }
});

//Static Reading
app.get('/forecast', function (req, res) {
    console.log(json_file);
    axios.post('http://127.0.0.1:5000/makecalc', json_file)
      .then(function (response) {
        console.log("Success");
        console.log(response["data"][0]);
        res.json({
            day_wise_x : response["data"][0].replace('[','').replace(']','').split(','),
            day_wise_y : response["data"][1].replace('[','').replace(']','').split(','),
            week_x : response["data"][2].replace('[','').replace(']','').split(','),
            week_y : response["data"][3].replace('[','').replace(']','').split(','),
            daily_x : response["data"][4].replace('[','').replace(']','').split(','),
            daily_y : response["data"][5].replace('[','').replace(']','').split(','),
         }
        )
      });
});

app.get('/checkInDetails1', function (req, res) {
    airlines = ["6E", "AI",  "SJ", "GO", "VTI", "AK", "IX"]
    dest = ["DEL", "BLR", "COK", "HYD", "TRV", "CCU", "PAT", "PNQ", "AMD", "MAA", "DED", "SXR", "STV", "TRZ", "BDQ"]
    gates = ["1A","1B","2A","2B","3A","3B","4A","4B","5A","5B","6A","6B","7A","7B","8A","8B","9A","9B","10A","10B"]


    var today = new Date();
    var hr  = today.getHours() + ":"
    var min = (today.getMinutes()+Math.floor(Math.random() * 20)-5)
    if(min>=60)
        min = today.getMinutes()
    var time  = hr + min + ":" + today.getSeconds();
    airline_name = airlines[Math.floor(Math.random() * airlines.length)]
    dest_flt     = dest[Math.floor(Math.random() * dest.length)]
    gate = gates[Math.floor(Math.random() * gates.length)]


    res.json({
        air : airline_name,
        src : "BOM",
        des : dest_flt,
        num : Math.floor(Math.random() * 300),
        etd : time,
        cnt : Math.floor(Math.random() * 200),
        gate : gate,
        min : min
    })
});
app.get('/checkInDetails2', function (req, res) {
    airlines = ["6E", "AI",  "SJ", "GO", "VTI", "AK", "IX"]
    dest = ["DEL", "BLR", "COK", "HYD", "TRV", "CCU", "PAT", "PNQ", "AMD", "MAA", "DED", "SXR", "STV", "TRZ", "BDQ"]
    gates = ["1A","1B","2A","2B","3A","3B","4A","4B","5A","5B","6A","6B","7A","7B","8A","8B","9A","9B","10A","10B"]


    var today = new Date();
    var hr  = today.getHours() + ":"
    var min = (today.getMinutes()+Math.floor(Math.random() * 20)-5)
    if(min>=60)
        min = today.getMinutes()
    var time  = hr + min + ":" + today.getSeconds();
    airline_name = airlines[Math.floor(Math.random() * airlines.length)]
    dest_flt     = dest[Math.floor(Math.random() * dest.length)]
    gate = gates[Math.floor(Math.random() * gates.length)]


    res.json({
        air : airline_name,
        src : "BOM",
        des : dest_flt,
        num : Math.floor(Math.random() * 300),
        etd : time,
        cnt : Math.floor(Math.random() * 200),
        gate : gate,
        min : min
    })
});
app.get('/checkInDetails3', function (req, res) {
    airlines = ["6E", "AI",  "SJ", "GO", "VTI", "AK", "IX"]
    dest = ["DEL", "BLR", "COK", "HYD", "TRV", "CCU", "PAT", "PNQ", "AMD", "MAA", "DED", "SXR", "STV", "TRZ", "BDQ"]
    gates = ["1A","1B","2A","2B","3A","3B","4A","4B","5A","5B","6A","6B","7A","7B","8A","8B","9A","9B","10A","10B"]


    var today = new Date();
    var hr  = today.getHours() + ":"
    var min = (today.getMinutes()+Math.floor(Math.random() * 20)-5)
    if(min>=60)
        min = today.getMinutes()
    var time  = hr + min + ":" + today.getSeconds();
    airline_name = airlines[Math.floor(Math.random() * airlines.length)]
    dest_flt     = dest[Math.floor(Math.random() * dest.length)]
    gate = gates[Math.floor(Math.random() * gates.length)]


    res.json({
        air : airline_name,
        src : "BOM",
        des : dest_flt,
        num : Math.floor(Math.random() * 300),
        etd : time,
        cnt : Math.floor(Math.random() * 200),
        gate : gate,
        min : min
    })
});
app.get('/checkInDetails4', function (req, res) {
    airlines = ["6E", "AI",  "SJ", "GO", "VTI", "AK", "IX"]
    dest = ["DEL", "BLR", "COK", "HYD", "TRV", "CCU", "PAT", "PNQ", "AMD", "MAA", "DED", "SXR", "STV", "TRZ", "BDQ"]
    gates = ["1A","1B","2A","2B","3A","3B","4A","4B","5A","5B","6A","6B","7A","7B","8A","8B","9A","9B","10A","10B"]

    var today = new Date();
    var hr  = today.getHours() + ":"
    var min = (today.getMinutes()+Math.floor(Math.random() * 20)-5)
    if(min>=60)
        min = today.getMinutes()
    var time  = hr + min + ":" + today.getSeconds();
    airline_name = airlines[Math.floor(Math.random() * airlines.length)]
    dest_flt     = dest[Math.floor(Math.random() * dest.length)]
    gate = gates[Math.floor(Math.random() * gates.length)]

    res.json({
        air : airline_name,
        src : "BOM",
        des : dest_flt,
        num : Math.floor(Math.random() * 300),
        etd : time,
        cnt : Math.floor(Math.random() * 200),
        gate : gate,
        min : min
    })
});
app.get('/checkInDetails5', function (req, res) {
    airlines = ["6E", "AI",  "SJ", "GO", "VTI", "AK", "IX"]
    dest = ["DEL", "BLR", "COK", "HYD", "TRV", "CCU", "PAT", "PNQ", "AMD", "MAA", "DED", "SXR", "STV", "TRZ", "BDQ"]
    gates = ["1A","1B","2A","2B","3A","3B","4A","4B","5A","5B","6A","6B","7A","7B","8A","8B","9A","9B","10A","10B"]

    var today = new Date();
    var hr  = today.getHours() + ":"
    var min = (today.getMinutes()+Math.floor(Math.random() * 20)-5)
    if(min>=60)
        min = today.getMinutes()
    var time  = hr + min + ":" + today.getSeconds();
    airline_name = airlines[Math.floor(Math.random() * airlines.length)]
    dest_flt     = dest[Math.floor(Math.random() * dest.length)]
    gate = gates[Math.floor(Math.random() * gates.length)]

    res.json({
        air : airline_name,
        src : "BOM",
        des : dest_flt,
        num : Math.floor(Math.random() * 300),
        etd : time,
        cnt : Math.floor(Math.random() * 200),
        gate : gate,
        min : min
    })
});

app.get('/tickets/progression', function (req, res) {
    let labels = ["Parking Till Now"];
    let colors = ["#e74c3c"];
    let values = [];

    labels.forEach((label, index) => {
        let data = [];
        for(let i = 0; i < 7; i++) {
            data.push(Math.floor(Math.random() * 800) + i);
        }

        values.push({
            label,
            data,
            color: colors[index]
        });
    });

    res.json(values);
});


app.get('/stats/top', function (req, res) {
    res.json([
        {
            label: "Parking Floor 1",
            value: Math.floor(Math.random() * 200) + 10
        },
        {
            label: "Parking Floor 2",
            value: Math.floor(Math.random() * 200) + 15
        },
        {
            label: "Parking floor 3",
            value: Math.floor(Math.random() * 200) + 6
        },
        {
            label: "Parking floor 4",
            value: Math.floor(Math.random() * 200) + 19
        },
    ]);
});

app.get('/belt', function (req, res) {
    airlines = ["6E", "AI",  "SJ", "GO", "VTI", "AK", "IX"]
    src = ["DEL", "BLR", "COK", "HYD", "TRV", "CCU", "PAT", "PNQ", "AMD", "MAA", "DED", "SXR", "STV", "TRZ", "BDQ"]
    airline_name = airlines[Math.floor(Math.random() * airlines.length)]
    src_flt     = src[Math.floor(Math.random() * src.length)]

    res.json([
        {
            label: "Baggage Belt 1",
            air : airline_name,
            src : src_flt,
            value: Math.floor(Math.random() * 200) + 10
        },
        {
            label: "Baggage Belt 2",
            air : airline_name,
            src : src_flt,
            value: Math.floor(Math.random() * 200) + 15
        },
        {
            label: "Baggage Belt 3",
            air : airline_name,
            src : src_flt,
            value: Math.floor(Math.random() * 200) + 6
        },
        {
            label: "Baggage Belt 4",
            air : airline_name,
            src : src_flt,
            value: Math.floor(Math.random() * 200) + 19
        },
    ]);
});
app.get('/trolley/status', function (req, res) {
    let labels = ["pickup","drop","free"];
    let colors = ["#e74c3c"];
    let backgroundColor=["#3b6978","#84a9ac","#cae8d5"]
    let values = [];

 const csv = require('csv-parser');
 const fs = require('fs');

 // fs.createReadStream('trolleydata.csv')
 //   .pipe(csv())
 //   .on('data', (row) => {
 //     roW.push(row)
 //   })
 //   .on('end', () => {
 //     console.log('CSV file successfully processed');
 //   });



 var data =[1000,1000,1000]


data[0]=(Math.floor(Math.random() * 1000));
data[1]=(Math.floor(Math.random() * 1000));
data[2]=3000-data[0]-data[1]
// let data =Object.values(roW[0])
t1=data[0]+data[1]
// console.log(data)
        values.push({

            labels,
            data,
            colors,
            backgroundColor,
            t1

        });
    // });

    res.json(values);
});



app.listen(3001, function () {
    console.log('Data being served from http://localhost:3001');
});
