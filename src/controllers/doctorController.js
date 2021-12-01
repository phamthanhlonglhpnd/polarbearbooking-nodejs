import doctorService from '../services/doctorService';

let getTopDoctorHome = async (req, res) => {
    let limit = req.query.limit;
    if(!limit) limit = 10;
    try {
        let doctors = await doctorService.getTopDoctorHomeService(+limit);
        return res.status(200).json(doctors);
    } catch(e) {
        return res.status(200).json({
            errCode: -1,
            errMessage: "Error from server!"
        })
    }
}

let getAllDoctors = async (req, res) => {
    try {
        let doctors = await doctorService.getAllDoctorsService();
        return res.status(200).json(doctors);
    } catch(e) {
        return res.status(200).json({
            errCode: -1,
            errMessage: "Error from server!"
        })
    }
}

let postInforDoctor = async(req, res) => {
    try {
        let doctors = await doctorService.postInforDoctorService(req.body);
        return res.status(200).json(doctors);
    } catch(e) {
        return res.status(200).json({
            errCode: -1,
            errMessage: "Error from server!"
        })
    }
}

let getDetailDoctor = async (req, res) => {
    try {
        let infor = await doctorService.getDetailDoctorService(req.query.id);
        return res.status(200).json(infor);
    } catch(e) {
        return res.status(200).json({
            errCode: -1,
            errMessage: "Error from server!"
        })
    }
}

let fixInforDoctor = async (req, res) => {
    try {
        let infor = await doctorService.fixInforDoctorService(req.body);
        return res.status(200).json(infor);
    } catch(e) {
        return res.status(200).json({
            errCode: -1,
            errMessage: "Error from server!"
        })
    }
}

let bulkCreateSchedule = async (req, res) => {
    try {
        let infor = await doctorService.bulkCreateScheduleService(req.body);
        return res.status(200).json(infor);
    } catch(e) {
        return res.status(200).json({
            errCode: -1,
            errMessage: "Error from server!"
        })
    }
}

let getScheduleByDate = async (req, res) => {
    try {
        let schedule = await doctorService.getScheduleByDateService(req.query.doctorId, req.query.date);
        return res.status(200).json(schedule);
    } catch(e) {
        return res.status(200).json({
            errCode: -1,
            errMessage: "Error from server!"
        })
    }
}

module.exports = {
    getTopDoctorHome,
    getAllDoctors,
    postInforDoctor,
    getDetailDoctor,
    fixInforDoctor,
    bulkCreateSchedule,
    getScheduleByDate,
}