const Controller = require('egg').Controller;

class ArtistController extends Controller {
    async getAllArtists() {
        const ctx = this.ctx;
        const { offset } = ctx.query;
        const result = await ctx.service.common.artist.getAllArtists(offset);
    }
    async selectArtistByName() {
        const ctx = this.ctx;
        const { name } = ctx.query;
        const result = await ctx.service.common.artist.selectArtistByName(name);
    }
    async selectArtistByType() {
        const ctx = this.ctx;
        const { type, offset } = ctx.query;
        const result = await ctx.service.admin.artist.selectArtistByType(type, offset);
    }
}

module.exports = ArtistController;