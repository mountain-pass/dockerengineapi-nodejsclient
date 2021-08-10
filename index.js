const DockerEngineApi = require('./dist/index')
const ApiClient = require('./dist/ApiClient')

// ApiClient.instance = new ApiClient({ basePath: 'http+unix://%2Fvar%2Frun%2Fdocker.sock' })

const init = async () => {
    var api = new DockerEngineApi.ContainerApi()
    // var opts = {
    //     'body': new DockerEngineApi.UNKNOWN_BASE_TYPE() // {UNKNOWN_BASE_TYPE} 
    // };
    const result = await api.containerList()
    console.log('containers', result)
}

init()
