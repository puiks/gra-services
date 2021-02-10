const Controller = require('egg').Controller;

class ArtistController extends Controller {
    async deleteArtist() {
        const ctx = this.ctx;
        const { singer } = ctx.query;
        const result = await ctx.service.admin.artist.deleteArtist(singer);
        if (result.affectedRows === 1) {
            ctx.body = {
                status: 204
            };
        }
    }
    async modifyArtist() {
        const ctx = this.ctx;
        const artistInfo = ctx.request.body;
        const result = await ctx.service.admin.artist.modifyArtist(artistInfo);
    }
}

module.exports = ArtistController;