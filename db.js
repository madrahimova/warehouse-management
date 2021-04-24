module.exports = {
    max: 100,
    count: 0,
    clients: {},
    providers: {},
    provider: function (provider, value) {
        this.providers[provider] = parseInt(value);
        return provider;
    },
    client: function (client, value) {
        this.clients[client] = parseInt(value);
        return client;
    },
    upload: function (provider) {
        if (this.count + this.providers[provider] > this.max)
            return -1;
        this.count += this.providers[provider];
        return this.count;
    },
    download: function (client) {
        if (this.count < this.clients[client])
            return -1;
        this.count -= this.clients[client];
        return this.count
    }
}
