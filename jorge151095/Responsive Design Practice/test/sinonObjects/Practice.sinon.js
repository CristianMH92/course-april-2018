const sinon = require('sinon');
const dummy = {};

const mock = sinon.mock(object);
//@TODO actions here!

mock.verify();

mock.restore();

const spy = sinon.spy(object,  'functionPractice');
//@TOD functions watcher here!

spy.restore();
const stub = sinon.stub(object,  'functionPractice').callsFake(() => {
    //@TODO the overwrite behavior
});

// @TODO assertions or expects here!
stub.restore();