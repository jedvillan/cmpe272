'use strict';

var mongoose = require('mongoose'),
    Payroll = mongoose.model('Payroll');

exports.list_all_payroll = function(req, res) {
  Payroll.find({}, function(err, payroll) {
    if (err)
      res.send(err);
    res.json(payroll);
  });
};

exports.add_new_payroll = function(req, res) {
  var new_payroll = new Payroll(req.body);
  new_payroll.save(function(err, payroll) {
    if (err)
      res.send(err);
    res.json(payroll);
  });
};

exports.read_a_payroll = function(req, res) {
  Payroll.findById(req.params.employeeId, function(err, payroll) {
    if (err)
      res.send(err);
    res.json(payroll);
  });
};

exports.update_a_payroll = function(req, res) {
  Payroll.findOneAndUpdate({employee_id: req.params.employee_id}, req.body, {new: true}, function(err, payroll) {
    if (err)
      res.send(err);
    res.json(payroll);
  });
};

exports.delete_a_payroll = function(req, res) {
  Payroll.remove({
    employee_id: req.params.employee_id
  }, function(err, payroll) {
    if (err)
      res.send(err);
    res.json({ message: 'Payroll entry successfully deleted' });
  });
};
