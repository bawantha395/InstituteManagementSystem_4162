const createHttpError = require("http-errors");
const mongoose = require("mongoose");
const MarkModel = require("../model/mark");

exports.create = async (req, res, next) => {
  const { sRegNo, markValue, grade, teacherName } = req.body;
  try {
    if (!sRegNo || !markValue || !grade || !teacherName) {
      throw createHttpError(400, "Please provide all the required fields");
    }

    const mark = new MarkModel({
      sRegNo,
      markValue,
      grade,
      teacherName,
    });

    const result = await mark.save();

    res.status(201).send(result);
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  const markId = req.params.id;

  const { sRegNo, markValue, grade } = req.body;

  try {
    if (!mongoose.isValidObjectId(markId)) {
      throw createHttpError(400, "Invalid Id");
    }
    if (!sRegNo || !markValue || !grade) {
      throw createHttpError(400, "Please provide all the required fields");
    }

    const mark = await MarkModel.findById(markId).exec();

    if (!mark) {
      throw createHttpError(404, "mark not found");
    }

    mark.sRegNo = sRegNo;
    mark.markValue = markValue;
    mark.grade = grade;

    const result = await mark.save();

    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  const markId = req.params.id;
  //params localhost:3000/api/v1/vehicle/1234
  //query localhost:3000/api/v1/vehicle/?id=1234

  try {
    if (!mongoose.isValidObjectId(markId)) {
      throw createHttpError(400, "Invalid Id");
    }
    const result = await MarkModel.findByIdAndDelete(markId).exec();

    if (!result) {
      throw createHttpError(404, "Mark not found");
    }

    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const result = await MarkModel.find().exec();
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

exports.getOne = async (req, res, next) => {
  const Id = req.params.id;

  try {
    if (!mongoose.isValidObjectId(Id)) {
      throw createHttpError(400, "Invalid Id");
    }

    const result = await MarkModel.findById(Id).exec();

    if (!result) {
      throw createHttpError(404, "Mark not found");
    }

    res.status(200).send(result);
  } catch (error) {}
};

exports.search = async (req, res, next) => {
  const query = req.quert.q;

  try {
    if (!query) {
      throw createHttpError(400, "Please provide a search query");
    }

    const result = await MarkModel.find({
      sRegNo: { $regex: query, $options: "i" },
    }).exec();

    if (!result) {
      throw createHttpError(404, "Mark not found");
    }

    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};
