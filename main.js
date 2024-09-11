const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("index");
});
app.get("/login", (req, res) => {
    res.render("login");
});
app.get("/signup", (req, res) => {
    res.render("signup");
});
app.get("/states/uttarpradesh", (req, res) => {
    res.render("up");
});
app.get("/states/AndhraPradesh", (req, res) => {
    res.render("AnP");
});
app.get("/states/Arunachalpradesh", (req, res) => {
    res.render("arp");
});
app.get("/states/Assam", (req, res) => {
    res.render("assam");
});
app.get("/states/Bihar", (req, res) => {
    res.render("bihar");
});
app.get("/states/Chhatissgarh", (req, res) => {
    res.render("chhat");
});
app.get("/states/goa", (req, res) => {
    res.render("goa");
});
app.get("/states/gujarat", (req, res) => {
    res.render("gujarat");
});
app.get("/states/harayana", (req, res) => {
    res.render("harayana");
});
app.get("/states/himachal", (req, res) => {
    res.render("himachal");
});
app.get("/states/jharkhand", (req, res) => {
    res.render("jharkhand");
});
app.get("/states/karnataka", (req, res) => {
    res.render("karnataka");
});
app.get("/states/kerala", (req, res) => {
    res.render("kerala");
});
app.get("/states/madhyapradesh", (req, res) => {
    res.render("mp");
});
app.get("/states/maharashtra", (req, res) => {
    res.render("maha");
});
app.get("/states/manipur", (req, res) => {
    res.render("manipur");
});
app.get("/states/meghalaya", (req, res) => {
    res.render("meghalaya");
});
app.get("/states/mizoram", (req, res) => {
    res.render("mizo");
});
app.get("/states/nagaland", (req, res) => {
    res.render("nagaland");
});
app.get("/states/odisha", (req, res) => {
    res.render("odisha");
});
app.get("/states/punjab", (req, res) => {
    res.render("punjab");
});
app.get("/states/rajasthan", (req, res) => {
    res.render("rajasthan");
});
app.get("/states/sikkim", (req, res) => {
    res.render("sikkim");
});
app.get("/states/tamilnadu", (req, res) => {
    res.render("tamil");
});
app.get("/states/telangana", (req, res) => {
    res.render("telangana");
});
app.get("/states/tripura", (req, res) => {
    res.render("tripura");
});
app.get("/states/uttarakhand", (req, res) => {
    res.render("uttarakhand");
});
app.get("/states/westbengal", (req, res) => {
    res.render("west");
});
app.post("/", (req, res) => {
    res.redirect("/states/req.body.name");
});
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});