module.exports = {
    addSkillForUser: (req, res, next) => {
        res.send({
            "message": "Add Skills for user"
        });
    },

    addAttachments: (req, res, next) => {
        res.send({
            "message": "Add attachments against skills"
        });
    }
}