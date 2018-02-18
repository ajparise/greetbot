describe('API Routes', function () {
  describe('GET /', function () {
    it('returns a welcome message', function (done) {
      request.get('/')
        .expect(200)
        .end(function(err, res) {
          const expectedMessage = '<h2>The Welcome/Code of Conduct app is running</h2> <p>Follow the instructions in the README to configure this Slack App and your environment variables.</p>';

          expect(res.text).to.equal(expectedMessage);
          done(err);
        });
    });
  });
});
