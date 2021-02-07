const Service = require('egg').Service;

class ArtistService extends Service {
    async deleteArtist(singer) {
        console.log(singer);
        // const conn = await this.app.mysql.beginTransaction();
        try {
            // result = await conn.delete('artists') 
        } catch (error) {

        }
    }
    async modifyArtist(artistInfo) {
        console.log(artistInfo);
        // const result = await this.app.mysql.update('artist', {
        //     ...artistInfo
        // });
    }
}

module.exports = ArtistService;