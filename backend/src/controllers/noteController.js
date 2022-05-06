const NotesModel = require("../models/Notes");

const add = async (req, res) => {
    let { title, description, tag } = req.body;
    let userNote = await NotesModel.create({
        title, description, tag
    })
    res.json({
        message: "Notes Added",
        data: userNote
    })
}

const remove = async (req, res) => {
    let paramsId = req.params.id;
    let findById = await NotesModel.deleteOne({ _id: paramsId })
    if (findById.deletedCount === 0) {
        res.json("Note Not Found")
    } else {
        res.json({
            message: "note Deleted Successfully"
        })
    }
}

const update = async (req, res) => {
    let paramsId = req.params.id;
    const { title, description, tag } = req.body;

    let findNote = await NotesModel.updateOne({ _id: paramsId }, {
        title,
        description,
        tag
    })
    res.json({
        msg : "Updated Successfully",
        data : findNote
    })
}


module.exports = {
    add,
    remove,
    update,

}