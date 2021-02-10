const Controller = require('egg').Controller;

class SongListController extends Controller {
    async getAllSongLists() {
        const ctx = this.ctx;
        const result = await ctx.service.common.songList.getAllSongLists();
        ctx.body = {
            status: 200,
            desc: '获取成功',
            songLists: result
        }
    };
    async deleteSongList() {
        const ctx = this.ctx;
        const { slid, oid } = ctx.query;
        // if (ctx.session.uid !== oid) ctx.body = { status: 401, desc: '无权限' };
        const result = await ctx.service.common.songList.deleteSongList(slid);
        if (result.success) {
            ctx.body = {
                status: 204,
                desc: '删除成功'
            };
        }
    }
    async getSongListById() {
        const ctx = this.ctx;
        const { slid } = ctx.query;
        const result = await ctx.service.common.songList.getSongListById(slid);
        ctx.body = {
            status: 200,
            songList: result
        };
    }
    async updateSongList() {
        const ctx = this.ctx;
        let { songList, slid } = ctx.request.body;
        let realSongList = {};
        for (let k in songList) {
            if (songList.hasOwnProperty(k) && k !== songs) {
                realSongList[k] = songList[k];
            }
        }
        const result = await ctx.service.common.songList.updateSongList(realSongList, slid, songList.songs);
        console.log(result);
    }
    async addSongList() {
        const ctx = this.ctx;
        const { songs, ...songList } = ctx.request.body;
        const result = await ctx.service.common.songList.addSongList(songList, songs);
        if (result.success) {
            ctx.body = {
                status: 204,
                desc: '添加成功'
            }
        }
    }
}

module.exports = SongListController;