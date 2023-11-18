const fs=require('fs');
const rfs=require('rotating-file-stream')
const path=require('path')

const dotenv=require('dotenv').config();

const logDirectory=path.join(__dirname,"../production_logs")
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const accessLogStream=rfs.createStream('access.log',{
    interval:'1M',
    path:logDirectory
})

const development={
    name: 'development',
    asset_path:'./assets',
    session_cookie_key: '29DD93AED29EAA4413D48585AA25B',
    db:'BlissIndia',
    smtp:{
        service:'gmail',
        host:'smtp.gmail.com',
        port: 587,
        secure:false,
        auth:{
            user:'blissofficialindia',
            pass:'ikfsjkoxlwtatozc'
        }
    },
    google_client_id: "66736520931-dcd643omimgjuof7kf7tc9j1iq8nro4s.apps.googleusercontent.com",
    google_client_secret: "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",
    google_call_back_url: "http://localhost:8000/users/auth/google/callback",
    morgan:{
        mode:'dev',
        options:{stream:accessLogStream}
    }
}

const production={
    name:'production',
    asset_path:'./assets',
    session_cookie_key: '29DD93AED29EAA4413D48585AA25B',
    db:'BlissIndia',
    smtp:{
        service:'gmail',
        host:'smtp.gmail.com',
        port: 587,
        secure:false,
        auth:{
            user:'blissofficialindia',
            pass:'ikfsjkoxlwtatozc'
        }
    },
    google_client_id: "66736520931-dcd643omimgjuof7kf7tc9j1iq8nro4s.apps.googleusercontent.com",
    google_client_secret: "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",
    google_call_back_url: "http://localhost:8000/users/auth/google/callback",
    morgan:{
        mode:'dev',
        options:{stream:accessLogStream}
    }
    
}

console.log(production);

module.exports=eval(process.env.environment)==undefined?development:production;
