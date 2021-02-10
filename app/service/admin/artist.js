const Service = require('egg').Service;

class ArtistService extends Service {
    async deleteArtist(singer) {
        const result = await this.app.mysql.update('artists', {
            state: 1
        }, {
            where: { singer }
        });
        return result;
    }
    async modifyArtist(artistInfo) {
        console.log(artistInfo);
        // const result = await this.app.mysql.update('artist', {
        //     ...artistInfo
        // });
    }
}

module.exports = ArtistService;