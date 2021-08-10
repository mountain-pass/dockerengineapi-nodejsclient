const DockerEngineApi = require('./dist/index')

const init = async () => {
    var api = new DockerEngineApi.ContainerApi()
    var opts = {
        'body': new DockerEngineApi.UNKNOWN_BASE_TYPE() // {UNKNOWN_BASE_TYPE} 
    };
    console.log('containers', await api.containerList(true, opts))
}

init()