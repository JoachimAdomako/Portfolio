import express, { urlencoded } from "express"
import { MongoClient } from "mongodb";

const uri = "mongodb+srv://dbUserJo:r71D2n5lRpc4PZMG@db-adjo.zpq4sxl.mongodb.net/WebOntwikkeling?retryWrites=true&w=majority";

const client = new MongoClient(uri);
const app = express();

app.set("view engine","ejs");
app.set("port",3000);
app.use(express.static("Public"));

app.use(express.urlencoded())


app.get("/",(req,res)=>{
    res.render('index')
})

app.post("/", async(req,res)=>{
    try{
        await client.connect();

        const db = await client.db("Portfolio").collection("Comments");
    let naam = req.body.naam;
    let Email = req.body.email;
    let comment = req.body.comment;

    await db.insertOne({naam,Email,comment});
}catch(e){
    console.error(e);
}finally{
    await client.close()
    console.log("check the db")
}
res.render("index")

})


app.get("/pokemonBattler",(req,res)=>{
    res.render('battler')
})

app.listen(app.get("port"),()=>{
    console.log("{Portfolio Running} http://localhost:" + app.get("port"));
})