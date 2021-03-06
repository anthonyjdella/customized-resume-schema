var test = require('tape');
var ZSchema = require('z-schema');
const fixtures = require('./__test__/dates.json');
// var mockDateSchema = require('./__test__/mockDateSchema.json');

const mockDateSchema = {
  "type": "string",
  "description": "Mock Date Format",
  "pattern": "^([1-2][0-9]{3}-[0-1][0-9]-[0-3][0-9]|[1-2][0-9]{3}-[0-1][0-9]|[1-2][0-9]{3}|present|current)$"
};

function dateValidate(resumeJson, callback) {
  var callbackWrapper = function(err, valid) {
    if(err) {
      callback(err)
    } else {
      callback(null, {valid: valid});
    }
  }

  new ZSchema().validate(resumeJson, mockDateSchema, callbackWrapper);
}

test('dates - YYYY-MM-DD', (t) => {
  dateValidate(fixtures.yearMonthDay, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('dates - YYYY-MM', (t) => {
  dateValidate(fixtures.yearMonth, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('dates - YYYY', (t) => {
  dateValidate(fixtures.yearMonthDay, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('dates - present', (t) => {
  dateValidate(fixtures.present, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('dates - current', (t) => {
  dateValidate(fixtures.current, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('dates - invalid', (t) => {
  dateValidate(fixtures.invalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});
