
const Doctor = require('./doctors');
const Patient = require('./patients');
const MedicalHistory = require('./medicalhistories');
const VisitAppointment = require('./appointments');
const LabResult = require('./labresults');
const Vital = require('./vitals');
const User = require('./users')

Doctor.hasMany(Patient, { foreignKey: 'DoctorID' });
Doctor.belongsTo(User, { foreignKey: 'user_id' });
Patient.belongsTo(Doctor, { foreignKey: 'DoctorID' });
Patient.belongsTo(User, { foreignKey: 'user_id' });
Patient.hasOne(MedicalHistory, { foreignKey: 'PatientID' }); 
Patient.hasMany(VisitAppointment, { foreignKey: 'PatientID' }); 
Patient.hasMany(LabResult, { foreignKey: 'PatientID' }); 
Patient.hasMany(Vital, { foreignKey: 'PatientID' });


LabResult.belongsTo(VisitAppointment, { foreignKey: 'VisitID' });
LabResult.belongsTo(Patient, { foreignKey: 'PatientID' });
LabResult.belongsTo(Doctor, { foreignKey: 'DoctorID' });

MedicalHistory.belongsTo(Patient, { foreignKey: 'PatientID' });

VisitAppointment.belongsTo(Patient, { foreignKey: 'PatientID' });
VisitAppointment.belongsTo(Doctor, { foreignKey: 'DoctorID' });
VisitAppointment.hasMany(LabResult, { foreignKey: 'VisitID' });
VisitAppointment.hasOne(Vital, { foreignKey: 'VisitID' });

Vital.belongsTo(VisitAppointment, { foreignKey: 'VisitID'});
Vital.belongsTo(Patient, { foreignKey: 'PatientID'});
Vital.belongsTo(Doctor, { foreignKey: 'DoctorID'});

module.exports = {
  Doctor,
  Patient,
  MedicalHistory,
  VisitAppointment,
  LabResult,
  Vital,
};
