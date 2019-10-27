describe('Section 1, Variables', function() {
	describe('Step 1:', function() {
		it('should be a variable named firstName', function() {
            if(typeof firstName === 'undefined') {
                chai.expect(firstName).to.be.undefined;
            } else {
                chai.expect(firstName).to.a('string');
            }
        });
		it('should be assigned a string value', function() {
			chai.expect(firstName).to.be.a('string');
		});
	});
});
