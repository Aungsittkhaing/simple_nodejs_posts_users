const DB = require('../databases/post');
const Helper = require('../utils/helper');

const all = async(req, res, next) => {
    let posts = await DB.find().populate('user', '-password -__v');
    Helper.fMsg(res, 'All Posts', posts);
}
const get = async(req, res, next) => {
    let post = await DB.findById(req.params.id).populate('user', '-password -__v');
    if(post){
        Helper.fMsg(res, "Single Post", post);
    }else{
        next(new Error("No post with that id sir!"));
    }
}
const post = async(req, res, next) => {
    let result = await new DB(req.body).save();
    Helper.fMsg(res, "Post Added", result);
}
const patch = async(req, res, next) => {
    res.json({msg : 'Patch post'});
}
const drop = async(req, res, next) => {
    res.json({msg : 'Delete post'});
}
module.exports = {
    all,
    get,
    post,
    patch,
    drop
}