var client={
    'clientID': 'openinfoman',
    'name': 'OpenInfoMan',
    'passwordAlgorithm': 'sha512',
    "passwordSalt": '72a00618ac4493ce12d833d4cf9a975f',
    'passwordHash':'f1c79ab2cf8b5c7c9ab0c701433ae1499d7511d206f3b272913d0d1762c1ebf177bc7540cf58e885f8e2955359f913c4ffa6b8772f7eeb7aa4dbc634b0dd2349',
    'roles': ['irl'],
    '__v': 0
}, channel={
    'name': 'Interlinked Registry',
    'urlPattern': '/CSD||/static',
    'allow': ['openinfoman'],
    'routes': {
        'name': 'IRL route',
        'primary': true,
        'host': '$ILR_HOST',
        'port': 8984,
        'secured': false,
        'username': 'openinfoman',
        'password': 'openinfoman'
    }
};

db.clients.insert(client);
db.channels.insert(channel);
