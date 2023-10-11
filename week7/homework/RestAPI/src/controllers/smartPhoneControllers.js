const SmartPhone = require('../models/smartPhones');

exports.getAllSmartPhones = async (req, res) => {
    try {
        const result = await SmartPhone.find();
        if (!result) {
            res.json({
                status: "fail",
                message: "No smart phones found"
            });
        } 
        else {
            res.json({
                status: "success",
                message: "Smart phones found",
                data: result,
            });
        }
    }
    catch (error) {
        console.log(error);
    }
};

exports.createSmartPhone = async (req, res) => {
    console.log(req.body);
    const data = new SmartPhone(req.body);
    console.log(data);
    const result = await data.save();
    if(!result) {
        res.json({
            status: "fail",
            message: "Failed to create smart phone"
        });
    }
    else {
        res.json({
            status: "success",
            message: "Smart phone created",
            data: data,
        });
    }
}

exports.updateSmartPhoneById = async (req, res) => {
    try{
        const _id = req.params.id;
        const result = await SmartPhone.findByIdAndUpdate(_id, req.body, {new: true});
        if(!result) {
            res.json({
                status: "fail",
                message: "Failed to update smart phone"
            });
        }
        else {
            res.json({
                status: "success",
                message: "Smart phone updated",
                data: result,
            });
        }
    }
    catch (error) {
        console.log(error);
    }
}

exports.deleteSmartPhoneById = async (req, res) => {
    try{
        const _id = req.params.id;
        const result = await SmartPhone.findByIdAndDelete(_id);
        if(!result) {
            res.json({
                status: "fail",
                message: "Failed to delete smart phone"
            });
        }
        else {
            res.json({
                status: "success",
                message: "Smart phone deleted",
                data: result,
            });
        }
    }
    catch (error) {
        console.log(error);
    }
}