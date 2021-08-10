const DockerEngineApi = require('./dist/api')

// const ApiClient = require('./dist/ApiClient')
// ApiClient.instance = new ApiClient({ basePath: 'http://localhost/v1.41' })

const init = async () => {
    var api = new DockerEngineApi.ContainerApi('http://unix:/var/run/docker.sock:')
    // var opts = {
    //     'body': new DockerEngineApi.UNKNOWN_BASE_TYPE() // {UNKNOWN_BASE_TYPE} 
    // };
    try {
        const result = await api.containerList(true)
        result.body[0].
            console.log('containers', result)
    } catch (err) {
        console.log('error', err.message)
    }
}

init()