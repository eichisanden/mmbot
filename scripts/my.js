module.exports = (robot) => {
  robot.respond(/hoge/, (msg) => {
    robot.brain.set('hoge', 'Hello world');
    const m = robot.brain.get('hoge');
    console.log('hoge=' + m);
    
  });
};

