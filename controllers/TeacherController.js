const TeacherController = {

    create(req, res) {
        res.send({
            message: "Success! New teacher record created."
        });
    },

    readAll(req, res) {
        res.send({
            message: "Success! Teacher records found."
        });
    },

    readOne(req, res) {
        const params = req.params;

        res.send({
            message: "Success! Teacher details found.",
            q: params
        });
    },

    update(req, res) {
        res.send({
            message: "Success! Teacher record has been updated."
        });
    },

    destroy(req, res) {
        res.send({
            message: "Success! Teacher record has been deleted."
        });
    }

};  

module.exports = TeacherController;