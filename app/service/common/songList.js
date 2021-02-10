const songListController = require('../../controller/common/songList');

const Service = require('egg').Service;

class SongListService extends Service {
    async getAllSongLists() {
        const result = await this.app.mysql.select('songlist');
        return result;
    };
    async deleteSongList(slid) {
        console.log(slid);
        const conn = await this.app.mysql.beginTransaction(); // 初始化事务
        try {
            await conn.delete('songlist', { id: slid });
            await conn.delete('sltouser', { slid }); // 第二步操作
            await conn.delete('stosl', { slid }); // 第二步操作
            await conn.query('ALTER TABLE songlist AUTO_INCREMENT = 1;');
            await conn.query('ALTER TABLE sltouser AUTO_INCREMENT = 1;');
            await conn.query('ALTER TABLE stosl AUTO_INCREMENT = 1;');
            await conn.commit(); // 提交事务
        } catch (err) {
            // error, rollback
            await conn.rollback(); // 一定记得捕获异常后回滚事务！！
            throw err;
        }
        return { success: true };
    }
    async getSongListById(slid) {
        const conn = await this.app.mysql.beginTransaction();
        let result1, result2;
        try {
            result1 = await conn.get('songlist', {
                id: slid
            });
            result2 = await conn.select('stosl', {
                where: { slid },
                limit: 10
            })
            await conn.commit(); // 提交事务
        } catch (err) {
            // error, rollback
            await conn.rollback(); // 一定记得捕获异常后回滚事务！！
            throw err;
        }
        result1.songs = [];
        result2.forEach(item => {
            result1.songs.push(item.sid);
        })
        return result1;
    }
    async updateSongList(songList, slid, songs) {
        const conn = await this.app.mysql.beginTransaction();
        try {
            await conn.update('songlist', {
                slid,
                ...songList
            });
            await conn.update('stosl', {
                where: { slid },
                songs
            })
            await conn.commit();
        } catch (error) {

        }
    }
    async addSongList(songList, songs) {
        const conn = await this.app.mysql.beginTransaction();
        let result;
        try {
            result = await conn.insert('songlist', {
                ...songList
            });
            let sql = `insert into stosl (slid,sid) values `;
            songs.forEach(item => {
                sql += `(${result.insertId},${item}),`
            })
            sql = sql.substr(0, sql.length - 1);
            await conn.query(sql);
            await conn.commit();
            return { success: true };
        } catch (error) {

        }
    }
}

module.exports = SongListService;