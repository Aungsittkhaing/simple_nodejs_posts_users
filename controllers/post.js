const all = async(req, res, next) => {
    res.json({msg : 'All Post'})
}
const get = async(req, res, next) => {
    res.json({msg : 'Single post'});
}
const post = async(req, res, next) => {
    res.json({msg : 'Post new added', result : req.body});
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