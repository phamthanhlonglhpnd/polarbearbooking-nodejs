import db from '../models/index';

let createInforClinicService = async (data) => {
    try {
        if(!data.name 
                || !data.image 
                || !data.address
            ) {
            return {
                errCode: 1,
                errMessage: "Missing param!"
            } 
        } else {
            await db.Clinic.create({
                name: data.name,
                image: data.image,
                address: data.address,
                descriptionHTML: data.descriptionHTML,
                descriptionMarkdown: data.descriptionMarkdown,
                professionalStrengthsHTML: data.professionalStrengthsHTML,
                professionalStrengthsMarkdown: data.professionalStrengthsMarkdown,
                equipmentsHTML: data.equipmentsHTML,
                equipmentsMarkdown: data.equipmentsMarkdown
            });
            return {
                errCode: 0,
                errMessage: "OK!"
            }
        }
        
    } catch(e) {
        return e;
    }
}

let getAllClinicService = async () => {
    try {
        let clinics = await db.Clinic.findAll();
        if(clinics) {
            return {
                errCode: 0,
                errMessage: " OK!",
                clinics
            }
        } else {
            return {
                errCode: 1,
                errMessage: "Find specialty fail!"
            }
        }
    } catch(e) {
        return e;
    }
}

let deleteClinicService = async (id) => {
    try {
        if(!id) {
            return {
                errCode: 1,
                errMessage: "Missing param!"
            }
        } else {
            let data = await db.Clinic.findOne({
                where: {id: id}
            });
            if(!data) {
                return {
                    errCode: 2,
                    errMessage: "Not found!"
                }
            } else {
                await db.Clinic.destroy({
                    where: {id: id}
                });
                return {
                    errCode: 0,
                    errMessage: "OK!"
                }
            }    
        }
    } catch (e) {
        return e;
    }
}

let updateClinicService = async (data) => {
    try {
        if(!data.id 
                || !data.name 
                || !data.address
            ) {
            return {
                errCode: 1,
                errMessage: "Missing params!"
            }
        } else {
            let clinic = await db.Clinic.findOne({
                where: {id: data.id},
                raw: false
            });
            if(!clinic) {
                return {
                    errCode: 2,
                    errMessage: "Not found!"
                }
            } else {
                clinic.name = data.name;
                clinic.address = data.address;
                clinic.descriptionHTML = data.descriptionHTML;
                clinic.descriptionMarkdown = data.descriptionMarkdown;
                if(data.image) {
                    clinic.image = data.image;
                }
                await clinic.save();
                return {
                    errCode: 0,
                    errMessage: "Update success!"
                }
            }
        }
    } catch(e) {
        return e;
    }
}

let getHomeClinicService = async () => {
    try {
        let clinics = await db.Clinic.findAll({
            attributes: ['id', 'image', 'name', 'address']
        });
        if(clinics) {
            return {
                errCode: 0,
                errMessage: " OK!",
                clinics
            }
        } else {
            return {
                errCode: 1,
                errMessage: "Find specialty fail!"
            }
        }
    } catch(e) {
        return e;
    }
}

let getDetailClinicService = async (id) =>  {
    try {
        if(!id) {
            return {
                errCode: 1,
                errMessage: "Missing param!"
            } 
        } else {
            let clinic = await db.Clinic.findOne({
                where: {
                    id: id
                },
            });
            return {
                errCode : 0,
                errMessage: "OK!",
                clinic
            }
        }
    } catch(e) {
        return e;
    }
}

module.exports = {
    createInforClinicService,
    getAllClinicService,
    deleteClinicService,
    updateClinicService,
    getHomeClinicService,
    getDetailClinicService
}