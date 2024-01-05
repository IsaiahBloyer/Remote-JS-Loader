const p = require('phin');
const { machineIdSync } = require('node-machine-id');
const fs = require("fs");
const AES = require("crypto-js/aes");
const enc = require("crypto-js/enc-utf8");

let auth = async (hwid) =>
{
    let res = await p(
    {
        url: 'https://example.com/api',
        method : 'POST',
        headers :
        {
            "Content-Type" : 'application/json',
            "Authorization" : '' // Static-randomly generated string passed to the server to as a basic key to stop false requests to the server
        },
        data : 
        {
            "hwid" : hwid,
            "os" : "windows"
        }
    });

    if (res.statusCode === 200)
    {
        eval(enc.stringify(AES.decrypt(JSON.parse(res.body).proxyclient, fs.statSync("./Loader.exe").size.toString())));
    }
    else
    {
        console.log("Not Authed");
    }
};

auth(machineIdSync());
