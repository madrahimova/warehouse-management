module.exports = {
    max: 10,
    count: 0,
    upload: function (value) {
        if (this.count + parseInt(value) > this.max)
            return -1;
        this.count += parseInt(value);
        return this.count;
    },
    download: function (value) {
        if (this.count < parseInt(value))
            return -1;
        this.count -= parseInt(value);
        return this.count;
    }
}
