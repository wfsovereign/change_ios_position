const program = require('commander')
const requestTool = require('./request')
const gcj2wgs = require('./transform').gcj2wgs

program
  .version('1.0.0')
  .option('-s, --show', 'show default config')


program
  .command('go [key]')
  .description('use default config request')
  .action((key) => {
    requestTool(key)
      .then(res => {
        let targetStr = res.data.match(/{[\w\W]+\)$/g)[0]
        targetStr = targetStr.substring(0, targetStr.length - 1)
        const result = JSON.parse(targetStr).pois[0].location.split(',')
        console.log('lat ---> ', result[1])
        console.log('lon ---> ', result[0])
        console.log(gcj2wgs(...result.reverse()))
      })
      .catch(e => {
        console.log('error ,', e)
      })
  })


program.parse(process.argv);
