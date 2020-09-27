const path = require('path')
const swaggerMerger = require('swagger-merger')

const types = ['internal']
const repoRootPath = path.join(__dirname, '../../')

types.forEach((type) => {
  const dir = path.resolve(repoRootPath, './doc/swagger', type)
  const indexFilePath = path.resolve(dir, 'index.yml')
  const outputFilePath = path.resolve(dir, 'swagger.yml')

  const option = {
    input: indexFilePath,
    output: outputFilePath,
  }

  swaggerMerger(option).catch((err) => {
    console.error(err)
  })
})