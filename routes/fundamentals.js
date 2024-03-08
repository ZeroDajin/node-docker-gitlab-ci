const express = require('express');
const router = express.Router();
const fundamentals = require('../Fundamentals');

const variableData = process.env.variableData || 'NodeJS Code'

router.get('/myFunction1', function(req, res, next) {
    const result = fundamentals.myFunction1(5, 10);
    res.send(`Result: ${result}`);
});
router.get('/myFunction2', function(req, res, next) {
    const result = fundamentals.myFunction2(5, 10);
    res.send(`Result: ${result}`);
});
router.get('/myFunction3', function(req, res, next) {
    const result = fundamentals.myFunction3(5);
    res.send(`Result: ${result}`);
});
router.get('/myFunction4', function(req, res, next) {
    const result = fundamentals.myFunction4('abcd',1);
    res.send(`Result: ${result}`);
});
router.get('/myFunction5', function(req, res, next) {
    const result = fundamentals.myFunction5('abcdefg');
    res.send(`Result: ${result}`);
});
router.get('/myFunction6', function(req, res, next) {
    const result = fundamentals.myFunction6('abcdefg');
    res.send(`Result: ${result}`);
});
router.get('/myFunction7', function(req, res, next) {
    const result = fundamentals.myFunction7('abcdefg');
    res.send(`Result: ${result}`);
});
router.get('/myFunction8', function(req, res, next) {
    const result = fundamentals.myFunction8("praise");
    res.send(`Result: ${result}`);
});
router.get('/myFunction9', function(req, res, next) {
    const result = fundamentals.myFunction9('abcdefgh');
    res.send(`Result: ${result}`);
});
router.get('/myFunction10', function(req, res, next) {
    const result = fundamentals.myFunction10('abcdefg');
    res.send(`Result: ${result}`);
});
router.get('/myFunction11', function(req, res, next) {
    const result = fundamentals.myFunction11(100,50);
    res.send(`Result: ${result}`);
});
router.get('/myFunction12', function(req, res, next) {
    const result = fundamentals.myFunction12(6,5,4,3,2,1);
    res.send(`Result: ${result}`);
});
router.get('/myFunction13', function(req, res, next) {
    const result = fundamentals.myFunction13('cheese', 'cake');
    res.send(`Result: ${result}`);
});
router.get('/myFunction14', function(req, res, next) {
    const result = fundamentals.myFunction14(-111);
    res.send(`Result: ${result}`);
});
router.get('/myFunction15', function(req, res, next) {
    const result = fundamentals.myFunction15('m', 'how many times does the character occur in this sentence?');
    res.send(`Result: ${result}`);
});
router.get('/myFunction16', function(req, res, next) {
    const result = fundamentals.myFunction16(1048);
    res.send(`Result: ${result}`);
});
router.get('/myFunction17', function(req, res, next) {
    const result = fundamentals.myFunction17(10, 100);
    res.send(`Result: ${result}`);
});
router.get('/myFunction18', function(req, res, next) {
    const result = fundamentals.myFunction18(2.12397);
    res.send(`Result: ${result}`);
});
router.get('/myFunction19', function(req, res, next) {
    const result = fundamentals.myFunction19(10);
    res.send(`Result: ${result}`);
});


module.exports = router;
 