const Service = require('egg').Service;

class ArtistService extends Service {
    async getAllArtists(offset) {
        offset = +offset;
        const result = await this.app.mysql.select('artists', {
            where: { state: 0 },
            offset,
            limit: 10
        });
        return result;
    }
    async selectArtistByName(name) {
        const sql = `select * from artists where name like "%${name}%"`
        const result = await this.app.mysql.query(sql);
        console.log(result);
    }
    async selectArtistByType(type, offset) {
        const result = await this.app.mysql.select('artist', {
            id: type,
            offset
        });
        console.log(result);
    }
}

module.exports = ArtistService;