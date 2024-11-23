const diemDanhModel = require('../models/diemDanhModel');


const diemdanh = async (req,res) => {
    const {hoTen,mssv} = req.body;
    


    await diemDanhModel.create({
        hoTen,
        mssv
    }) 

    res.status(200).json({
        message:`${hoTen} diem danh thanh cong!`
    })
    
}

const getDanhSachDiemDanh = async (req,res) => {
    
    const danhSachDiemDanh = await diemDanhModel.find();

    res.status(200).json(danhSachDiemDanh);
}


module.exports = {diemdanh,getDanhSachDiemDanh}