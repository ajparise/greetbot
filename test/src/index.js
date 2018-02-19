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

  describe('POST /welcome', function () {
    describe('when calling /welcome foo', function () {
      it('should call the foo test', function (done) {
        const request = {
          body: {
            token: 'gK3YDdCtddql7fFOka0uSq1a',
            team_id: 'T8ZSYHBD2',
            team_domain: 'violins',
            channel_id: 'D93KK60FN',
            channel_name: 'directmessage',
            user_id: 'U930WKW8G',
            user_name: 'angelocordon',
            command: '/welcome',
            text: 'test',
            response_url: 'https://hooks.slack.com/commands/T8ZSYHBD2/316329130113/l41UZnEABvaGSRGzRBsse8z5',
            trigger_id: '316329130177.305916589444.0d141841d6d1599adf447182d93ae2f2'
          }
        };

        request.post('/welcome')
          .send(request)
          .end(function (err, res) {
            console.log(res);
            done(err);
          })
      });
    });

    describe('when calling /welcome python', function () {
      it('should return the python message');
    });

    describe('when calling /welcome test', function () {
      it('should return with the welcome message');
    });
  });
});
