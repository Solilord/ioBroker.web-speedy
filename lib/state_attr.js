// Classification of all state attributes possible
const state_attrb = {
    // Speed results
    'test_best': {
        name: 'Run test on best server captured by scan',
        type: 'boolean',
        role: 'button',
        write: true,
    },
    'test_specific': {
        name: 'Run test on selected server',
        type: 'mixed',
        role: 'button',
        write: true,
    },
    'running_download': {
        name: 'Currently download test in progress ?',
        type: 'boolean',
        role: 'info.status',
    },
    'running_download_speed': {
        name: 'Current download speed of test',
        type: 'number',
        role: 'info.status',
        unit: 'kb/s',
    },
    'running_download_progress': {
        name: 'Current download progress in %',
        type: 'number',
        role: 'info.status',
        unit: '%',
    },
    'running_upload': {
        name: 'Currently download test in progress ?',
        type: 'boolean',
        role: 'info.status',
    },
    'running_upload_speed': {
        name: 'Current upload speed of test',
        type: 'number',
        role: 'info.status',
        unit: 'kb/s',
    },
    'running_upload_progress': {
        name: 'Current upload progress in %',
        type: 'number',
        role: 'info.status',
        unit: '%',
    },
    'running': {
        name: 'Currently Speed test in progress ?',
        type: 'boolean',
        role: 'info.status',
    },    
    'download_MB': {
        name: 'download bandwidth in megabytes per second',
        type: 'number',
        role: 'state',
        unit: 'MB/s',
    },
    'download_Mb': {
        name: 'download bandwidth in megabits per second',
        type: 'number',
        role: 'state',
        unit: 'Mb/s',
    },
    'upload_MB': {
        name: 'upload bandwidth in megabytes per second',
        type: 'number',
        role: 'state',
        unit: 'MB/s',
    },
    'upload_Mb': {
        name: 'upload bandwidth in megabits per second',
        type: 'number',
        role: 'state',
        unit: 'Mb/s',
    },
    'originalDownload': {
        name: 'unadjusted downloadh bandwidth in bytes per second',
        type: 'number',
        role: 'state',
        unit: 'b/s',
    },
    'originalUpload': {
        name: 'unadjusted upload bandwidth in bytes per second',
        type: 'number',
        role: 'state',
        unit: 'b/s',
    },

    // Client details
    'ip': {
        name: 'ip of client',
        type: 'number',
        role: 'info.ip',
    },
    'lat': {
        name: 'latitude of location',
        type: 'number',
        role: 'value.gps.latitude ',
        unit: '°',
    },
    'lon': {
        name: 'longtitude of location',
        type: 'number',
        role: 'value.gps.longtitude ',
        unit: '°',
    },
    'isp': {
        name: 'clients isp',
        type: 'mixed',
        role: 'state',
    },
    'isprating': {
        name: 'some kind of rating',
        type: 'number',
        role: 'state',
    },
    'rating': {
        name: 'another rating, which is always 0 it seems',
        type: 'number',
        role: 'state',
    },
    'ispdlavg': {
        name: 'avg download speed by all users of this isp in Mbps',
        type: 'number',
        role: 'state',
        unit: 'Mb/s',
    },
    'ispulavg': {
        name: 'avg upload speed by all users of this isp in Mbps',
        type: 'number',
        role: 'state',
        unit: 'Mb/s',
    },

    // Server details
    'url': {
        name: 'test server url',
        type: 'mixed',
        role: 'state',
    },
    'url2': {
        name: 'test server url',
        type: 'mixed',
        role: 'state',
    },
    'host': {
        name: 'test server hostname',
        type: 'mixed',
        role: 'state',
    },
    'location': {
        name: 'name of the location',
        type: 'mixed',
        role: 'state',
    },
    'name': {
        name: 'name of the location',
        type: 'mixed',
        role: 'state',
    },
    'country': {
        name: 'name of the country',
        type: 'mixed',
        role: 'state',
    },
    'cc': {
        name: 'country code',
        type: 'mixed',
        role: 'state',
    },
    'sponsor': {
        name: 'who pays for the test server',
        type: 'mixed',
        role: 'state',
    },
    'dist': {
        name: 'distance from client to server (SI)',
        type: 'number',
        role: 'state',
        unit: 'km',
    },
    'distMi': {
        name: 'distance from client to server (Imperial)',
        type: 'number',
        role: 'state',
        unit: 'mile',
    },
    'distance': {
        name: 'distance from client to server (SI)',
        type: 'number',
        role: 'state',
        unit: 'km',
    },
    'distanceMi': {
        name: 'distance from client to server (Imperial)',
        type: 'number',
        role: 'state',
        unit: 'mile',
    },
    'bestPing': {
        name: 'Best result to download a small file from the server, in ms',
        type: 'number',
        role: 'state',
        unit: 'ms',
    },
    'ping': {
        name: 'how long it took to download a small file from the server, in ms',
        type: 'number',
        role: 'state',
        unit: 'ms',
    },
    'id': {
        name: 'the id of the server',
        type: 'number',
        role: 'state',
    },
    'test_duration': {
        name: 'The maximum length (in ms) of a single test run (upload or download)',
        type: 'number',
        role: 'state',
        write: true,
        unit: 'seconds',
    },  
    'Last_Run_Timestamp': {
        name: 'Timestamp of last test-execution',
        type: 'number',
        role: 'state',
    },    
};

module.exports = state_attrb;