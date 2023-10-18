const getAllPatients = require('./patients');
const getAllDoctors = require('./doctors');
const getVisitAppointmentsByPatientID = require('./appointments');
const getMedicalHistoryByPatientID = require('./medicalhistories');
const getLabResultsByPatientID = require('./labresults');
const getVitalsByPatientID = require('./vitals');
const authResolvers = require('./authresolvers');


const resolvers = {
  
  Query: {
    getAllPatients,
    getAllDoctors,
    getVisitAppointmentsByPatientID,
    getMedicalHistoryByPatientID,
    getLabResultsByPatientID,
    getVitalsByPatientID
  },
  Mutation: {
    ...authResolvers,
  },
};

module.exports = resolvers;